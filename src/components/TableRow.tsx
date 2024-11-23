import React from "react";
import { useAppContext } from "../hooks/hooks";

interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
  category: string;
}

interface TableRowProps {
  product: Product;
}

const TableRow: React.FC<TableRowProps> = ({ product }) => {
  const { setSelectedProduct } = useAppContext();

  const handleEdit = (product: Product) => {
    console.log(`Edit product with ID: ${product.id}`);
    setSelectedProduct(product);
  };

  const handleDelete = (productId: string) => {
    console.log(`Delete product with ID: ${productId}`);
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-2 border border-gray-300">
        <div
          style={{
            width: "80px",
            height: "80px",
          }}
        >
          <img
            src={product.image}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
            alt={product.title}
          />
        </div>
      </td>
      <td className="px-4 py-2 border border-gray-300">{product.title}</td>
      <td className="px-4 py-2 border border-gray-300">{product.price}</td>
      <td className="px-4 py-2 border border-gray-300">{product.quantity}</td>
      <td className="px-4 py-2 border border-gray-300">
        <button
          onClick={() => handleEdit(product)}
          className="text-sm font-medium text-blue-600 hover:underline"
          aria-label={`Edit ${product.title}`}
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(product.id)}
          className="text-sm font-medium text-red-600 hover:underline ml-2"
          aria-label={`Delete ${product.title}`}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
