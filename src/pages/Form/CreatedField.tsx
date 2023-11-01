/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";

function CreatedField({ fields }: any) {
  const {
    register,
    formState: { errors },
    // watch,
    // reset,
  } = useForm();

  return (
    <div className="max-w-7xl mx-auto border-0 md:border-2 p-0 md:p-5 rounded-lg my-10">
      <p className="font-bold text-xl text-primary">Created Form Field</p>
      <form className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center ">
        {fields?.map((field: any) => {
          if (field.type !== "select") {
            return (
              <div className="form-control w-full md:w-96">
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
              <div className="form-control w-full md:w-96">
                <label className="label">
                  <span className="label-text">{field.name}</span>
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
      </form>
    </div>
  );
}

export default CreatedField;
