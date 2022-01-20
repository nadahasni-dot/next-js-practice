import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import styles from './Users.module.css';

interface UsersProps {
  dataUsers: Array<any>;
}

export default function Users(props: UsersProps) {
  const { dataUsers } = props;
  const router = useRouter();

  return (
    <Layout pageTitle="User Detail Page">
      <h1>List Users</h1>
      <ul>
        {dataUsers.map((user) => (
          <div className={styles.card}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <button type="button" key={user.id} onClick={() => router.push(`/users/${user.id}`)}>Detail</button>
          </div>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();

  return {
    props: {
      dataUsers,
    },
  };
}
