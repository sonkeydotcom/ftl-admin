import Modal from "./modal";
import Button from "./ui/custom-button";
import CustomeInput from "./ui/custom-input";

const Create = ({ showCreate, closeCreate }) => {
  return (
    <Modal isOpen={showCreate} onClose={closeCreate}>
      <div className="max-w-lg mx-auto p-6">
        <h2 className="text-lg font-bold mb-4">Edit Product</h2>

        <CustomeInput title="Title" placeholder="Enter product title" />
        <CustomeInput
          title="Description"
          placeholder="Enter product description"
        />
        <CustomeInput title="Price" placeholder="Enter product price" />
        <CustomeInput title="Quantity" placeholder="Enter product quantity" />

        <label className="block mb-2 text-sm">Image</label>
        <input
          type="file"
          name="image"
          className="w-full px-3 text-sm font-light py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          accept="image/*"
        />

        <CustomeInput title="colors" placeholder="e.g., Red, Blue, Green" />

        <CustomeInput title="sizes" placeholder="e.g., S, M, L, XL" />

        <label className="block mb-2 text-sm">Category</label>
        <select
          name="category"
          className="w-full px-3 text-sm font-light py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
        >
          <option>Select a category</option>
        </select>

        <Button title="Save" />
      </div>
    </Modal>
  );
};

export default Create;
