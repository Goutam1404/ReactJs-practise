// src/pages/DashboardHome.jsx
import DashboardLayout from "../components/DashboardLayout";
import ChartCard from "../components/ChartCard";
export default function DashboardHome() {
  return (
    <>
      <DashboardLayout>
        <ChartCard />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Users" value="1,204" color="bg-blue-500" />
          <StatCard title="Sales" value="$13,470" color="bg-green-500" />
          <StatCard title="Visitors" value="7,320" color="bg-purple-500" />
        </div>
      </DashboardLayout>
    </>
  );
}

function StatCard({ title, value, color }) {
  return (
    <div className={`p-6 rounded-xl text-white shadow-md ${color}`}>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl mt-2 font-bold">{value}</p>
    </div>
  );
}
