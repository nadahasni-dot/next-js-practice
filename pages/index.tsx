import Image from 'next/image';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/profile.jpg" width={200} height={200} alt="Profile" />
      <h1>Home</h1>
    </Layout>
  );
}
