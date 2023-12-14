import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <>
      <UserButton afterSignOutUrl='/' />
      <p>This is for authenticated user only</p>
    </>
  );
}
