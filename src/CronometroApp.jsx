import React, { useState } from 'react'
import InterfazCronometro from './components/InterfazCronometro'
import BtnCronometro from './components/BtnCronometro'
import TiemposGuadados from './components/TiemposGuadados'

const CronometroApp = () => {
  const [tiempo, setTiempo]=useState({h:0, m:0, s:0, ms:0})
  const [intervalo, setIntervalo]=useState()
  const [estado, setEstado]=useState(0)
  const [tiempoAlmacenado, setTiempoAlmacenado]=useState([])

  var actualizarHora=tiempo.h
  var actualizarMinuto=tiempo.m
  var actualizarSegundo=tiempo.s
  var actualizarMilisegundo=tiempo.ms

  const correrTiempo=()=>{
    if(actualizarMinuto===60){
      actualizarHora++
      actualizarMinuto=0
    }
    if(actualizarSegundo===60){
      actualizarMinuto++
      actualizarSegundo=0
    }
    if(actualizarMilisegundo===100){
      actualizarSegundo++
      actualizarMilisegundo=0
    }
    actualizarMilisegundo++
    return setTiempo({h:actualizarHora, m:actualizarMinuto, s:actualizarSegundo, ms:actualizarMilisegundo})
  }

  const empezar=()=>{
    correrTiempo()
    setIntervalo(setInterval(correrTiempo,10))
    setEstado(1)
  }

  const detener=()=>{
    clearInterval(intervalo)
    setEstado(2)
  }

  const reiniciar=()=>{
    clearInterval(intervalo)
    setEstado(0)
    setTiempo({h:0, m:0, s:0, ms:0})
    setTiempoAlmacenado([])
  }

  const guardarTiempo=()=>{
    const {h,m,s,ms}=tiempo
    const nuevoTiempo =`${h<10?"0"+h:h}:${m<10?"0"+m:m}:${s<10?"0"+s:s}:${ms<10?"0"+ms:ms}`
    setTiempoAlmacenado([...tiempoAlmacenado, nuevoTiempo])
  }
  const palabra="Tiempos Almacenados"
    
  return (
    <>
    <div className='container card bg-dark p-4'>
      <InterfazCronometro tiempo={tiempo}/>
      <BtnCronometro estado={estado} detener={detener} empezar={empezar} reiniciar={reiniciar} guardar={guardarTiempo}/>
      <TiemposGuadados tiempoAlmacenado={tiempoAlmacenado} palabra={palabra}/>
    </div>
    </>
  )
}

export default CronometroApp
