import Modal from "./modal";
import Button from "./ui/custom-button";
import CustomeInput from "./ui/custom-input";
import { useAppContext } from "../hooks/hooks";
import { useState } from "react";

const Create = ({ showCreate, closeCreate }) => {
  const { isLoading, createProduct } = useAppContext();

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    quantity: "",
    image: null,
    colors: "",
    sizes: "",
    category: "",
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.title]: e.target.value });
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    await createProduct(form);
  };

  return (
    <Modal isOpen={showCreate} onClose={closeCreate}>
      <div className="max-w-lg mx-auto p-6">
        <h2 className="text-lg font-bold mb-4">Edit Product</h2>

        <CustomeInput
          value={form.title}
          onChange={handleInputChange}
          title="Title"
          placeholder="Enter product title"
        />
        <CustomeInput
          title="Description"
          placeholder="Enter product description"
          value={form.description}
          onChange={handleInputChange}
        />
        <CustomeInput
          title="Price"
          value={form.price}
          onChange={handleInputChange}
          placeholder="Enter product price"
        />
        <CustomeInput
          title="Quantity"
          value={form.quantity}
          onChange={handleInputChange}
          placeholder="Enter product quantity"
        />

        <label className="block mb-2 text-sm">Image</label>
        <input
          type="file"
          name="image"
          className="w-full px-3 text-sm font-light py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          accept="image/*"
        />

        <CustomeInput
          title="colors"
          value={form.colors}
          onChange={handleInputChange}
          placeholder="e.g., Red, Blue, Green"
        />

        <CustomeInput
          title="sizes"
          value={form.sizes}
          onChange={handleInputChange}
          placeholder="e.g., S, M, L, XL"
        />

        <label className="block mb-2 text-sm">Category</label>
        <select
          name="category"
          className="w-full px-3 text-sm font-light py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
        >
          <option>Select a category</option>
        </select>

        <Button
          onClick={handleCreateProduct}
          title={isLoading ? "Loading..." : "Create Product"}
        />
      </div>
    </Modal>
  );
};

export default Create;
