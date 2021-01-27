/// <reference path="./interfaces.ts"/>
import React from 'react'
import 'remixicon/fonts/remixicon.css'
// eslint-disable-next-line
import { IconName, IconSize, IconStyle } from './interfaces'

export interface Props {
  name: IconName
  size?: IconSize
  iconStyle?: IconStyle
  useClass?: string | string[]
  useStyle?: React.CSSProperties | undefined
  component?: React.ElementType
}

const Icon = React.forwardRef(
  ({ name, size, iconStyle, useClass, useStyle, component }: Props, ref) => {
    if (!name) {
      console.error('Prop<name> of Icon must be provide')
      return <React.Fragment />
    }
    let classNameList: string[] = [`ri-${name}-${iconStyle}`]
    if (size) {
      classNameList.push(`ri-${size}`)
    }
    if (useClass) {
      classNameList = [
        ...classNameList,
        ...(Array.isArray(useClass) ? useClass : [useClass])
      ]
    }
    const Component = component || 'i'
    return (
      <Component
        className={classNameList.join(' ')}
        style={useStyle}
        ref={ref}
      />
    )
  }
)

export default Icon
