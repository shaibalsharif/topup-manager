import React from 'react';
import Card from '../components/Card';
import { fetchData } from '../util/data';
import { useDialog } from '../components/Dialog';

const SubVendors = () => {
  const { openDialog } = useDialog();
  const data = fetchData();

  return (
    <Card title="Sub-vendors Management">
      <div className="flex justify-between mb-4">
        <input className="border rounded p-2 w-1/3" placeholder="Search sub-vendors..." />
        <button onClick={openDialog} className="bg-blue-500 text-white rounded p-2">
          Add Sub-vendor
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left pb-2">Name</th>
            <th className="text-left pb-2">Balance</th>
            <th className="text-left pb-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.subVendors.map((vendor) => (
            <tr key={vendor.id}>
              <td className="py-2">{vendor.name}</td>
              <td className="py-2">${vendor.balance}</td>
              <td className="py-2">{vendor.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default SubVendors;
