import Users from "@/components/Users";

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  
  // Transformar los datos para que funcionen con tu componente
  return users.map(user => ({
    id: user.id,
    first_name: user.name.split(' ')[0],
    last_name: user.name.split(' ').slice(1).join(' '),
    email: user.email,
    avatar: `https://i.pravatar.cc/150?img=${user.id}`
  }));
}

async function HomePage() {
  const users = await fetchUsers();
  return <Users users={users} />;
}

export default HomePage;