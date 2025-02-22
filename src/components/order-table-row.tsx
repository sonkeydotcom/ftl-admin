import React from "react";
// import { useAppContext } from "../hooks/hooks";
import moment from "moment";
import { Order } from "../types/types";

interface TableRowProps {
  order: Order;
  setShowOrderDetails: (show: boolean) => void;
  setOrderId: (orderId: string) => void;
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
    <tr className="hover:bg-gray-50 text-sm justify-center content-center items-center text-center">
      <td className="px-4 py-2 border text-wrap text-clip border-gray-300">
        {order.customerName || order.user}
      </td>
      <td className="px-4 py-2 border border-gray-300">
        {order._id ? order._id.substring(0, 8) : "N/A"}{" "}
        {/* Truncate to 8 characters */}
      </td>

      <td className="px-4 py-2 border border-gray-300">
        {moment(order.createdAt).format("MMM Do YY")}
      </td>
      <td className="px-4 py-2 border border-gray-300">{order.status}</td>
      <td className="px-4 py-2 border border-gray-300">{order.totalAmount}</td>
      <td className="px-4 py-2 border border-gray-300">
        <button
          onClick={() => {
            setShowOrderDetails(true);
            setOrderId(order._id);
          }}
        >
          View details
        </button>
      </td>
    </tr>
  );
};

export default OrderTableRow;
