import React from 'react';
import Card from '../components/Card';

const TopUp = () => {
  const handleTopUp = () => {
    // Mock API call for top-up action
    console.log('Top-up action performed');
  };

  return (
    <Card title="Top-up Balance">
      <form onSubmit={(e) => { e.preventDefault(); handleTopUp(); }}>
        <input className="border rounded p-2 w-full mb-4" type="number" placeholder="Enter amount" required />
        <button type="submit" className="bg-blue-500 text-white rounded p-2">Top Up</button>
      </form>
    </Card>
  );
};

export default TopUp;
