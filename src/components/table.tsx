import React from "react";

interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
  category: string;
}

interface TableProps {
  product: Product;
}

const Table: React.FC<TableProps> = ({ product }) => {
  const handleEdit = (productId: string) => {
    console.log(`Edit product with ID: ${productId}`);
  };

  const handleDelete = (productId: string) => {
    console.log(`Delete product with ID: ${productId}`);
  };

  return (
    <table className="w-full border-collapse border border-gray-300 rounded-lg">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 border border-gray-300">Product Image</th>
          <th className="px-4 py-2 border border-gray-300">Title</th>
          <th className="px-4 py-2 border border-gray-300">Price</th>
          <th className="px-4 py-2 border border-gray-300">Quantity</th>
          <th className="px-4 py-2 border border-gray-300">Action</th>
        </tr>
      </thead>
      <tbody>
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
          <td className="px-4 py-2 border border-gray-300">
            {product.quantity}
          </td>
          <td className="px-4 py-2 border border-gray-300">
            <button
              onClick={() => handleEdit(product.id)}
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
      </tbody>
    </table>
  );
};

export default Table;
