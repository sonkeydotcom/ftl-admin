import React, { useState } from "react";
import { products } from "../constants";
import TableRow from "../components/TableRow";
import Modal from "../components/modal";
import CreateProduct from "./create-product";
import { useAppContext } from "../hooks/hooks";
import Edit from "../components/edit";
import Create from "../components/create";

const Products = () => {
  const { selectedProduct, setSelectedProduct } = useAppContext();
  const [isModalOpen, setModalOpen] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const closeCreate = () => {
    setShowCreate(false);
  };

  const closeEdit = () => {
    setSelectedProduct(null);
  };

  console.log("Selected Product:", selectedProduct);
  return (
    <div className=" mx-5 overflow-x-auto">
      <div
        className="
      flex justify-end items-center px-4 py-2 "
      >
        <button
          onClick={() => setShowCreate(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New Product
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-300 rounded-xl">
        <thead className="bg-gray-100 text-sm font-normal">
          <tr>
            <th className="px-4 py-2 border border-gray-300">Product Image</th>
            <th className="px-4 py-2 border border-gray-300">Title</th>
            <th className="px-4 py-2 border border-gray-300">Price</th>
            <th className="px-4 py-2 border border-gray-300">Quantity</th>
            <th className="px-4 py-2 border border-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <TableRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <CreateProduct />
      </Modal>

      <Edit showEdit={selectedProduct?.id} closeEdit={closeEdit} />
      {showCreate && (
        <Create showCreate={showCreate} closeCreate={closeCreate} />
      )}
    </div>
  );
};

export default Products;
