export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  image: string;
}

export const mockUsers: User[] = [
  {
    id: "user1",
    name: "Salma Alnazer",
    email: "salma@example.com",
    phone: "+970 123 456 789",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "user2",
    name: "Ahmad Khalil",
    email: "ahmad@example.com",
    phone: "+970 598 765 434",
    image: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_748,h_640/https://mudanzaperu.com/wp-content/uploads/2024/08/Hero_Mobile_Cuenta_Personas_V1_1_8046e424ea.webp", 
  },
];
