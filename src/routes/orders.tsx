import { useState } from "react";
import OrderDetails from "../components/order-details";
import OrderTableRow from "../components/order-table-row";
import { OrderList } from "../constants";

const Orders = () => {
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  return (
    <div className="px-5 py-5">
      <h3>All Orders</h3>

      <table className="w-full border-collapse border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
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
          {OrderList.map((order) => (
            <OrderTableRow key={order.id} order={order} />
          ))}
        </tbody>
      </table>
      <OrderDetails />
    </div>
  );
};

export default Orders;
