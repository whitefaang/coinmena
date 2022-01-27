/**
 * Login form used to authenticaate the user
 */
import React, { useState } from 'react'
import { useUIStore } from '../store/uiStore'
import Button from './atomic/Button'
import Input from './atomic/Input'

interface Props {
  onSuccess?: () => void
}

function LoginForm({ onSuccess }: Props) {
  // form state for login form
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  // func to setUser in store
  const setUser = useUIStore((state) => state.setUser)

  // errors in form after validation
  const [errors, setErrors] = useState<Partial<typeof form>>({})

  // func to check if a login form is valid
  const isValid = (params: typeof form) => {
    let errors: Partial<typeof form> = {}
    if (!params.email.trim()) {
      errors.email = 'Email is required'
    } // check if email is valid
    else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        params.email
      )
    ) {
      errors.email = 'Please enter a valid email'
    }

    if (!params.password) {
      errors.password = 'Password is required'
    }
    return errors
  }

  // form onchange event
  const onChange = (e: any) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // func to submit form
  // checks if errors and email is valid and redirects to the next route
  // or sets the erros if form is invalid
  const onSubmit = (e: any) => {
    e.preventDefault()
    const errors = isValid(form)
    if (errors.email || errors.password) {
      setErrors(errors)
      return
    }
    setUser(form)
    if (onSuccess) {
      onSuccess()
    }
  }

  return (
    <form className="grid gap-6" onSubmit={onSubmit} noValidate>
      <div className="text-4xl font-bold">Hi, Welcome Back!</div>
      <p className="text-color-muted mb-5">Start trading now!</p>
      <Input
        label="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={onChange}
        error={errors.email}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={onChange}
        error={errors.password}
      />
      <Button className="text-xl w-full  mx-auto mt-5 !py-4">Login</Button>
    </form>
  )
}

export default LoginForm
