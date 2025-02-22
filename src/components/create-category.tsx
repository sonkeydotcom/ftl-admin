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

  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (!name.trim()) {
      alert("Please enter a category name before submitting.");
      return;
    }

    const payLoad = { name: name.trim() };
    const res = await createCategory(payLoad);

    if (res.success) {
      alert("Category created successfully!");
      setName(""); // Reset form after success
      // closeCatModal(); // Close modal after success
    } else {
      setError(res?.error?.data?.message || "An unknown error occurred.");
    }
  };

  return (
    <Modal isOpen={catModal} onClose={closeCatModal}>
      <h2 className="text-lg font-bold mb-4 text-gray-700">
        Create New Category
      </h2>

      {/* Wrap everything in a form */}
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <CustomeInput
          value={name}
          title="Name"
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="Enter category name"
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit" // ✅ This ensures form submission
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md mt-4"
        >
          Create Category
        </button>
      </form>
    </Modal>
  );
};

export default CreateCategory;
