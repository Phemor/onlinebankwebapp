// src/components/RecentActivity.js
const RecentActivity = () => {
  return (
    <div className="p-5">
      <h3 className="text-lg font-bold">Recent Activity</h3>
      <div className="space-y-4">
        <div className="flex justify-between">
          <div className="font-bold">School Fees</div>
          <div>Ghc3,550.00</div>
        </div>
        <div className="flex justify-between">
          <div className="font-bold">Src</div>
          <div>Ghc224.09</div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
