import React from 'react';
import Card from '../components/Card';
import { fetchData } from '../util/data';

const Balance = () => {
  const data = fetchData();

  return (
    <Card title="Balance Information">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Current Balance</h3>
        <p className="text-3xl font-bold">${data.currentBalance.toFixed(2)}</p>
        <h3 className="text-lg font-medium">Recent Transactions</h3>
        <table className="w-full mt-2">
          <thead>
            <tr>
              <th className="text-left pb-2">Date</th>
              <th className="text-left pb-2">Description</th>
              <th className="text-left pb-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.recentTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="py-2">{transaction.date}</td>
                <td className="py-2">{transaction.description}</td>
                <td className={`py-2 ${transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                  {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default Balance;
