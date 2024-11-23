import React from "react";
import Modal from "./modal";

const OrderDetails = () => {
  const orders = [
    {
      id: 1,
      summary: {
        title: "Order Summary",
        date: "2024-11-23",
        price: 150.0,
        paymentMethod: "Credit Card",
        paymentStatus: "Paid",
        orderStatus: "Shipped",
      },
      shippingInfo: {
        title: "Shipping Information",
        address: "123 Street, City, Country",
        shippingMethod: "Standard",
        trackingNumber: "ABC123456",
      },
      products: [
        {
          title: "Product 1",
          quantity: 2,
        },
        {
          title: "Product 2",
          quantity: 1,
        },
      ],
    },
  ];

  return (
    <Modal isOpen={true} onClose={() => {}}>
      <div className="p-4">
        <div className="flex flex-row  justify-between">
          <div>d</div>

          <div>hj</div>
        </div>
      </div>
    </Modal>
  );
};

export default OrderDetails;
