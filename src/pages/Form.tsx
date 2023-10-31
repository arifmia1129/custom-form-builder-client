/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";

function Form({ fields }: any) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    // watch,
    // reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <>
      <form className="max-w-7xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
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
                  placeholder="Write field name here"
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
                  <span className="label-text">Type *</span>
                </label>
                <select
                  {...register("passingYear", {
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
                    {errors.passingYear &&
                      (errors.passingYear.message as string)}
                  </span>
                </label>
              </div>
            );
          }
        })}

        {Array.isArray(fields) && fields.length ? (
          <input
            // disabled={!agreeTerm}
            className="btn btn-primary text-white"
            value={"Submit"}
            type="submit"
          />
        ) : null}
      </form>
    </>
  );
}

export default Form;
