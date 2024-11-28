import React from "react";
import { useAppContext } from "../hooks/hooks";
import { Product } from "../types/types";

interface TableRowProps {
  product: Product;
}

const TableRow: React.FC<TableRowProps> = ({ product }) => {
  const { setSelectedProduct } = useAppContext();

  const handleEdit = (product: Product) => {
    console.log(`Edit product with ID: ${product.id}`);
    setSelectedProduct(product);
  };

  // const handleDelete = (productId: number) => {
  //   deleteProduct(productId);
  // };

  return (
    <tr className="hover:bg-gray-50 items-center justify-center content-center text-center">
      <td className="px-4 py-2 border border-gray-300 flex justify-center items-center">
        <div
          style={{
            width: "80px",
            height: "80px",
          }}
        >
          <img
            src={product.image?.[0] || "/default-image.jpg"} // Provide a default image if `product.image` is null or undefined
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>
      </td>
      <td className="px-4 py-2 border border-gray-300">{product.name}</td>
      <td className="px-4 py-2 border border-gray-300">{product.price}</td>
      <td className="px-4 py-2 border border-gray-300">{product.quantity}</td>
      <td className="px-4 py-2 border border-gray-300">
        <button
          onClick={() => handleEdit(product)}
          className="text-sm font-medium text-blue-600 hover:underline"
          aria-label={`Edit ${product.name}`}
        >
          Edit
        </button>
        <button
          onClick={() => console.log(`Deleting product with ID: ${product.id}`)}
          className="text-sm font-medium text-red-600 hover:underline ml-2"
          aria-label={`Delete ${product.name}`}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
