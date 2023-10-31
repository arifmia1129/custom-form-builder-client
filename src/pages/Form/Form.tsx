/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import FieldCreators from "./FieldCreators";
import CreatedField from "./CreatedField";

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

    reset();
  };

  return (
    <div>
      <FieldCreators
        inputFields={inputFields}
        setInputFields={setInputFields}
      />
      <form className="" onSubmit={handleSubmit(onSubmit)}>
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
          className="btn btn-primary text-white"
          value={"Create"}
          type="submit"
        />
      </form>

      <CreatedField fields={inputFields} />
    </div>
  );
}

export default Form;
