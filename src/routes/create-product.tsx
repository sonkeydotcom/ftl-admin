import React, { useEffect } from "react";
import { useAppContext } from "../hooks/hooks";

const CreateProduct = () => {
  const { createProduct, isLoading, fetchCategories, categories } =
    useAppContext();

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCreateProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const product = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      price: parseFloat(formData.get("price") as string),
      quantity: parseInt(formData.get("quantity") as string, 10),
      image: formData.get("image"), // File input
      category: formData.get("category") as string,
      sizes: (formData.get("sizes") as string)
        .split(",")
        .map((size) => size.trim()),
      colors: (formData.get("colors") as string)
        .split(",")
        .map((color) => color.trim()),
    };

    createProduct(product);
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleCreateProduct} className="max-w-lg mx-auto p-6 ">
        <label className="block mb-2 text-sm">Name</label>
        <input
          type="text"
          name="name"
          className="w-full px-3 py-2 border text-sm font-light rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          placeholder="Product Name"
        />

        <label className="block mb-2 text-sm">Description</label>
        <textarea
          name="description"
          className="w-full text-sm font-light px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          placeholder="Product Description"
        ></textarea>

        <label className="block mb-2 text-sm">Price</label>
        <input
          type="number"
          name="price"
          className="w-full text-sm font-light px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          placeholder="Product Price"
        />

        <label className="block mb-2 text-sm">Quantity</label>
        <input
          type="number"
          name="quantity"
          className="w-full text-sm font-light px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          placeholder="Product Quantity"
        />

        <label className="block mb-2 text-sm">Image</label>
        <input
          type="file"
          name="image"
          className="w-full px-3 text-sm font-light py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          accept="image/*"
        />

        <label className="block mb-2 text-sm">Category</label>
        <select
          name="category"
          className="w-full px-3 text-sm font-light py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
        >
          {isLoading ? (
            <option disabled>Loading...</option>
          ) : (
            categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))
          )}
        </select>

        <label className="block mb-2 text-sm">Sizes</label>
        <input
          type="text"
          name="sizes"
          className="w-full px-3 py-2 text-sm font-light border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          placeholder="e.g., S, M, L, XL"
        />

        <label className="block mb-2 text-sm">Colors</label>
        <input
          type="text"
          name="colors"
          className="w-full px-3 py-2 border text-sm font-light rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          placeholder="e.g., Red, Blue, Green"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded text-sm hover:bg-blue-600 transition duration-200"
        >
          {isLoading ? "Creating..." : "Create Product"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
