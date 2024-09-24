import React from 'react';
import Card from '../components/Card';
import { fetchData } from '../util/data';

const Dashboard = () => {
  const data = fetchData();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Card title="Total Balance">
        <p className="text-3xl font-bold">${data.totalBalance.toFixed(2)}</p>
      </Card>
      <Card title="Sub-vendors Count">
        <p className="text-3xl font-bold">{data.subVendorsCount}</p>
      </Card>
      <Card title="Recent Top-ups">
        <p className="text-3xl font-bold">{data.recentTopUpsCount}</p>
      </Card>
    </div>
  );
};

export default Dashboard;
