import classNames from 'classnames'
import React, { ReactElement, useState } from 'react'

/**
 * Props for the <Dropdown> component
 */
interface DropdownProps {
  header: string | ReactElement
  children: ReactElement[]
  onChange: (e: any) => void
}

/**
 * Props for the <Dropdown.Option> props
 */
interface DropdownOptionProps {
  value: string | number
  children: string | ReactElement
  info?: boolean
}

/**
 * Context between <Dropdown> and <Dropdown.Option>
 */
const context = React.createContext<{
  onChange: (
    /**
     * func received from the parent to <Dropdown> component and passed to <Dropdown.Option> component via context
     */
    props: { value: number | string }
  ) => void
  /**
   * used by <Dropdown.Option> component to close the dropdown when an option is selected
   */
  closeDropDown: () => void
} | null>(null)

/**
 *
 * @param {DropdownProps} props
 * @returns {ReactElement}
 */
function Dropdown(
  props: DropdownProps & React.HTMLProps<HTMLDivElement>
): ReactElement {
  const { onChange, children, header } = props
  // flag to check whether the dropdown is open or close
  const [open, setOpen] = useState(false)

  // func to close dropdown
  const closeDropDown = () => {
    setOpen(false)
  }
  return (
    <context.Provider value={{ onChange, closeDropDown }}>
      <div
        {...props}
        className={`relative flex items-center justify-between px-3 focus:outline outline-primary-muted rounded-lg ${props.className}`}
        tabIndex={0}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen(true)}
      >
        <div className="mr-2 cursor-pointer">{header}</div>
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
            'overflow-y-auto bg-surface shadow-md absolute top-full right-0 z-20',
            { 'h-auto ': open, 'h-0': !open }
          )}`}
        >
          {children}
        </ul>
      </div>
    </context.Provider>
  )
}

/**
 * This component is to be used as a child of <Dropdown> component
 * @param {DropdownOptionProps} props
 * @returns {ReactElement}
 */
Dropdown.Option = ({ children, value, info }: DropdownOptionProps) => {
  const ctx = React.useContext(context)!
  const onClick = () => {
    ctx.onChange({ value })
    ctx.closeDropDown()
  }
  return (
    <li
      onClick={onClick}
      className={`${classNames('list-none p-2 lg:px-3 lg:py-4 cursor-pointer', {
        'hover:bg-primary-muted': !info,
      })}`}
    >
      {children}
    </li>
  )
}

export default Dropdown
