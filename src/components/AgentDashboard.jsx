import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import BottomMenu from "./BottomMenu"; // Import the BottomMenu

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const barData = {
  labels: ["Lodge A", "Lodge B", "Lodge C", "Lodge D"],
  datasets: [
    { label: "Jan", data: [60, 70, 50, 80], backgroundColor: "#1E3A8A" },
    { label: "Feb", data: [50, 90, 60, 70], backgroundColor: "#EC4899" },
    { label: "Mar", data: [40, 60, 70, 90], backgroundColor: "#10B981" },
    { label: "Apr", data: [70, 50, 80, 60], backgroundColor: "#8B5CF6" },
  ],
};

const doughnutData = {
  labels: ["Q1", "Q2", "Q3", "Q4"],
  datasets: [
    {
      data: [300, 50, 100, 60],
      backgroundColor: ["#10B981", "#3B82F6", "#EC4899", "#F59E0B"],
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="bg-white min-h-screen py-6 sm:py-10 pb-24">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 space-y-8 sm:space-y-10">
        {/* Lodges Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-2 sm:p-4">
            <img src="/imgs/dashboard-img-1.jpg" alt="Lodge 1" className="w-full h-32 sm:h-auto object-cover rounded" />
            <div className="flex flex-col sm:flex-row justify-between items-start mt-2">
              <p className="text-xs sm:text-mg mt-2">
                Spacious Self-Contain<br />
                Located at miracle junction<br />
                300,000 to pay 250,000
              </p>
              <button className="ml-0 sm:ml-4 mt-4 sm:mt-8 px-3 sm:px-4 py-1 border rounded text-blue-500 border-blue-500 hover:bg-blue-50 whitespace-nowrap text-xs sm:text-base">
                Edit
              </button>
            </div>
          </div>

          {/* Responsive "Add Your Lodge" section with image */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-0 min-h-0">
            <div className="bg-blue-600 text-white p-4 sm:p-10 rounded flex flex-col justify-center h-40 sm:h-60">
              <h3 className="text-lg sm:text-2xl font-bold text-center">Add Your Lodge</h3>
              <p className="text-xs sm:text-base my-2 text-center sm:text-left">
                Expand your reach by adding a new lodge. Join our community to connect with students and boost your renting effortlessly.
              </p>
              <div className="flex justify-center">
                <button className="bg-white text-blue-600 px-4 sm:px-5 py-1.5 rounded mt-2 whitespace-nowrap text-xs sm:text-sm">
                  Join Us
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded h-40 sm:h-60 flex">
              <img
                src="/imgs/dashboard-img-2.jpg"
                alt="Lodge 2"
                className="object-cover w-full h-full rounded"
                style={{ aspectRatio: "16/9" }}
              />
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-2 sm:p-4 pb-1 max-w-full md:max-w-[415px] max-h-[280px] sm:max-h-[430px] overflow-scroll">
            <div className="overflow-hidden rounded h-48 sm:h-64">
              <img
                src="/imgs/dashboard-img-3.jpg"
                alt="Lodge 3"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start mt-2">
              <p className="text-sm sm:text-mg mt-2">
                Spacious Self-Contain<br />
                Located at miracle junction<br />
                300,000 to pay 250,000
              </p>
              <button className=" ml-0 sm:ml-4 mt-4 sm:mt-8 px-3 sm:px-4 py-1 border rounded text-blue-500 border-blue-500 hover:bg-blue-50 whitespace-nowrap text-xs sm:text-base">
                Edit
              </button>
            </div>
          </div>

          <div className="p-2 sm:p-4 rounded-lg shadow col-span-2 mt-0">
            <h2 className="font-bold text-xl sm:text-3xl mb-2 sm:mb-4">Performance Metrics</h2>
            <p className="font-semibold text-xs sm:text-sm mb-1 sm:mb-2">Occupancy Rates</p>
            <div className="h-[220px] sm:h-[400px]">
              <Bar
                data={barData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { position: 'bottom' },
                  },
                  scales: {
                    y: { beginAtZero: true },
                  },
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom section with image and doughnut */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-2 sm:p-4 pb-1 max-w-full md:max-w-[415px] max-h-[250px] sm:max-h-[400px] overflow-hidden">
            <img
              src="/imgs/dashboard-img-4.jpg"
              alt="Lodge 4"
              className="w-full h-32 sm:h-auto object-cover rounded"
            />
            <div className="flex flex-col sm:flex-row justify-between items-start mt-2">
              <p className="text-xs sm:text-mg mt-2">
                Spacious Self-Contain<br />
                Located at miracle junction<br />
                300,000 to pay 250,000
              </p>
              <button className="ml-0 sm:ml-4 mt-4 sm:mt-8 px-3 sm:px-4 py-1 border rounded text-blue-500 border-blue-500 hover:bg-blue-50 whitespace-nowrap text-xs sm:text-base">
                Edit
              </button>
            </div>
          </div>

          <div className="p-2 sm:p-4 rounded-lg shadow flex flex-col">
            <p className="font-bold text-base sm:text-lg mb-2 sm:mb-4 text-left">Revenue Generated</p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              {/* Doughnut Chart */}
              <div className="w-40 h-40 sm:w-60 sm:h-60">
                <Doughnut
                  data={doughnutData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: { display: false },
                    },
                  }}
                />
              </div>

              {/* Custom Legend */}
              <div className="space-y-2 text-xs sm:text-sm">
                {doughnutData.labels.map((label, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: doughnutData.datasets[0].backgroundColor[index] }}
                    ></div>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Remove the old footer icons and use BottomMenu */}
      <BottomMenu />
    </div>
  );
};

export default Dashboard;