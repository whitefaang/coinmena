import classNames from 'classnames'
import React from 'react'

type Props = {
  error?: string
}

function Input(props: Props & React.HTMLProps<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={props.id || props.label} className="font-semibold">
        {props.label}
      </label>
      <input
        {...props}
        id={props.id || props.label}
        className={classNames(
          'w-full shadow-sm rounded-3xl focus:outline-none border border-primary-muted focus:border-2 p-4',
          props.className
        )}
      />
      <small className="text-red-500">{props.error}</small>
    </div>
  )
}

export default Input
