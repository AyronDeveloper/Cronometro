import React from 'react'

const TiemposGuadados = ({tiempoAlmacenado,palabra}) => {
  return (
    <>
    <div className='display-5 text-center text-light'>{palabra}</div>
    <div className='display-6'>
        {tiempoAlmacenado.map(tiempos=>(
            <p className='card text-center p-2 text-dark bg-dark-subtle border rounded-3' key={tiempos}>{tiempos}</p>
        ))}
    </div>
    </>
  )
}

export default TiemposGuadados
