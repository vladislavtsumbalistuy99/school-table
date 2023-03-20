import Box from '@mui/material/Box';
import { Routes, Route, Navigate, BrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/Header';
import MainInfo from './pages/MainInfo';
import Students from './pages/Students';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/students" index element={<Students />} />
            <Route path="/info" element={<MainInfo />} />
            <Route path="*" element={<Navigate to="/students" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

function Layout() {
  return (
    <Box style={{ height: '100vh', backgroundColor: '#E8E8E8' }}>
      <Header />
      <Outlet />
    </Box>
  );
}
