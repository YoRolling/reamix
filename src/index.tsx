/// <reference path="./interfaces.ts"/>
import React from 'react'
import 'remixicon/fonts/remixicon.css'
// eslint-disable-next-line
import { IconName, IconSize, IconStyle } from './interfaces'

export interface IconProps {
  name: IconName
  size?: IconSize
  iconStyle?: IconStyle
  color?: string
  useClass?: string | string[]
  useStyle?: React.CSSProperties | undefined
  component?: React.ElementType
}

const Icon = React.memo(
  React.forwardRef(
    (
      {
        name,
        size,
        iconStyle,
        color,
        useClass,
        useStyle,
        component
      }: IconProps,
      ref
    ) => {
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
      const _style = Object.assign({}, useStyle)
      if (color) {
        _style.color = color
      }
      const Component = component || 'i'
      return (
        <Component
          className={classNameList.join(' ')}
          style={_style}
          ref={ref}
        />
      )
    }
  )
)
export default Icon
