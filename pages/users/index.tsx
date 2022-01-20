import Layout from '../../components/Layout';

interface UsersProps {
  dataUsers: Array<any>;
}

export default function Users(props: UsersProps) {
  const { dataUsers } = props;

  return (
    <Layout pageTitle="User Detail Page">
      <h1>List Users</h1>
      <ul>
        {dataUsers.map((user) => (
          <li>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
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
