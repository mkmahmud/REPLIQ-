 import { useParams } from 'react-router-dom';
import { useGetSingleOrderQuery } from '../../../redux/api/orders/ordersAPI';

const OrderDetails = () => {
    const { id } = useParams();

  const { data } = useGetSingleOrderQuery(id);

  return (
    <div>
      <h2 className="text-large text-primary   font-semibold">
        Order Details
      </h2>
      <div className="my-2 font-semibold">
        <h2>Name:</h2>
        <h2>{data?.userName}</h2>
      </div>
    </div>
  );
};

export default OrderDetails;