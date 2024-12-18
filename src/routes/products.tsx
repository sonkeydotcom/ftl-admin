import { useMemo, useState } from "react";
import TableRow from "../components/TableRow";

import { useAppContext } from "../hooks/hooks";
import Edit from "../components/edit";
import Create from "../components/create";
import CreateCategory from "../components/create-category";

const Products = () => {
  const { selectedProduct, fetchProducts, products, isLoading } =
    useAppContext();

  const [showCreate, setShowCreate] = useState(false);
  const [catModal, setShowCatModal] = useState(false);

  const closeCreate = () => {
    setShowCreate(false);
  };

  useMemo(() => {
    fetchProducts();
  }, []);

  console.log("Selected Product:", selectedProduct);
  return (
    <div className=" mx-5 overflow-x-auto">
      <div
        className="
      flex justify-end items-center px-4 py-2 gap-4 "
      >
        <button
          onClick={() => setShowCatModal(true)}
          className=" text-black font-bold py-2 px-4 rounded"
        >
          Create category
        </button>

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
          {isLoading ? (
            <tr>
              <td colSpan={5} className="py-3 text-center">
                Loading...
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <TableRow key={product.id} product={product} />
            ))
          )}
        </tbody>
      </table>

      <CreateCategory
        catModal={catModal}
        closeCatModal={() => setShowCatModal(false)}
        onClose={() => setShowCatModal(false)}
      />

      <Edit showEdit={showCreate} closeEdit={() => setShowCreate(false)} />
      {showCreate && (
        <Create showCreate={showCreate} closeCreate={closeCreate} />
      )}
    </div>
  );
};

export default Products;
