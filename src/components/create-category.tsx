import { useState } from "react";
import Modal from "./modal";
import CustomeInput from "./ui/custom-input";
import { useAppContext } from "../hooks/hooks";

interface CategoryFormProps {
  catModal: boolean;
  closeCatModal: () => void;
  onClose: () => void;
}

const CreateCategory: React.FC<CategoryFormProps> = ({
  catModal,
  closeCatModal,
}) => {
  const { createCategory } = useAppContext();
  const [form, setForm] = useState({
    name: "",
    type: "", // Adjusted initial state for clarity
    value: "",
  });

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

  const handleSubmit = () => {
    if (!form.name || !form.type) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    console.log("Category Created:", form);
    const payLoad = {
      name: form.name,
      type: form.type,
      value: form.name, // Adjusted initial state for clarity
    };
    createCategory(payLoad);
    setForm({ name: "", type: "", value: "" });
  };

  return (
    <Modal isOpen={catModal} onClose={closeCatModal}>
      <h2 className="text-lg font-bold mb-4 text-gray-700">
        Create New Category
      </h2>

      {/* Category Type Dropdown */}
      <label
        className="block text-sm font-medium text-gray-600 mb-2"
        htmlFor="type"
      >
        Select Category Type
      </label>
      <select
        id="type"
        name="type"
        value={form.type}
        onChange={handleInputChange}
        className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring focus:ring-blue-300"
      >
        <option value="">Select</option>
        <option value="gender">Gender</option>
        <option value="clothe_type">Clothe Type</option>
      </select>

      {/* Name Input */}
      <CustomeInput
        value={form.name}
        title="Name"
        onChange={handleInputChange}
        name="name"
        placeholder="Enter category name"
      />

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md mt-4"
      >
        Create Category
      </button>
    </Modal>
  );
};

export default CreateCategory;
