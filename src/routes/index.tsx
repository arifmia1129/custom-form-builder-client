import { Route, Routes } from "react-router-dom";
import Form from "../pages/Form/Form";
import Navbar from "../components/Shared/Navbar";

export default function Index() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </>
  );
}
