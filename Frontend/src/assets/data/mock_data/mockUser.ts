export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  image: string;
}

export const mockUser: User = {
  id: "user1",
  name: "Salma Alnazer",
  email: "salma@example.com",
  phone: "+970 123 456 789",
  image: "https://i.pravatar.cc/150?img=5",
};
