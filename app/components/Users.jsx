"use client";
import Link from "next/link";
function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <Link
            key={user.id}
            href={`/users/${user.id}`}
            className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg mb-4 hover:bg-slate-700 transition-colors"
        >
          <div>
            <h5 className="font-bold">
              {user.id} {user.first_name} {user.last_name}
            </h5>
            <p className="text-slate-100">email: {user.email}</p>
          </div>
          <img
            src={user.avatar}
            className="rounded-full w-20"
            alt={`${user.first_name} ${user.last_name}`}
          />
        </Link>
      ))}
    </ul>
  );
}

export default Users;
