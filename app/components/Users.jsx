"use client";
import Link from "next/link";

function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <Link
          href={`/users/${user.id}`}
          key={user.id}
          className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between"
        >
          <div>
            <h5 className="font-bold">
              {user.id} {user.name}
            </h5>
            <p className="text-slate-100">email: {user.email}</p>
          </div>
          <img
            src={`https://i.pravatar.cc/150?img=${user.id}`}
            className="rounded-full w-20"
            alt={user.name}
          />
        </Link>
      ))}
    </ul>
  );
}

export default Users;