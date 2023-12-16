import { Follow } from '@prisma/client';

interface FollowingProps {
  data: Follow;
}

export const Following = ({ data }: FollowingProps) => {
  return <div>Following</div>;
};
