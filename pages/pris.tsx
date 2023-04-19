import { PrismaClient } from '@prisma/client/edge'
import type { User } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'prisma://aws-us-east-1.prisma-data.com/?api_key=UClUDQbgbwrScqUxWoPPQB_iEaWMuBuyxtIRb7dn6xcqRTcQRHXudBbyjvpePA_q',
    },
  },
});

export default function Users({ users }: { users: User[] }) {
  return (
    <div>
      <h1>All Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const users = await prisma.user.findMany();
  return {
    props: {
      users,
    },
  };
} 
