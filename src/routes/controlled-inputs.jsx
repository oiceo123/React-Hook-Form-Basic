import { Input as AntdInput } from "antd";
import { useForm, useController } from "react-hook-form";
import PropTypes from "prop-types";

function Input({ control, name, rules }) {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  });

  return (
    <div>
      <h3>useController</h3>
      <h5>First Name</h5>
      <AntdInput {...field} />
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.invalid ? "invalid" : "valid"}</p>
    </div>
  );
}

Input.propTypes = {
  control: PropTypes.object,
  name: PropTypes.string,
  rules: PropTypes.object,
};

function ControlledInputs() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      FirstName: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          control={control}
          name="FirstName"
          rules={{ required: "This field is required" }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default ControlledInputs;
