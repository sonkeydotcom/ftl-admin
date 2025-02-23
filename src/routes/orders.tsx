import { useEffect, useState } from "react";
import OrderDetails from "../components/order-details";
import OrderTableRow from "../components/order-table-row";
import { useAppContext } from "../hooks/hooks";

const Orders = () => {
  const { fetchOrders, orders = [], isLoading } = useAppContext();
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [orderId, setOrderId] = useState("0");

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);
  return (
    <div className="px-5 py-5">
      <h3 className="text-xl font-semibold mb-4">All Orders</h3>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="w-full border-collapse border border-gray-300 rounded-lg">
          <thead className="bg-gray-100 text-sm font-normal">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">Order ID</th>
              <th className="px-4 py-2 border border-gray-300">Date</th>
              <th className="px-4 py-2 border border-gray-300">Order status</th>
              <th className="px-4 py-2 border border-gray-300">Price</th>
              <th className="px-4 py-2 border border-gray-300">{""}</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-2 border border-gray-300 text-center"
                >
                  Loading...
                </td>
              </tr>
            ) : orders.length ? (
              orders.map((order) => (
                <OrderTableRow
                  setShowOrderDetails={setShowOrderDetails}
                  key={order._id}
                  order={order}
                  setOrderId={setOrderId}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-2 border border-gray-300 text-center"
                >
                  No orders available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <OrderDetails
        setShowOrderDetails={setShowOrderDetails}
        showOrderDetails={showOrderDetails}
        orderId={orderId}
      />
    </div>
  );
};

export default Orders;
