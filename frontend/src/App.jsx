import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Notifications } from '@mantine/notifications';
import LandingPage from "./pages/LandingPage";
import UserTable from "./pages/Table";

function App() {

  return (
    <>
      <BrowserRouter>
        <Notifications position='bottom-center' />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/users" element={<UserTable />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
