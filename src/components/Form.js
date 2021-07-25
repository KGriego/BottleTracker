import React from "react"
import "./form.css"
import { useForm } from "react-hook-form"

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange" })

  const onSubmit = async register => {}

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          type="text"
          placeholder="Name"
          {...register("firstName", {
            required: true,
            maxLength: 40,
            minLength: 3,
          })}
        >
        </input>
          <p className="form-error-text">{errors.firstName && <span>A name is required</span>}</p>
        <select className="select" {...register("Amount", { required: true })}>
          <option value="5oz">5oz</option>
          <option value="10oz">10oz</option>
          <option value="15oz">15oz</option>
        </select>
        <button onClick={handleSubmit(onSubmit)} className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  )
}
export default Form
