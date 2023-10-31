/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../utils/baseUrl";
import { Link } from "react-router-dom";

export default function AllFormResponseList() {
  const [allFormResponse, setAllFormResponse] = useState([]);

  console.log(allFormResponse);

  const handleGetAllFormResponse = async () => {
    const { data } = await axios.get(`${baseUrl}/form-response`);
    if (data.success) {
      setAllFormResponse(data.data);
    }
  };

  console.log(allFormResponse);

  useEffect(() => {
    handleGetAllFormResponse();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      {allFormResponse?.map((form: any) => (
        <div
          className="h-full my-5 p-2 md:p-5 rounded-lg w-full flex items-center border-0 md:border-2"
          key={form?._id}
        >
          <div className="md:flex justify-between items-center w-full ">
            <img
              className="w-32 h-32 rounded-lg"
              src={form?.form?.headerImgUrl}
              alt=""
            />
            <div>
              <h1 className="text-4xl font-bold">{form?.form?.title}</h1>
            </div>
            <Link to={`/fill-form/${form?._id}`}>
              <button className="btn btn-primary text-white">
                See Response
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
