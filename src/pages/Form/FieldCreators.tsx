/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function FieldCreators({ setInputFields, inputFields }: any) {
  const [isSelectField, setIsSelectField] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();

  const fieldType = watch("type");
  const required = watch("required");

  useEffect(() => {
    if (fieldType === "select") {
      setIsSelectField(true);
    } else {
      setIsSelectField(false);
    }
  }, [fieldType]);

  const onSubmit = async (info: any) => {
    setInputFields([...inputFields, info]);
    reset();
  };

  // Define an array of objects
  const types = [
    {
      name: "Text",
      value: "text",
    },
    {
      name: "Password",
      value: "password",
    },
    {
      name: "Select",
      value: "select",
    },
    {
      name: "Checkbox",
      value: "checkbox",
    },
    {
      name: "Radio",
      value: "radio",
    },
    {
      name: "File",
      value: "file",
    },
    {
      name: "Number",
      value: "number",
    },
    {
      name: "Textarea",
      value: "textarea",
    },
    {
      name: "Email",
      value: "email",
    },
    {
      name: "Range",
      value: "range",
    },
    {
      name: "Search",
      value: "search",
    },
    {
      name: "Tel",
      value: "tel",
    },
    {
      name: "URL",
      value: "url",
    },
    {
      name: "Time",
      value: "time",
    },
    {
      name: "Datetime",
      value: "datetime",
    },
    {
      name: "Datetime-local",
      value: "datetime-local",
    },
    {
      name: "Week",
      value: "week",
    },
    {
      name: "Month",
      value: "month",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto border-0 md:border-2 p-0 md:p-5 rounded-lg my-10">
      <p className="font-bold text-xl text-primary">Create Form Field</p>
      <form
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control w-full md:w-96">
          <label className="label">
            <span className="label-text">Name *</span>
          </label>
          <input
            {...register("name", {
              required: "Filed name is required",
            })}
            type="text"
            placeholder="Write field name here"
            className="input input-bordered w-full md:w-96"
          />
          <label className="label">
            <span className="label-text-alt text-red-500">
              {errors.name && (errors.name.message as string)}
            </span>
          </label>
        </div>

        <div className="form-control w-full md:w-96">
          <label className="label">
            <span className="label-text">Type *</span>
          </label>
          <select
            {...register("type", {
              required: "Filed type is required",
            })}
            className="select select-bordered"
          >
            {types?.map((item, index) => (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
          <label className="label">
            <span className="label-text-alt text-red-500">
              {errors.type && (errors.type.message as string)}
            </span>
          </label>
        </div>

        {isSelectField ? (
          <div className="form-control w-full md:w-96">
            <label className="label">
              <span className="label-text">Write options *</span>
            </label>
            <input
              {...register("options", {
                required: "Options field is required",
              })}
              type="text"
              placeholder="Write options field separated by comma"
              className="input input-bordered w-full md:w-96"
            />
            <label className="label">
              <span className="label-text-alt text-red-500">
                {errors.options && (errors.options.message as string)}
              </span>
            </label>
          </div>
        ) : null}
        <div className="mt-5">
          <label className="label">
            <span className="label-text">Required Message *</span>
          </label>
          <div className="flex items-center">
            <input
              {...register("required")}
              type="checkbox"
              className="checkbox mr-2"
            />
            <span className="label-text">Required</span>
          </div>
        </div>

        {required && (
          <div className="form-control w-full md:w-96">
            <label className="label">
              <span className="label-text">Required Message *</span>
            </label>
            <input
              {...register("requiredMsg", {
                required: "Required message is required",
              })}
              type="text"
              placeholder="Write required message"
              className="input input-bordered w-full md:w-96"
            />
            <label className="label">
              <span className="label-text-alt text-red-500">
                {errors.requiredMsg && (errors.requiredMsg.message as string)}
              </span>
            </label>
          </div>
        )}

        <input
          className="btn btn-primary my-auto mt-8 text-white w-44"
          value={"Create Field"}
          type="submit"
        />
      </form>
    </div>
  );
}

export default FieldCreators;
