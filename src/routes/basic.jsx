import { useForm } from "react-hook-form";

function Basic() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // ฟังก์ชั่นที่จะเรียกใช้เมื่อตรวจสอบความถูกต้องของข้อมูลสำเร็จ ใช้คู่กับฟังก์ขั่น handleSubmit
  const onSubmit = (data) => {
    console.log(data);
  };

  // watch เป็นฟังก์ขั่นไว้ดูการเปลี่ยนแปลงของ field ที่กำหนดใน watch
  let firstname = watch("firstname");
  let lastname = watch("lastname");
  let age = watch("age");
  let category = watch("category");
  let skill = watch("skill");
  let gender = watch("gender");

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <>
          <h5>Firstname</h5>
          {/* register เป้นฟังก์ชั่นไว้บอก hook ของ react-hook-form ให้รู้ว่ามี field ชื่อ firstname อยู่ */}
          {/* และสามารถตั้งกฏต่างๆ เพื่อใช้ตรวจสอบข้อมูลว่าเป็นข้อมูลตามที่เราต้องการไหมได้ด้วย*/}
          <input
            type="text"
            {...register("firstname", { required: true, maxLength: 20 })}
          />
          <p>firstname: {JSON.stringify(firstname)}</p>
          {/* errors เป็น object ที่จะมีค่าเมื่อการ validation fails โดยจะมีชื่อ key ตามทีกำหนดใน register */}
          {errors.firstname && (
            <p>This field is required and max length 20 Character</p>
          )}
        </>
        <>
          <h5>Lastname</h5>
          {/* register เป้นฟังก์ชั่นไว้บอก hook ของ react-hook-form ให้รู้ว่ามี field ชื่อ lastname อยู่ */}
          {/* และสามารถตั้งกฏต่างๆ เพื่อใช้ตรวจสอบข้อมูลว่าเป็นข้อมูลตามที่เราต้องการไหมได้ด้วย*/}
          <input
            type="text"
            {...register("lastname", { pattern: /^[A-za-z]+$/i })}
          />
          <p>lastname: {JSON.stringify(lastname)}</p>
          {/* errors เป็น object ที่จะมีค่าเมื่อการ validation fails โดยจะมีชื่อ key ตามทีกำหนดใน register */}
          {errors.lastname && <p>This field have pattern</p>}
        </>
        <>
          <h5>Age</h5>
          <input type="number" {...register("age", { min: 18, max: 99 })} />
          <p>age: {JSON.stringify(age)}</p>
          {errors.age && <p>This field have to between 18-99</p>}
        </>
        <>
          <h5>Category</h5>
          <select className="form-select" {...register("category")}>
            <option selected hidden>
              Open this select menu
            </option>
            <option value="A">Category A</option>
            <option value="B">Category B</option>
            <option value="C">Category C</option>
          </select>
          <p>category: {JSON.stringify(category)}</p>
        </>
        <>
          <h5>Skill</h5>
          <div className="d-flex">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="english"
                {...register("skill")}
              />
              <span className="form-check-label me-4">English</span>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="japan"
                {...register("skill")}
              />
              <span className="form-check-label">Japan</span>
            </div>
          </div>
          <p>Skill: {JSON.stringify(skill)}</p>
        </>
        <>
          <h5>Gender</h5>
          <div className="d-flex">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="male"
                {...register("gender")}
              />
              <span className="form-check-label me-4">Male</span>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="female"
                {...register("gender")}
              />
              <span className="form-check-label">Female</span>
            </div>
          </div>
          <p>Gender: {gender}</p>
        </>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Basic;
