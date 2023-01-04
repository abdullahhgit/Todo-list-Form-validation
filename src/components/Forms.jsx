import React from 'react'
import {useForm} from 'react-hook-form';
import * as yup from 'yup'        // Used to perform Form validation using built-in functions.
import {yupResolver} from '@hookform/resolvers/yup'

const Forms = () => {
    const schema = yup.object().shape({
      fullName: yup.string().required("Full name is required"),
      email: yup.string().email().required("Email is required"),
      age: yup.number().positive().integer().min(18).required("age is required"),
      password: yup.string().min(5).max(12).required("Password is required"),
      confirmPassword: yup.string().oneOf([yup.ref("password"), null], ("Password Don't Match")).required(),
    });

    const {register, handleSubmit, formState: {errors}} = useForm({
      resolver: yupResolver(schema),
    });

    const submitDetails = (data) => {
        console.log(data);
    }

  return (
    <form onSubmit={handleSubmit(submitDetails)}>
      <input type="text" placeholder='Enter Name' {...register("fullName")}/>
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder='Enter Email' {...register("email")}/>
      <p>{errors.email?.message}</p>
      <input type="number" placeholder='Enter Age' {...register("age")}/>
      <p>{errors.age?.message}</p>
      <input type="password" placeholder='Enter Password' {...register("password")}/>
      <p>{errors.password?.message}</p>
      <input type="password" placeholder='Enter Confirm Password' {...register("confirmPassword")}/>
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Forms
