export interface OrderItem {
  productId: string;
  quantity: number;
  discount?: number;
  size: string;
}


export interface PaymentInfo {
  method: "credit_card" | "paypal" | "cash_on_delivery";
  status: "paid" | "unpaid" | "refunded";
  transactionId?: string;
}

export interface ShippingInfo {
  addressId: string;
  trackingNumber?: string;
  carrier?: string;
  estimatedDelivery?: string;
}
