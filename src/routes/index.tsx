import { Route, Routes } from "react-router-dom";
import Form from "../pages/Form/Form";
import Navbar from "../components/Shared/Navbar";
import AllForm from "../pages/AllForm/AllForm";
import FillForm from "../pages/AllForm/FillForm";
import AllFormResponseList from "../pages/FormResponse/AllFormResponseList";

export default function Index() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/fill-form" element={<AllForm />} />
        <Route path="/fill-form/:id" element={<FillForm />} />
        <Route path="/form-response" element={<AllFormResponseList />} />
      </Routes>
    </>
  );
}
