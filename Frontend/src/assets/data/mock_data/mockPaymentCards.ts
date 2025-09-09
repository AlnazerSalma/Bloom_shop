export interface PaymentCard {
  id: string;
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
  selected: boolean;
}

export interface UserPaymentCards {
  userId: string;
  cards: PaymentCard[];
}

// Example mock data
export const mockUserPaymentCards: UserPaymentCards[] = [
  {
    userId: "user1",
    cards: [
      {
        id: "card1",
        cardNumber: "1234 5678 9012 3456",
        cardName: "Salma Alnazer",
        expiryDate: "08/26",
        cvv: "123",
        selected: true,
      },
      {
        id: "card2",
        cardNumber: "9876 5432 1098 7654",
        cardName: "Salma Alnazer",
        expiryDate: "12/25",
        cvv: "456",
        selected: false,
      },
    ],
  },
  {
    userId: "user2",
    cards: [
      {
        id: "card3",
        cardNumber: "1111 2222 3333 4444",
        cardName: "Ahmad Khalil",
        expiryDate: "09/27",
        cvv: "789",
        selected: false,
      },
      {
        id: "card4",
        cardNumber: "5555 6666 7777 8888",
        cardName: "Ahmad Khalil",
        expiryDate: "03/28",
        cvv: "012",
        selected: true,
      },
    ],
  },
];
