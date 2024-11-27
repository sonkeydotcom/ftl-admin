import { useEffect, useState } from "react";
import Modal from "./modal";
import Button from "./ui/custom-button";
import { useAppContext } from "../hooks/hooks";

interface OrderDetailsProps {
  showOrderDetails: boolean;
  setShowOrderDetails: (value: boolean) => void;
  orderId: string;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({
  showOrderDetails,
  setShowOrderDetails,
  orderId,
}) => {
  const { isLoading, fetchOrderDetail, orderDetails, updateOrderStatus } =
    useAppContext();

  const [selectedStatus, setSelectedStatus] = useState("");

  useEffect(() => {
    if (orderId) {
      fetchOrderDetail(orderId);
    }
  }, [orderId]);

  const handleUpdateOrderStatus = () => {
    const status = selectedStatus.toLowerCase();

    updateOrderStatus(orderId, status);
    // setShowOrderDetails(false);

    console.log(orderId, selectedStatus);
  };

  return (
    <Modal isOpen={showOrderDetails} onClose={() => setShowOrderDetails(false)}>
      <div className="p-2 bg-white ">
        {/* Order Details Header */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Order Details
        </h2>
        {/* General Order Information */}
        <div className="space-y-3">
          <div className="flex justify-between border-b pb-2">
            <p className="text-xs font-medium text-gray-600">Order ID</p>
            <p className="text-xs font-semibold text-gray-800">{orderId}</p>
          </div>
          <div className="flex justify-between border-b pb-2">
            <p className="text-xs font-medium text-gray-600">Order Date</p>
            <p className="text-xs font-semibold text-gray-800">
              {orderDetails.createdAt}
            </p>
          </div>
          <div className="flex justify-between border-b pb-2">
            <p className="text-xs font-medium text-gray-600">Order Price</p>
            <p className="text-xs font-semibold text-green-600">
              {orderDetails.totalPrice}
            </p>
          </div>
          <div className="flex justify-between border-b pb-2">
            <p className="text-xs font-medium text-gray-600">Payment Method</p>
            <p className="text-xs font-semibold text-gray-800">Value</p>
          </div>
          <div className="flex justify-between border-b pb-2">
            <p className="text-xs font-medium text-gray-600">Payment Status</p>
            <p className="text-xs font-semibold text-gray-800">
              {orderDetails.paymentStatus}
            </p>
          </div>
          <div className="flex justify-between border-b pb-2">
            <p className="text-xs font-medium text-gray-600">Order Status</p>
            <p className="text-xs font-semibold text-gray-800">
              {orderDetails.status}
            </p>
          </div>
        </div>

        {/* Product Details Section */}
        <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-3">
          Product Details
        </h3>
        <div className="flex justify-between border-b pb-2">
          <p className="text-xs font-medium text-gray-600">Product Name</p>
          <p className="text-xs font-semibold text-gray-800">Value</p>
        </div>

        {/* Shipping Information */}
        <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-3">
          Shipping Information
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between border-b pb-2">
            <p className="text-xs font-medium text-gray-600">Name</p>
            <p className="text-xs font-semibold text-gray-800">
              {orderDetails.userId}
            </p>
          </div>
          <div className="flex justify-between border-b pb-2">
            <p className="text-xs font-medium text-gray-600">Address</p>
            <p className="text-xs font-semibold text-gray-800">Value</p>
          </div>
          <div className="flex justify-between border-b pb-2">
            <p className="text-xs font-medium text-gray-600">City</p>
            <p className="text-xs font-semibold text-gray-800">Value</p>
          </div>
          <div className="flex justify-between border-b pb-2">
            <p className="text-xs font-medium text-gray-600">Postal Code</p>
            <p className="text-xs font-semibold text-gray-800">Value</p>
          </div>
          <div className="flex justify-between border-b pb-2">
            <p className="text-xs font-medium text-gray-600">Phone Number</p>
            <p className="text-xs font-semibold text-gray-800">Value</p>
          </div>
        </div>

        {/* Order Status */}
        <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-3">
          Order Status
        </h3>
        <div className="flex justify-between border-b pb-2">
          <select
            value={selectedStatus} // Bind to state
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <Button onClick={handleUpdateOrderStatus} title="Update Order Status" />
      </div>
    </Modal>
  );
};

export default OrderDetails;
