import classNames from 'classnames'
import React, { ReactElement, useState } from 'react'

/**
 * Props for the <Select> component
 */
interface SelectProps {
  name: string
  value: string | number
  children: ReactElement[]
  onChange: (e: any) => void
}

/**
 * Props for the <Select.Option> props
 */
interface OptionProps {
  value: string | number
  children: string
}

/**
 * Context between <Select> and <Select.Option>
 */
const context = React.createContext<{
  onChange: (
    /**
     * func received from the parent to <Select> component and passed to <Select.Option> component via context
     */
    props: { target: { name: string; value: number | string } }
  ) => void
  /**
   * name of the select field
   */
  name: string
  /**
   * used by <Select.Option> component to close the dropdown when an option is selected
   */
  closeDropDown: () => void
  /**
   * the selected option from the dropdown used by <Select.Option> to highlight the selected option
   */
  selected: number | string
} | null>(null)

/**
 *
 * @param {SelectProps} props
 * @returns {ReactElement}
 */
function Select({
  value,
  onChange,
  children,
  name,
}: SelectProps): ReactElement {
  // flag to check whether the dropdown is open or close
  const [open, setOpen] = useState(false)

  // func to close dropdown
  const closeDropDown = () => {
    setOpen(false)
  }
  return (
    <context.Provider
      value={{ onChange, name, closeDropDown, selected: value }}
    >
      <div
        className={`relative flex justify-between bg-surface-muted px-3 py-4 border`}
        tabIndex={0}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen(true)}
      >
        <span className="mr-2">{value}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-down"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
        <ul
          onClick={(e) => e.stopPropagation()}
          className={`${classNames(
            'overflow-y-auto bg-surface shadow-md absolute w-full top-full left-0 z-20',
            { 'h-auto max-h-[300px] ': open, 'h-0': !open }
          )}`}
        >
          {children}
        </ul>
      </div>
    </context.Provider>
  )
}

/**
 * This component is to be used as a child of <Select> component
 * @param {OptionProps} props
 * @returns {ReactElement}
 */
Select.Option = ({ children, value }: OptionProps) => {
  const ctx = React.useContext(context)!
  const onClick = () => {
    ctx.onChange({ target: { name: ctx.name, value } })
    ctx.closeDropDown()
  }
  return (
    <li
      onClick={onClick}
      className={`${classNames(
        { 'bg-primary': ctx.selected === value },
        'list-none hover:bg-primary-muted px-3 py-4'
      )}`}
    >
      {children}
    </li>
  )
}

export default Select
