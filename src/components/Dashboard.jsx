import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const barData = {
  labels: ['Lodge A', 'Lodge B', 'Lodge C', 'Lodge D'],
  datasets: [
    { label: 'Jan', data: [60, 70, 50, 80], backgroundColor: '#1E3A8A' },
    { label: 'Feb', data: [50, 90, 60, 70], backgroundColor: '#EC4899' },
    { label: 'Mar', data: [40, 60, 70, 90], backgroundColor: '#10B981' },
    { label: 'Apr', data: [70, 50, 80, 60], backgroundColor: '#8B5CF6' },
  ],
};

const doughnutData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      data: [300, 50, 100, 60],
      backgroundColor: ['#10B981', '#3B82F6', '#EC4899', '#F59E0B'],
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        {/* Lodges Section */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border p-4">
            <img src="/imgs/dashboard-img-1.jpg" alt="Lodge 1" />
            <div className="flex justify-between items-start mt-2">
              <p className="text-mg mt-2">
                Spacious Self-Contain<br />
                Located at miracle junction<br />
                300,000 to pay 250,000
              </p>
              <button className="ml-4 mt-8 px-4 py-1 border rounded text-blue-500 border-blue-500 hover:bg-blue-50 whitespace-nowrap">
                Edit
              </button>
            </div>
          </div>

          <div className="col-span-2 grid md:grid-cols-2 h-[250px] gap-0">
            <div className="bg-blue-600 text-white p-10 rounded">
              <h3 className="text-2xl font-bold text-center">Add Your Lodge</h3>
              <p className="text-base my-2">
                Expand your reach by adding a new lodge. Join our community to connect with students and boost your renting effortlessly.
              </p>
              <div className="flex justify-center">
                <button className="bg-white text-blue-600 px-5 py-1.5 rounded mt-2 whitespace-nowrap text-sm">
                  Join Us
                </button>
              </div>
            </div>
            <img
              src="/imgs/dashboard-img-2.jpg"
              alt="Lodge 2"
              className="rounded object-cover w-full h-[250px]"
            />
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border p-4 pb-1 overflow-hidden">
            <img src="/imgs/dashboard-img-3.jpg" alt="Lodge 3" className="h-auto object-cover" />
            <div className="flex justify-between items-start mt-2">
              <p className="text-mg mt-2">
                Spacious Self-Contain<br />
                Located at miracle junction<br />
                300,000 to pay 250,000
              </p>
              <button className="ml-4 mt-8 px-4 py-1 border rounded text-blue-500 border-blue-500 hover:bg-blue-50 whitespace-nowrap">
                Edit
              </button>
            </div>
          </div>

          <div className="p-4 rounded-lg shadow col-span-2 mt-0">
            <h2 className="font-bold text-3xl mb-4">Performance Metrics</h2>
            <p className="font-semibold text-sm mb-2">Occupancy Rates</p>
            <div className="h-[400px]">
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
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border p-4 pb-1 max-w-[415px] max-h-[400px] overflow-hidden">
            <img
              src="/imgs/dashboard-img-4.jpg"
              alt="Lodge 4"
              className="w-full h-auto object-cover"
            />
            <div className="flex justify-between items-start mt-2">
              <p className="text-mg mt-2">
                Spacious Self-Contain<br />
                Located at miracle junction<br />
                300,000 to pay 250,000
              </p>
              <button className="ml-4 mt-8 px-4 py-1 border rounded text-blue-500 border-blue-500 hover:bg-blue-50 whitespace-nowrap">
                Edit
              </button>
            </div>
          </div>

          <div className="p-4 rounded-lg shadow flex flex-col">
  <p className="font-bold text-lg mb-4 text-left">Revenue Generated</p>
  <div className="flex items-center gap-6"> 
    {/* Doughnut Chart */}
    <div className="w-94 h-74"> 
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
    <div className="space-y-2 text-sm">
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
    </div>
  );
};

export default Dashboard;
