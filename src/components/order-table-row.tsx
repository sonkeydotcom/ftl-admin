import React from "react";
// import { useAppContext } from "../hooks/hooks";
import moment from "moment";
import { Order } from "../types/types";

interface TableRowProps {
  order: Order;
  setShowOrderDetails: (show: boolean) => void;
  setOrderId: (orderId: number) => void;
}

const OrderTableRow: React.FC<TableRowProps> = ({
  order,
  setShowOrderDetails,
  setOrderId,
}) => {
  // const { setSelectedorder } = useAppContext();

  // const handleEdit = (order: order) => {
  //   console.log(`Edit order with ID: ${order.id}`);
  //   setSelectedorder(order);
  // };

  // const handleDelete = (orderId: string) => {
  //   console.log(`Delete order with ID: ${orderId}`);
  // };

  return (
    <tr className="hover:bg-gray-50 justify-center content-center items-center text-center">
      <td className="px-4 py-2 border border-gray-300">
        {order.customerName || order.userId}
      </td>
      <td className="px-4 py-2 border border-gray-300">{order.id}</td>
      <td className="px-4 py-2 border border-gray-300">
        {moment(order.createdAt).format("MMM Do YY")}
      </td>
      <td className="px-4 py-2 border border-gray-300">{order.status}</td>
      <td className="px-4 py-2 border border-gray-300">{order.totalPrice}</td>
      <td className="px-4 py-2 border border-gray-300">
        <button
          onClick={() => {
            setShowOrderDetails(true);
            setOrderId(order.id);
          }}
        >
          View details
        </button>
      </td>
    </tr>
  );
};

export default OrderTableRow;
