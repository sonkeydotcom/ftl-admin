import React from "react";
import { useAppContext } from "../hooks/hooks";
import { Product } from "../types/types";

interface TableRowProps {
  product: Product;
  setShowEdit: (show: boolean) => void;
}

const TableRow: React.FC<TableRowProps> = ({ product, setShowEdit }) => {
  const { setSelectedProduct, deleteProduct } = useAppContext();

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setShowEdit(true);
  };

  const handleDelete = async (product: Product) => {
    if (!product._id) {
      return;
    }
    const res = await deleteProduct(product._id);
    if (res.success) {
      alert("Product deleted successfully!");
    } else {
      alert("Error deleting product. Please try again.");
    }

    // Implement delete logic here
  };

  return (
    <tr className="hover:bg-gray-50 items-center justify-center content-center text-center">
      <td className="px-4 py-2 border border-gray-300 flex justify-center items-center">
        <div
          style={{
            width: "80px",
            height: "80px",
          }}
        >
          {/* <img
            src={
              product.images?.[0] ||
              "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            } // Provide a default image if `product.image` is null or undefined
            alt={"img"}
            className="w-full h-full object-contain"
          /> */}
          <img
            src={
              product.images && product.images.length > 0
                ? URL.createObjectURL(product.images[0]) // Convert File to URL
                : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            }
            alt="Product Image"
            className="w-full h-full object-contain"
          />
        </div>
      </td>
      <td className="px-4 py-2 border border-gray-300">{product.name}</td>
      <td className="px-4 py-2 border border-gray-300">{product.price}</td>
      <td className="px-4 py-2 border border-gray-300">{product.stock}</td>
      <td className="px-4 py-2 border border-gray-300">
        <button
          onClick={() => handleEdit(product)}
          className="text-sm font-medium text-blue-600 hover:underline"
          aria-label={`Edit ${product.name}`}
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(product)}
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
