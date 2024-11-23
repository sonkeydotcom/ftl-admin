import Modal from "./modal";
import Button from "./ui/custom-button";
import CustomeInput from "./ui/custom-input";
import { useAppContext } from "../hooks/hooks";

const Edit = ({ showEdit, closeEdit }) => {
  const { selectedProduct } = useAppContext();
  return (
    <Modal isOpen={showEdit} onClose={closeEdit}>
      <div>
        <h2 className="text-lg font-bold mb-4">Edit Product</h2>

        <CustomeInput
          title="Title"
          value={selectedProduct?.title}
          placeholder="Enter product title"
        />
        <CustomeInput
          title="Price"
          value={selectedProduct?.price}
          placeholder="Enter product price"
        />
        <CustomeInput
          title="Quantity"
          value={selectedProduct?.quantity}
          placeholder="Enter product quantity"
        />
        <CustomeInput
          title="Description"
          value={selectedProduct?.description}
          placeholder="Enter product description"
        />

        <Button title="Save" />
      </div>
    </Modal>
  );
};

export default Edit;
