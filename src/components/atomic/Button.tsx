/**
 * Custom Button Component
 */
import classNames from 'classnames'
import React from 'react'

interface Props extends React.HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
  ghost?: boolean
}

function Button(props: Props) {
  return (
    <button
      {...props}
      className={classNames(
        {
          'bg-primary text-surface': !props.ghost,
          'text-primary hover:text-surface bg-opacity-10 hover:bg-primary':
            props.ghost,
          'opacity-30 cursor-not-allowed': props.disabled,
        },
        'px-3 lg:px-6 py-2 transition-all relative active:top-0.5 rounded-3xl',
        props.className
      )}
    >
      {props.children}
    </button>
  )
}

export default Button
