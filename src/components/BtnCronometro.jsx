import React from 'react'

const BtnCronometro = (props) => {

  return (
    <>
      <div className='container d-flex justify-content-center align-items-center p-3'>
        {(props.estado===0)?
        <div>
            <button onClick={props.empezar} className='btn btn-info btn-lg'>Empezar</button>
        </div>
        :""
        }
        
        {(props.estado==1||props.estado==2)?
        <div className='btn-group '>
            {(props.estado==2)?
            <button onClick={props.empezar} className='btn btn-info btn-lg'>Reanudar</button>
            :
            <button onClick={props.detener} className='btn btn-warning btn-lg'>Detener</button>
            }
            <button onClick={props.guardar} className='btn btn-success btn-lg'>Guardar</button>
            <button onClick={props.reiniciar} className='btn btn-danger btn-lg'>Reiniciar</button>
        </div>
        :""
        }
      </div>
    </>
  )
}

export default BtnCronometro
