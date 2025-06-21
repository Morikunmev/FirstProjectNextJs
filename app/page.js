import Users from "@/components/Users";

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}

async function HomePage() {
  const users = await fetchUsers();
  return <Users users={users} />;
}

export default HomePage;