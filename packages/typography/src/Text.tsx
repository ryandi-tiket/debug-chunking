import React from 'react'

export const Text: React.FC<{ className?: string }> = ({
  children,
  className,
  ...restProps
}) => (
  <p className={`${className} test-2`} {...restProps}>
    {children}
  </p>
)
