import { headers } from 'next/headers';
import { WebhookReceiver } from 'livekit-server-sdk';

import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

const receiver = new WebhookReceiver(
  process.env.LIVEKIT_API_KEY!,
  process.env.LIVEKIT_SECRET_KEY!
);

export async function POST(req: Request) {
  const body = await req.text();
  const headerPayload = headers();
  const authorization = headerPayload.get('Authorization');

  if (!authorization) {
    return new NextResponse('No authorization headers', { status: 400 });
  }

  const event = receiver.receive(body, authorization);

  if (event.event === 'ingress_ended') {
    await db.stream.updateMany({
      where: {
        ingressId: event.egressInfo?.egressId,
      },
      data: {
        isLive: false,
      },
    });
  }

  if (event.event === 'ingress_started') {
    await db.stream.updateMany({
      where: {
        ingressId: event.ingressInfo?.ingressId,
      },
      data: {
        isLive: true,
      },
    });
  }
}
