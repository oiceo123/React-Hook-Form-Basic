import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const Input = ({ label, register, required }) => (
  <>
    <h5>{label}</h5>
    <input type="text" {...register(label, { required })} />
  </>
);

Input.propTypes = {
  label: PropTypes.string,
  register: PropTypes.func,
  required: PropTypes.bool,
};

// React.forwardRef เป็นคำสั่งไว้ส่ง ref จาก parent component ไปยัง child component
const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <>
    <h5>{label}</h5>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));

Select.displayName = "Select";
Select.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
};

const ExistingForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-4">
      <Input label="First Name" register={register} required />
      <Select label="Age" {...register("Age")} />
      <input type="submit" />
    </form>
  );
};

export default ExistingForm;
