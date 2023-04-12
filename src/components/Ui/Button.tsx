import { cva } from 'class-variance-authority'
import React from 'react'

type Props = {}

const buttonVariants = cva(
    'active:scale-95 in'
)

const Button = (props: Props) => {
  return (
    <div className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disable:opacity-50 disabled:pointer-events-none'>Button</div>
  )
}

export default Button