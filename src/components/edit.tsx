import Modal from "./modal";
import Button from "./ui/custom-button";
import CustomeInput from "./ui/custom-input";
import { useAppContext } from "../hooks/hooks";
import { useState, useEffect } from "react";
import { Product } from "../types/types";

interface EditProps {
  showEdit: boolean;
  closeEdit: () => void;
}

const Edit: React.FC<EditProps> = ({ showEdit, closeEdit }) => {
  const { selectedProduct, updateProduct } = useAppContext();

  // Initialize form state based on the selectedProduct
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
  });

  const [error, setError] = useState("");

  // Update form state when selectedProduct changes
  useEffect(() => {
    if (selectedProduct) {
      setForm({
        name: selectedProduct.name,
        price: selectedProduct.price.toString(),
        stock: selectedProduct.stock.toString() || "0",
        description: selectedProduct.description || "",
      });
    }
  }, [selectedProduct]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    if (!form.name || !form.price || !form.stock || !form.description) {
      alert("Please fill in all fields.");
      return;
    }

    const payLoad: Partial<Product> = {
      id: selectedProduct?._id,
      name: form.name,
      price: parseFloat(form.price),
      stock: parseInt(form.stock),
      description: form.description,
      // Add any other fields if needed
    };
    const res = await updateProduct(payLoad);
    console.log("Updated product:", res);
    if (res.success) {
      alert("Product updated successfully!");
      closeEdit();
    } else {
      setError("Error updating product. Please try again.");
    }
  };

  return (
    <Modal isOpen={showEdit} onClose={closeEdit}>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4 text-gray-700">Edit Product</h2>

        {/* Name Input */}
        <CustomeInput
          title="Name"
          name="name"
          value={form.name}
          placeholder="Enter product name"
          onChange={handleInputChange}
        />

        {/* Price Input */}
        <CustomeInput
          title="Price"
          name="price"
          value={form.price}
          placeholder="Enter product price"
          onChange={handleInputChange}
          type="number"
        />

        {/* Quantity Input */}
        <CustomeInput
          title="Stock"
          name="stock"
          value={form.stock}
          placeholder="Enter product stock"
          onChange={handleInputChange}
          type="number"
        />

        {/* Description Input */}
        <CustomeInput
          title="Description"
          name="description"
          value={form.description}
          placeholder="Enter product description"
          onChange={handleInputChange}
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        {/* Save Button */}
        <div className="mt-6 flex justify-end">
          <Button title="Save" onClick={handleUpdate} />
        </div>
      </div>
    </Modal>
  );
};

export default Edit;
