import React, { useEffect } from 'react'

import Icon from 'reamix'
// esint-disable-next-line
const DemoCf = React.forwardRef<any, any>((props, ref) => {
  console.log(props)
  return (
    <button {...props} ref={ref}>
      {props.children}
    </button>
  )
})
const App = () => {
  const ref = React.createRef()
  const directiveRef = React.createRef()
  useEffect(() => {
    console.log(ref.current)
  }, [ref])

  useEffect(() => {
    console.log(directiveRef.current)
  }, [directiveRef])
  return (
    <>
      <Icon
        name='24-hours'
        iconStyle='line'
        size='fw'
        useClass='my-custom-class'
        useStyle={{ color: 'red' }}
      />

      <Icon
        name='account-box'
        iconStyle='line'
        size='fw'
        useClass='my-custom-class'
        useStyle={{ color: 'red' }}
        component='div'
      />
      <Icon
        name='edge'
        iconStyle='line'
        ref={directiveRef}
        component={DemoCf}
      />
      <Icon
        name='zoom-in'
        iconStyle='fill'
        size='10x'
        useStyle={{ color: 'yellowgreen' }}
        // ref={ref}
        component={(props) => (
          <DemoCf {...props} ref={ref}>
            abc
          </DemoCf>
        )}
      ></Icon>
    </>
  )
}

export default App
