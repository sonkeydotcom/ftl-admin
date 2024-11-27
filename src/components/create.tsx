import Modal from "./modal";
import Button from "./ui/custom-button";
import CustomeInput from "./ui/custom-input";
import { useAppContext } from "../hooks/hooks";
import { useEffect, useState } from "react";
import { Product } from "../types/types";

interface CreateProps {
  showCreate: boolean;
  closeCreate: () => void;
}

const Create: React.FC<CreateProps> = ({ showCreate, closeCreate }) => {
  const { isLoading, createProduct, fetchCategories, categories } =
    useAppContext();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    files: [],
    colors: "",
    sizes: "",
    categoryId: "",
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, files: e.target.files[0] });
  };

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>)

  //  e: React.ChangeEvent<
  //    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  //  >

  const handleCreateProduct = () => {
    // e.preventDefault();
    if (isLoading) return; // Prevent multiple submissions
    console.log("Creating product:", form);

    const payload: Partial<Product> = {
      name: form.name,
      description: form.description,
      price: parseFloat(form.price),
      quantity: parseInt(form.quantity),
      files: form.files,
      colors: form.colors,
      sizes: form.sizes,
      categoryId: form.categoryId,
      image: "",
      category: "",
      id: "",
    };

    createProduct(payload); // Works as the omitted fields are not required
  };

  useEffect(() => {
    fetchCategories(); // Fetches categories when the component mounts
  }, []);

  return (
    <Modal isOpen={showCreate} onClose={closeCreate}>
      <div className="max-w-lg mx-auto p-6">
        <h2 className="text-lg font-bold mb-4">Edit Product</h2>

        <CustomeInput
          value={form.name}
          title="name"
          onChange={handleInputChange}
          name="name"
          placeholder="Enter product title"
        />
        <CustomeInput
          value={form.description}
          title="description"
          onChange={handleInputChange}
          name="description"
          placeholder="Enter product description"
        />
        <CustomeInput
          title="price"
          value={form.price}
          onChange={handleInputChange}
          name="price"
          placeholder="Enter product price"
        />
        <CustomeInput
          title="quantity"
          value={form.quantity}
          onChange={handleInputChange}
          name="quantity"
          placeholder="Enter product quantity"
        />

        <label className="block mb-2 text-sm">Image</label>
        <input
          type="file"
          name="files"
          multiple
          className="w-full px-3 text-sm font-light py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          accept="image/*"
          onChange={handleImageChange}
        />

        <CustomeInput
          title="colors"
          value={form.colors}
          onChange={handleInputChange}
          name="colors"
          placeholder="e.g., Red, Blue, Green"
        />

        <CustomeInput
          title="sizes"
          value={form.sizes}
          onChange={handleInputChange}
          name="sizes"
          placeholder="e.g., S, M, L, XL"
        />

        <label className="block mb-2 text-sm">Category</label>
        <select
          id="categoryId"
          name="categoryId"
          value={form.categoryId}
          onChange={handleInputChange}
          disabled={!categories || categories.length === 0} // Disable if no categories
          className="w-full px-3 text-sm font-light py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
        >
          {categories?.length === 0 ? (
            <option disabled>Loading...</option>
          ) : (
            categories?.map((category) => (
              <>
                <option value="">Select a category</option>
                <option key={category.id} value={category.id}>
                  {category?.name}
                </option>
              </>
            ))
          )}
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
