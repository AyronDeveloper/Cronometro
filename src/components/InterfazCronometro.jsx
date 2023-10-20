import React from 'react'

const InterfazCronometro = (props) => {

  return (
    <>
    <div>
      <div className='display-4 text-center p-2 text-light bg-primary border border-primary-subtle rounded-3'>
        <span>{(props.tiempo.h)>=10?props.tiempo.h:"0"+props.tiempo.h}:</span>
        <span>{(props.tiempo.m)>=10?props.tiempo.m:"0"+props.tiempo.m}:</span>
        <span>{(props.tiempo.s)>=10?props.tiempo.s:"0"+props.tiempo.s}:</span>
        <span>{(props.tiempo.ms)>=10?props.tiempo.ms:"0"+props.tiempo.ms}</span>
      </div>
    </div>
    </>
  )
}

export default InterfazCronometro
