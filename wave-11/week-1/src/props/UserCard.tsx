/*
Requirements:
- Create a `User` type: { name: string; email: string; avatar: string; role: "admin" | "member" }
- Build a <UserCard /> that takes ONE prop: `user: User`
- Show the avatar (with alt text), name, email and role
- Style it with Tailwind: border, rounded corners, padding, shadow
- Render one card below using the `user` object
*/

const user = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  avatar: "https://i.pravatar.cc/150?img=47",
  role: "admin",
};

export default function UserCardPractice() {
  return <div>{/* CODE HERE */}</div>;
}
