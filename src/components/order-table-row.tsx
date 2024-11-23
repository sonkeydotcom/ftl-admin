import React from "react";
import { useAppContext } from "../hooks/hooks";

interface order {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
  category: string;
}

interface TableRowProps {
  order: order;
}

const OrderTableRow: React.FC<TableRowProps> = ({ order }) => {
  const { setSelectedorder } = useAppContext();

  const handleEdit = (order: order) => {
    console.log(`Edit order with ID: ${order.id}`);
    setSelectedorder(order);
  };

  const handleDelete = (orderId: string) => {
    console.log(`Delete order with ID: ${orderId}`);
  };

  return (
    <tr className="hover:bg-gray-50 justify-center content-center items-center text-center">
      <td className="px-4 py-2 border border-gray-300">{order.customerName}</td>
      <td className="px-4 py-2 border border-gray-300">{order.id}</td>
      <td className="px-4 py-2 border border-gray-300">{order.date}</td>
      <td className="px-4 py-2 border border-gray-300">{order.status}</td>
      <td className="px-4 py-2 border border-gray-300">{order.totalPrice}</td>
      <td className="px-4 py-2 border border-gray-300">
        <button>View details</button>
      </td>
    </tr>
  );
};

export default OrderTableRow;
