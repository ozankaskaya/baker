import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;
//This function will clean the cache so the item will be removed as soon as it's deleted
function update(cache, payload) {
  console.log(payload);
  cache.evict(cache.identify(payload.data.deleteProduct));
}

export default function DeleteProduct({ id, children }) {
  const [deleteProduct, { loading, error }] = useMutation(
    DELETE_PRODUCT_MUTATION,
    {
      variables: { id: id },
      //run apollo update function to clean cache
      update: update,
    }
  );
  return (
    <button
      disabled={loading}
      type="button"
      onClick={() => {
        if (confirm('Are you sure you want to delete this item?')) {
          deleteProduct().catch((error) => alert(error.message));
        }
      }}
    >
      {children}
    </button>
  );
}
