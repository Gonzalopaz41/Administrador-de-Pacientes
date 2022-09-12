import React from 'react'

const Pacientes = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
          <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:
            <span className="font-normal normal-case">Hook</span>

          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">Gonzalo</span>

          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">email@email.com</span>

          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
            <span className="font-normal normal-case">10 Diciembre de 2022</span>

          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">sintomas:
            <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium impedit nemo esse provident, dolorum quae fuga. Repellendus, a pariatur blanditiis iure commodi minus quibusdam voluptas doloribus quos voluptate! Voluptate? </span>

          </p>
        </div>
  )
}

export default Pacientes