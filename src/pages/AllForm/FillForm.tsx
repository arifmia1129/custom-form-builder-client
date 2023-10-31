/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../utils/baseUrl";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function FillForm() {
  const [formData, setFormData] = useState<any>(null);

  const { id } = useParams();

  const handleGetFormData = async () => {
    const { data } = await axios.get(`${baseUrl}/form/${id}`);
    if (data.success) {
      setFormData(data.data);
    }
  };

  useEffect(() => {
    handleGetFormData();
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
    // watch,
    // reset,
  } = useForm();

  const onSubmit = async (info: any) => {
    const formData = [];

    for (const key in info) {
      if (info.hasOwnProperty(key)) {
        const value = info[key];
        formData.push({ name: key, value });
      }
    }

    const { data } = await axios.post(`${baseUrl}/form-response/create`, {
      form: id,
      data: formData,
    });

    if (data?.success) {
      toast.success(data?.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto border-0 md:border-2 p-0 md:p-5 rounded-lg my-10">
      <p className="font-bold text-xl text-primary">Fill Form</p>

      <div
        className="h-full md:h-44 my-5 p-2 md:p-5 rounded-lg w-full flex items-center"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${formData?.headerImgUrl})`,
        }}
      >
        <div className="md:flex justify-between w-full text-white">
          <div>
            <h1 className="text-4xl font-bold">{formData?.title}</h1>
            <p>{formData?.description}</p>
          </div>
        </div>
      </div>

      <form
        className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        {formData?.fields?.map((field: any) => {
          if (field.type !== "select") {
            return (
              <div key={field?._id} className="form-control w-full md:w-96">
                <label className="label">
                  <span className="label-text">{field.name}</span>
                </label>
                <input
                  {...register(field.name, {
                    required: field?.required ? field?.requiredMsg : false,
                  })}
                  type={field.type}
                  placeholder="Write here"
                  className={`input input-bordered w-full md:w-96 flex items-center ${
                    field.type === "file" && "pt-2"
                  }`}
                />
                <label className="label">
                  <span className="label-text-alt text-red-500">
                    {errors[field?.name] &&
                      (errors[field?.name]?.message as string)}
                  </span>
                </label>
              </div>
            );
          } else {
            return (
              <div key={field?._id} className="form-control w-full md:w-96">
                <label className="label">
                  <span className="label-text">Type *</span>
                </label>
                <select
                  {...register(field.type, {
                    required: "Filed type is required",
                  })}
                  className="select select-bordered"
                >
                  {field?.options
                    ?.split(",")
                    ?.map((item: any, index: number) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                </select>
                <label className="label">
                  <span className="label-text-alt text-red-500">
                    {errors[field?.name] &&
                      (errors[field?.name]?.message as string)}
                  </span>
                </label>
              </div>
            );
          }
        })}

        <input
          className="btn btn-primary my-auto mt-8 text-white w-44"
          value={"Submit"}
          type="submit"
        />
      </form>
    </div>
  );
}

export default FillForm;
