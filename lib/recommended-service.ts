import { db } from '@/lib/db';
import { getSelf } from './auth-service';

export const getRecommended = async () => {
  let userId;

  try {
    const self = await getSelf();
    userId = self.id;
  } catch (error) {
    userId = null;
  }

  let users = [];

  if (userId) {
    users = await db.user.findMany({
      where: {
        AND: [
          {
            NOT: { id: userId },
            followedBy: {
              some: {
                followerId: userId,
              },
            },
          },
        ],
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // console.log(users);
  } else {
    users = await db.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  return users;
};
