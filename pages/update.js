import UpdateProduct from '../components/UpdateProduct';

export default function UpdatePage({ query }) {
  console.log('query from update', query); // query.id is what we need to update
  return (
    <div>
      <UpdateProduct id={query.id} />
    </div>
  );
}
