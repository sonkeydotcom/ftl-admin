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
    quantity: "",
    description: "",
  });

  // Update form state when selectedProduct changes
  useEffect(() => {
    if (selectedProduct) {
      setForm({
        name: selectedProduct.name,
        price: selectedProduct.price.toString(),
        quantity: selectedProduct.quantity.toString() || "0",
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

  const handleUpdate = () => {
    if (!form.name || !form.price || !form.quantity || !form.description) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Updating product:", form);
    const payLoad: Partial<Product> = {
      id: selectedProduct?.id,
      name: form.name,
      price: parseFloat(form.price),
      quantity: parseInt(form.quantity),
      description: form.description,
      // Add any other fields if needed
    };
    updateProduct(payLoad); // Call context's updateProduct method to save changes
    closeEdit(); // Close the modal after updating
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
          title="Quantity"
          name="quantity"
          value={form.quantity}
          placeholder="Enter product quantity"
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

        {/* Save Button */}
        <div className="mt-6 flex justify-end">
          <Button title="Save" onClick={handleUpdate} />
        </div>
      </div>
    </Modal>
  );
};

export default Edit;
