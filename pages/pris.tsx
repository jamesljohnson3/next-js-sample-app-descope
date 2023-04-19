import { PrismaClient } from '@prisma/client/edge'
import type { User } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'mysql://8jd7h694wwl5klteql3j:pscale_pw_HsX9YblRT63tKWxiNmx2hM2ziNM1HPsO4N6I1T2Rhr0@aws.connect.psdb.cloud/dub-next-beam?sslaccept=strict',
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
