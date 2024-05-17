import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fethcer = useFetcher();

  return (
    <fethcer.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fethcer.Form>
  );
}

export default UpdateOrder;
// request buat take data dari form tapi karena walang bo
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data)
  return null;
}
