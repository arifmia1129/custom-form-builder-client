/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import FieldCreators from "./FieldCreators";
import CreatedField from "./CreatedField";
import toast from "react-hot-toast";

function Form() {
  const [inputFields, setInputFields] = useState<object>([]);
  const [uploadedHeaderImgUrl, setUploadedHeaderImgUrl] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();

  const headerImg = watch("headerImgUrl");

  const handleImgUpload = async (file: any) => {
    const formData = new FormData();

    formData.append("file", file[0]);

    const { data } = await axios.post(`${baseUrl}/file/upload`, formData);

    setUploadedHeaderImgUrl(data.data.url);
  };

  useEffect(() => {
    if (headerImg && !uploadedHeaderImgUrl) {
      handleImgUpload(headerImg);
    }
  }, [headerImg, uploadedHeaderImgUrl]);

  const onSubmit = async (info: any) => {
    info.headerImgUrl = uploadedHeaderImgUrl;
    info.fields = inputFields;

    const { data } = await axios.post(`${baseUrl}/form/create`, info);

    if (data.success) {
      toast.success(data.message);
      reset();
    }
  };

  return (
    <div className="max-w-7xl mx-auto border-0 md:border-2 p-0 md:p-5 rounded-lg my-10">
      <CreatedField fields={inputFields} />
      <FieldCreators
        inputFields={inputFields}
        setInputFields={setInputFields}
      />
      <form
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center  "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control w-full md:w-96">
          <label className="label">
            <span className="label-text">Title *</span>
          </label>
          <input
            {...register("title", {
              required: "Form title is required",
            })}
            type="text"
            placeholder="Write form title here"
            className="input input-bordered w-full md:w-96"
          />
          <label className="label">
            <span className="label-text-alt text-red-500">
              {errors.title && (errors.title.message as string)}
            </span>
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Form Header Image</span>
          </label>
          <input
            type="file"
            {...register("headerImgUrl", {
              required: "Form Header Image is required",
            })}
            className="file-input file-input-bordered file-input-primary w-full md:w-96"
          />
          <label className="label">
            <span className="label-text-alt text-red-500">
              {errors.headerImgUrl && (errors.headerImgUrl.message as string)}
            </span>
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Form Description</span>
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="textarea textarea-bordered w-full md:w-96"
            placeholder="Write description"
          ></textarea>
          <label className="label">
            <span className="label-text-alt text-red-500">
              {errors.description && (errors.description.message as string)}
            </span>
          </label>
        </div>

        <input
          className="btn btn-primary text-white w-44"
          value={"Create"}
          type="submit"
        />
      </form>
    </div>
  );
}

export default Form;
