import React from 'react';
import Card from '../components/Card';
import { fetchData } from '../util/data';

const Purchases = () => {
  const data = fetchData();

  return (
    <Card title="Purchase Top-up Points">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left pb-2">Date</th>
            <th className="text-left pb-2">Amount</th>
            <th className="text-left pb-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.recentPurchases.map((purchase) => (
            <tr key={purchase.id}>
              <td className="py-2">{purchase.date}</td>
              <td className="py-2">${purchase.amount.toFixed(2)}</td>
              <td className="py-2">{purchase.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default Purchases;
