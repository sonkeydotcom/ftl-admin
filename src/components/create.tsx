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

  const [form, setForm] = useState<Product>({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    images: null,
    colors: "",
    sizes: "",
    category: "",
  });

  const [errors, setErrors] = useState("");

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

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const handleImageChange = (e) => {
  //     setForm({ ...form, files: e.target.files[0] });
  //   };
  // };

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setForm({ ...form, files: e.target.files[0] });
  // };

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setForm({ ...form, images: e.target.files[0] });
  //   }
  // };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // Convert FileList to array and set it to form
      const fileArray = Array.from(e.target.files);
      setForm({ ...form, images: fileArray });
    }
  };

  const handleCreateProduct = async () => {
    // e.preventDefault();
    setErrors("");

    if (isLoading) return;
    console.log("Creating product:", form);

    const payload: Product = {
      name: form.name,
      description: form.description,
      price: form.price,
      stock: form.stock,
      images: form.images,
      colors: form.colors,
      sizes: form.sizes,
      category: form.category,
      id: "",
    };

    const res = await createProduct(payload);

    if (res.success) {
      alert("Product created successfully!");
      closeCreate();
    } else {
      setErrors("Error creating product ");
    }
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
          required
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
          title="stock"
          value={form.stock}
          onChange={handleInputChange}
          name="stock"
          placeholder="Enter product stock"
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
          id="category"
          name="category"
          value={form.category}
          onChange={handleInputChange}
          disabled={!categories || categories.length === 0} // Disable if no categories
          className="w-full px-3 text-sm font-light py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
        >
          <option value="">Select a category</option>
          {categories?.length === 0 ? (
            <option disabled>Loading...</option>
          ) : (
            categories?.map((category) => (
              <>
                <option key={category._id} value={category._id}>
                  {category?.name}
                </option>
              </>
            ))
          )}
        </select>

        {errors && <p className="text-red-500 text-sm">{errors}</p>}

        <Button
          onClick={handleCreateProduct}
          title={isLoading ? "Loading..." : "Create Product"}
        />
      </div>
    </Modal>
  );
};

export default Create;
