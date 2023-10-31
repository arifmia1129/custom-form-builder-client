/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../utils/baseUrl";
import { Link } from "react-router-dom";

export default function AllForm() {
  const [allForm, setAllForm] = useState([]);

  const handleGetAllForm = async () => {
    const { data } = await axios.get(`${baseUrl}/form`);
    if (data.success) {
      setAllForm(data.data);
    }
  };

  useEffect(() => {
    handleGetAllForm();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      {allForm?.map((form: any) => (
        <div
          className="h-full md:h-44 my-5 p-2 md:p-5 rounded-lg w-full flex items-center"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${form?.headerImgUrl})`,
          }}
          key={form?._id}
        >
          <div className="md:flex justify-between w-full text-white">
            <div>
              <h1 className="text-4xl font-bold">{form?.title}</h1>
              <p>{form?.description}</p>
            </div>
            <Link to={`/fill-form/${form?._id}`}>
              <button className="btn btn-white">Fill Form</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
