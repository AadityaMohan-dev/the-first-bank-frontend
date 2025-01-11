import React from 'react';

function WelcomePage() {
  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/blue-vintage-decorative-balls-background_53876-102739.jpg?t=st=1735933676~exp=1735937276~hmac=6c7ca66cdac91f26990afcfe6067aaa920ea48b05043773f2da64b92f1fe584e&w=1800')" }}>
    
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

      <div className=" text-gray-800 px-60  py-16">
        <div className="">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to FIRST BANK</h1>
          <p className="text-xl mb-6">
            Manage your bank account securely and efficiently. Take control of your financial life today.
          </p>
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg text-lg transition-all duration-300"
          >
            Go to Dashboard
          </button>
        </div>
 
        <div className="mt-12 ">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center space-x-2">
              <span className="text-blue-500">✔</span>
              <span>24/7 Customer Support for your convenience</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500">✔</span>
              <span>Secure and Fast Transactions</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500">✔</span>
              <span>Access to a wide range of banking products</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500">✔</span>
              <span>Earn Rewards and Bonuses on your deposits</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500">✔</span>
              <span>Easy to use Mobile Banking App</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
