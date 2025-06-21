async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return data;
}

export default async function UserPage({ params }) {
  // En Next.js 15, params necesita await
  const resolvedParams = await params;
  const user = await getUser(resolvedParams.id);
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
      <div className="bg-slate-200 p-6 rounded-lg">
        <img
          src={`https://i.pravatar.cc/150?img=${user.id}`}
          alt={user.name}
          className="rounded-full w-32 h-32 mb-4"
        />
        <p className="text-gray-800"><strong>Email:</strong> {user.email}</p>
        <p className="text-gray-800"><strong>Teléfono:</strong> {user.phone}</p>
        <p className="text-gray-800"><strong>Website:</strong> {user.website}</p>
        <p className="text-gray-800"><strong>Ciudad:</strong> {user.address.city}</p>
      </div>
    </div>
  );
}