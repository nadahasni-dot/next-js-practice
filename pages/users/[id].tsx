import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';

export default function UserDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout pageTitle="Users Page">
      <h1>
        User Detail
        {' '}
        {id}
      </h1>
    </Layout>
  );
}
