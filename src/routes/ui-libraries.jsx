import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { Input as AntdInput } from "antd";

function UiLibraries() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-4">
      <h3>Controller Component</h3>
      <h5>First Name</h5>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        rules={{ required: "This field is required" }}
        render={({ field, formState: { errors } }) => (
          <>
            <AntdInput {...field} />
            {errors.firstName?.message && <p>{errors.firstName.message}</p>}
          </>
        )}
      />
      <h5>Ice Cream Preference</h5>
      <Controller
        name="iceCreamType"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
        )}
      />
      <input type="submit" />
    </form>
  );
}

export default UiLibraries;
