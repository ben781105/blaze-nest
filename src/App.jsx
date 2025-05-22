// App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './components/Dashboard';
import AddLodge from './components/AddLodge';
import ManageListing from './components/ManageListing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-lodge" element={<AddLodge />} />
        <Route path="/manage-listing" element={<ManageListing />} />
      </Route>
    </Routes>
  );
}

export default App;
