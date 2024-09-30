import { Link } from "react-router-dom";

// src/components/Accounts.js
const Accounts = () => {
  return (
    <div className="p-5">
      <h3 className="text-lg font-bold">Fees Information</h3>
      <div className="space-y-4">
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          <h4 className="font-bold">Fees Amount</h4>
          <p className="text-xl">Ghc 4,289.96</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h4 className="font-bold">Src Amount</h4>
          <p className="text-xl">Ghc 514.00</p>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
