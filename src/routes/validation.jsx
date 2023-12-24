import { useForm } from "react-hook-form";

function Validation() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <>
          <h5>Firstname</h5>
          <input
            type="text"
            placeholder="Validate: required"
            {...register("firstName", { required: "This field is required." })}
          />
          {errors.firstName?.message && <p>{errors.firstName.message}</p>}
        </>
        <>
          <h5>Lastname</h5>
          <input
            type="text"
            placeholder="Validate: maxLength, minLength"
            {...register("lastName", {
              required: "This field is required.",
              minLength: {
                value: 2,
                message: "This field must be between 2 and 20 characters long.",
              },
              maxLength: {
                value: 20,
                message: "This field must be between 2 and 20 characters long.",
              },
            })}
          />
          {errors.lastName?.message && <p>{errors.lastName.message}</p>}
        </>
        <>
          <h5>Age</h5>
          <input
            type="number"
            placeholder="Validate: min, max"
            {...register("age", {
              required: "This field is required.",
              valueAsNumber: true,
              min: {
                value: 18,
                message:
                  "This field must contain a value between 18-99 years old.",
              },
              max: {
                value: 99,
                message:
                  "This field must contain a value between 18-99 years old.",
              },
            })}
          />
          {errors.age?.message && <p>{errors.age.message}</p>}
        </>
        <>
          <h5>Email</h5>
          <input
            type="text"
            placeholder="Validate: pattern"
            {...register("email", {
              required: "This field is required.",
              pattern: {
                value: /^[\w-.]+@([\w-.])+\.[\w-]{2,4}$/,
                message:
                  "The email address was entered in an incorrect format.",
              },
            })}
          />
          {errors.email?.message && <p>{errors.email.message}</p>}
        </>
        <>
          <h5>Password</h5>
          <input
            type="password"
            placeholder="Validate: validate, deps"
            {...register("password", {
              required: "This field is required.",
              minLength: {
                value: 8,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, one number, one special symbol and must be at least 8 characters.",
              },
              validate: (value) => {
                const isValid =
                  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                    value
                  );

                if (!isValid) {
                  return "Password must contain at least one uppercase letter, one lowercase letter, one number, one special symbol and must be at least 8 characters.";
                } else {
                  return true;
                }
              },
              deps: ["passwordConfirm"],
            })}
          />
          {errors.password?.message && <p>{errors.password.message}</p>}
        </>
        <>
          <h5>Confirm Password</h5>
          <input
            type="password"
            placeholder="Validate: watch(password) === passwordConfirm, deps"
            {...register("passwordConfirm", {
              required: { value: true, message: "This field is required." },
              validate: (value) =>
                value === watch("password") ? true : "Passwords don't match.",
            })}
          />
          {errors.passwordConfirm?.message && (
            <p>{errors.passwordConfirm.message}</p>
          )}
        </>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Validation;
