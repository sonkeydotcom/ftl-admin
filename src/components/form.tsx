const Form = () => {
  return (
    <form className="max-w-lg mx-auto p-6 ">
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
        Create Product
      </button>
    </form>
  );
};

export default Form;
