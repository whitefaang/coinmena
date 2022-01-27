/**
 * Custom Link component
 */
import classNames from 'classnames'
import React from 'react'
import {
  Link as RouterLink,
  LinkProps,
  useMatch,
  useResolvedPath,
} from 'react-router-dom'

function Link(props: LinkProps & React.RefAttributes<HTMLAnchorElement>) {
  let resolved = useResolvedPath(props.to)
  let match = useMatch({ path: resolved.pathname, end: true })

  return (
    <RouterLink
      {...props}
      className={classNames(
        'font-semibold hover:text-gray-500',
        props.className,
        { '!text-primary': match }
      )}
    />
  )
}

export default Link
