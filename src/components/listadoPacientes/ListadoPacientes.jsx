import React from 'react'
import Pacientes from '../paciente/Pacientes'

const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {
  
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {pacientes && pacientes.length ? (
       <>
       <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
        <p className="font-bold text-xl mt-5 mb-5 text-center">
          Administra tus {''}
          <span className="text-indigo-600 font-bold ">Pacientes y citas</span>
        </p>

        {pacientes.map((paciente)=>(
          <Pacientes
            key={paciente.id}
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            

          />
        ))}
        </>
      ):(
        <>
        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
        <p className="font-bold text-xl mt-5 mb-5 text-center">
          Comienza agregando pacientes {''}
          <span className="text-indigo-600 font-bold ">y se mostraran en este lugar</span>
        </p>
        </>
      )}

        
        
       
    </div>
  )
}

export default ListadoPacientes