// src/components/Goals.js
const Goals = () => {
  return (
    <div className="p-5">
      <h3 className="text-lg font-bold">Amount Due</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-purple-200 p-4 rounded-lg shadow-md">
          <h4 className="font-bold">School Fees</h4>
          <p>Ghc 739.96</p>
        </div>
        <div className="bg-blue-200 p-4 rounded-lg shadow-md">
          <h4 className="font-bold">Src</h4>
          <p>Ghc 289.91</p>
        </div>
      </div>
    </div>
  );
};

export default Goals;
