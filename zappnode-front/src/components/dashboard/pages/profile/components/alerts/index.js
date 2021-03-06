import React from 'react';
import { Card } from 'primereact/card';

const Alerts = ({ user }) => {
  const listMembers = user.members.map((member, index) => 
    <tr key={index}>
      <td className="border px-4 py-2 text-center"><i className="pi pi-envelope"></i></td>
      <td className="border px-4 py-2">{member}</td>
      <td className="border px-4 py-2 text-center">
        <i className="pi pi-pencil text-xs text-gray-600 mr-4"></i>
        <i className="pi pi-minus-circle text-red-600 text-xs"></i>
      </td>
    </tr>
  );

  return (
    <>
      <Card className="m-5">
        <div className="my-4">
          <h1 className="font-bold text-xl">
            Alerts
            <button className="rounded text-xs font-bold float-right px-2 py-1 text-white bg-green-500">
              Add Alert
            </button>
          </h1>
        </div>
        <hr />
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Contact</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {listMembers}
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default Alerts;
