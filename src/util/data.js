export const usersData = [
    {
      phoneNumber: '1234567890',
      balance: 1000,
      transactions: [],
    },
    // Add more users as needed
  ];
  
  export const vendorsData = [
    {
      name: 'Vendor 1',
      balance: 500,
      status: 'Active',
    },
    // Add more vendors as needed
  ];
//   const data={
//     totalBalance: 10245.00,
//     subVendorsCount: 24,
//     recentTopUpsCount: 156,
//     subVendors: [
//       { id: 1, name: 'John Doe', balance: 1200, status: 'Active' },
//       { id: 2, name: 'Jane Smith', balance: 800, status: 'Pending' },
//     ],
//     recentPurchases: [
//       { id: 1, date: '2023-06-15', amount: 5000, status: 'Completed' },
//       { id: 2, date: '2023-06-10', amount: 3000, status: 'Completed' },
//     ],
//     currentBalance: 10245.00,
//     recentTransactions: [
//       { id: 1, date: '2023-06-15', description: 'Purchase from Telecom Co.', amount: -5000.00 },
//       { id: 2, date: '2023-06-14', description: 'Top-up sale to Sub-vendor', amount: 1200.00 },
//     ],
//     recentTopUps: [
//       { id: 1, date: '2023-06-15', phoneNumber: '+1 (555) 123-4567', amount: 20 },
//       { id: 2, date: '2023-06-14', phoneNumber: '+1 (555) 987-6543', amount: 10 },
//     ],
//   };
//   export const fetchData = () => {


//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(data);
//       }, 1000); // Simulate network delay
//     });
//   };
  
export const fetchData = () => {
    return {
      totalBalance: 10245.00,
      subVendorsCount: 5,
      recentTopUpsCount: 3,
      subVendors: [
        { id: 1, name: "Vendor A", balance: 1500, status: "Active" },
        { id: 2, name: "Vendor B", balance: 2400, status: "Inactive" },
        { id: 3, name: "Vendor C", balance: 3200, status: "Active" },
      ],
      recentPurchases: [
        { id: 1, date: "2024-09-01", amount: 100, status: "Completed" },
        { id: 2, date: "2024-09-15", amount: 250, status: "Pending" },
      ],
      currentBalance: 8000.00,
      recentTransactions: [
        { id: 1, date: "2024-09-20", description: "Top-up", amount: 100 },
        { id: 2, date: "2024-09-21", description: "Purchase", amount: -50 },
      ],
    };
  };
  