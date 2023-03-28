import Layout from '../../../components/layout/Admin';
import { Spinner } from '@chakra-ui/react';
import useSWR from 'swr';
import { get_partners } from '../../../hooks/helpers';
import Table from '../../../components/admin/Table';
import FormUpdate from '../../../components/admin/FormUpdate';

export default function Admin() {
  const { data, error, isLoading } = useSWR(
    'api/partners/',
    get_partners
  );

  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    );

  return (
    <Layout>
      <section className='border border-gray-800 flex-1'>
        <FormUpdate />
        <Table partenaires={data} />
      </section>
    </Layout>
  );
}
