import type {
  OrderItem,
  PaymentInfo,
  ShippingInfo,
} from "../../../types/ordersType";

export interface UserOrders {
  userId: string;
  orders: {
    id: string;
    code: string;
    items: OrderItem[];
    status: "pending" | "shipped" | "delivered" | "cancelled" | "returned";
    payment: PaymentInfo;
    shipping: ShippingInfo;
    createdAt: string;
    notes?: {
      en: string;
      ar: string;
    };
  }[];
}

export const ordersByUser: UserOrders[] = [
  {
    userId: "user1",
    orders: [
      {
        id: "order1",
        code: "ORD-1001",
        items: [
          { productId: "8", quantity: 2, discount: 5, size: "One Size" },
          { productId: "2", quantity: 1, size: "M" },
          { productId: "5", quantity: 2, discount: 5, size: "One Size" },
        ],
        status: "pending",
        payment: { method: "credit_card", status: "unpaid" },
        shipping: { addressId: "addr2" },
        createdAt: "2025-09-14T10:00:00Z",
        notes: {
          en: "Order placed and awaiting payment confirmation. Customer requested delivery after 5 PM.",
          ar: "تم تقديم الطلب وينتظر تأكيد الدفع. طلب العميل التسليم بعد الساعة 5 مساءً.",
        },
      },
      {
        id: "order2",
        code: "ORD-1002",
        items: [
          { productId: "7", quantity: 1, size: "One Size" },
          { productId: "9", quantity: 3, size: "M" },
        ],
        status: "shipped",
        payment: {
          method: "paypal",
          status: "paid",
          transactionId: "txn_12345",
        },
        shipping: {
          addressId: "addr2",
          trackingNumber: "TRK123456",
          carrier: "UPS",
          estimatedDelivery: "2025-09-18",
        },
        createdAt: "2025-09-13T15:30:00Z",
        notes: {
          en: "Order has been packed and shipped via UPS. Tracking number provided to customer.",
          ar: "تم تجهيز الطلب وشحنه عبر UPS. تم تزويد العميل برقم التتبع.",
        },
      },
      {
        id: "order3",
        code: "ORD-1003",
        items: [
          { productId: "5", quantity: 1, size: "M" },
          { productId: "6", quantity: 2, size: "M" },
        ],
        status: "delivered",
        payment: {
          method: "credit_card",
          status: "paid",
          transactionId: "txn_67890",
        },
        shipping: {
          addressId: "addr3",
          trackingNumber: "TRK654321",
          carrier: "DHL",
          estimatedDelivery: "2025-09-12",
        },
        createdAt: "2025-09-11T08:45:00Z",
        notes: {
          en: "Order successfully delivered to the customer’s address on the expected date.",
          ar: "تم توصيل الطلب بنجاح إلى عنوان العميل في التاريخ المتوقع.",
        },
      },
      {
        id: "order4",
        code: "ORD-1004",
        items: [{ productId: "15", quantity: 1, size: "XS" }],
        status: "cancelled",
        payment: {
          method: "paypal",
          status: "refunded",
          transactionId: "txn_98765",
        },
        shipping: { addressId: "addr2" },
        createdAt: "2025-09-12T09:30:00Z",
        notes: {
          en: "Order cancelled by customer. Refund processed successfully.",
          ar: "تم إلغاء الطلب بواسطة العميل. تم استرداد الأموال بنجاح.",
        },
      },
    ],
  },
  {
    userId: "user2",
    orders: [
      {
        id: "order3",
        code: "ORD-2001",
        items: [{ productId: "19", quantity: 3, size: "41" }],
        status: "delivered",
        payment: { method: "cash_on_delivery", status: "paid" },
        shipping: {
          addressId: "addr4",
          trackingNumber: "TRK789101",
          carrier: "FedEx",
          estimatedDelivery: "2025-09-12",
        },
        createdAt: "2025-09-10T12:15:00Z",
        notes: {
          en: "Delivered successfully. Customer paid in cash upon delivery.",
          ar: "تم التوصيل بنجاح. دفع العميل نقداً عند التسليم.",
        },
      },
    ],
  },
];
