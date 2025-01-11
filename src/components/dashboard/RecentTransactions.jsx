import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Mock data for transactions (with added transactionType field)
const transactionsData = [
  {
    name: 'John Doe',  // Sender or Receiver name
    accountNumber: '1234567890',
    amount: 1000,
    status: 'success',
    transactionType: 'credit'  // credit or debit
  },
  {
    name: 'Jane Smith',
    accountNumber: '9876543210',
    amount: 500,
    status: 'success',
    transactionType: 'debit'  // credit or debit
  },
  {
    name: 'Alice Johnson',
    accountNumber: '1234598765',
    amount: 2000,
    status: 'failed',
    transactionType: 'credit'  // credit or debit
  },
  {
    name: 'Bob Lee',
    accountNumber: '5432167890',
    amount: 300,
    status: 'success',
    transactionType: 'debit'  // credit or debit
  },
  {
    name: 'Charlie Brown',
    accountNumber: '9876543210',
    amount: 1500,
    status: 'success',
    transactionType: 'credit'  // credit or debit
  },
  // Add more items as necessary for testing
];

function RecentTransactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Simulating data fetching. Replace with API call in a real-world scenario.
    setTransactions(transactionsData);
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        {/* Table Header */}
        <thead className="sticky top-0 bg-[#2E8B57] text-white">
          <tr>
            <th className="py-2 px-4 text-left border border-gray-300">Name</th>
            <th className="py-2 px-4 text-left border border-gray-300">Account Number</th>
            <th className="py-2 px-4 text-left border border-gray-300">Amount</th>
            <th className="py-2 px-4 text-left border border-gray-300">Transaction Type</th>
            <th className="py-2 px-4 text-left border border-gray-300">Status</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="overflow-y-auto" style={{ height: '300px' }}>
          {transactions.map((transaction, index) => (
            <tr key={index} className="hover:bg-gray-100">
              {/* Name */}
              <td className="py-2 px-4 border border-gray-300">{transaction.name}</td>

              {/* Account Number */}
              <td className="py-2 px-4 border border-gray-300">{transaction.accountNumber}</td>

              {/* Amount */}
              <td className="py-2 px-4 border border-gray-300">₹ {transaction.amount}</td>

              {/* Transaction Type */}
              <td className="py-2 px-4 border border-gray-300">
                {transaction.transactionType === 'credit' ? (
                  <span className="text-green-500">Credited</span>
                ) : (
                  <span className="text-red-500">Debited</span>
                )}
              </td>

              {/* Status */}
              <td className="py-2 px-4 border border-gray-300">
                {transaction.status === 'success' ? (
                  <span className="text-green-500">Success</span>
                ) : (
                  <span className="text-red-500">Failed</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentTransactions;
