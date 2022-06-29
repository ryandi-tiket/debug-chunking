import React from 'react'
import { Text } from '@ryandi-tiket/ds-typography'

import { dummyData } from './dummy-data'

export const Button: React.FC<{ className: any }> = ({
  children,
  className,
  ...restProps
}) => {
  const cls = `test-button-2 ${className}`
  console.log(dummyData)

  return (
    <button className={cls} {...restProps}>
      <Text>{children}</Text>
    </button>
  )
}
