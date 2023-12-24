import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

function SchemaValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-4">
      <h5>First Name</h5>
      <input type="text" {...register("firstName")} />
      {errors.firstName?.message && <p>{errors.firstName?.message}</p>}

      <h5>Age</h5>
      <input type="text" {...register("age")} />
      {errors.age?.message && <p>{errors.age?.message}</p>}

      <input type="submit" />
    </form>
  );
}

export default SchemaValidation;
