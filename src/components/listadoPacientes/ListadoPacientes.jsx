import React from 'react'
import Pacientes from '../paciente/Pacientes'

const ListadoPacientes = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
        <p className="font-bold text-xl mt-5 mb-5 text-center">
          Administra tus {''}
          <span className="text-indigo-600 font-bold ">Pacientes y citas</span>
        </p>
        <Pacientes/>
        <Pacientes/>
        <Pacientes/>
        <Pacientes/>
        <Pacientes/>
        <Pacientes/>
    </div>
  )
}

export default ListadoPacientes