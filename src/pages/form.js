import React from "react"
import { useForm } from "react-hook-form"

const Form = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 40, minLength: 3})}>
        <select {...register("Amount")}>
          <option value="5oz">5oz</option>
          <option value="10oz">10oz</option>
          <option value="15oz">15oz</option>
        </select>
      </input>
    </form>
  )
}
export default Form
