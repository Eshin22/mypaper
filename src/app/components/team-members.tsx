import React from "react";

// Sample team member data (replace with dynamic data in a real app)
interface TeamMember {
  id: number;
  name: string;
  email: string;
  role: string;
}

const members: TeamMember[] = [
  { id: 1, name: "Alice Smith", email: "alice@example.com", role: "Senior Marker" },
  { id: 2, name: "Bob Johnson", email: "bob@example.com", role: "Marker" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Junior Marker" },
];

const TeamMembers = () => (
  <div className="overflow-x-auto">
    <table className="min-w-full table-auto border-separate border-spacing-0">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-left font-medium text-gray-700">Name</th>
          <th className="px-4 py-2 text-left font-medium text-gray-700">Email</th>
          <th className="px-4 py-2 text-left font-medium text-gray-700">Role</th>
          <th className="px-4 py-2 text-left font-medium text-gray-700">Actions</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member) => (
          <tr key={member.id} className="border-b hover:bg-gray-50">
            <td className="px-4 py-2 text-sm text-gray-900">{member.name}</td>
            <td className="px-4 py-2 text-sm text-gray-600">{member.email}</td>
            <td className="px-4 py-2 text-sm text-gray-600">{member.role}</td>
            <td className="px-4 py-2 text-sm">
              <button
                className="text-blue-500 hover:text-blue-700 mr-3"
                onClick={() => alert(`Editing member: ${member.name}`)}
              >
                Edit
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => alert(`Deleting member: ${member.name}`)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TeamMembers;
