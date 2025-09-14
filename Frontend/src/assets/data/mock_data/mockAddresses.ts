export interface Address {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  email: string;
  mobileNumber: string;
  country: {
    en: string;
    ar: string;
  };
  city: {
    en: string;
    ar: string;
  };
  streetName: {
    en: string;
    ar: string;
  };
  buildingNumber: string;
  selected: boolean;
}

export interface UserAddresses {
  userId: string;
  addresses: Address[];
}

export const mockUserAddresses: UserAddresses[] = [
  {
    userId: "user1",
    addresses: [
      {
        id: "addr1",
        name: { en: "Salma Alnazer", ar: "سلمى الناظر" },
        email: "salma@example.com",
        mobileNumber: "+970598765432",
        country: { en: "Palestine", ar: "فلسطين" },
        city: { en: "Ramallah", ar: "رام الله" },
        streetName: { en: "Al-Bireh Street", ar: "شارع البيرة" },
        buildingNumber: "12A",
        selected: false,
      },
      {
        id: "addr2",
        name: { en: "alaa Alnazer", ar: " الاء الناظر" },
        email: "salma.work@example.com",
        mobileNumber: "+970598765433",
        country: { en: "Palestine", ar: "فلسطين" },
        city: { en: "Nablus", ar: "نابلس" },
        streetName: { en: "El-Mahatta Street", ar: "شارع المحطة" },
        buildingNumber: "7B",
        selected: true,
      },
    ],
  },
  {
    userId: "user2",
    addresses: [
      {
        id: "addr3",
        name: { en: "Ahmad Khalil", ar: "أحمد خليل" },
        email: "ahmad@example.com",
        mobileNumber: "+970598765434",
        country: { en: "Palestine", ar: "فلسطين" },
        city: { en: "Jerusalem", ar: "القدس" },
        streetName: { en: "Al-Quds Street", ar: "شارع القدس" },
        buildingNumber: "3C",
        selected: false,
      },
      {
        id: "addr4",
        name: { en: "Ahmad Khalil", ar: "أحمد خليل" },
        email: "ahmad.work@example.com",
        mobileNumber: "+970598765435",
        country: { en: "Palestine", ar: "فلسطين" },
        city: { en: "Hebron", ar: "الخليل" },
        streetName: { en: "Ibrahimi Street", ar: "شارع الإبراهيمي" },
        buildingNumber: "21D",
        selected: true,
      },
    ],
  },
];
