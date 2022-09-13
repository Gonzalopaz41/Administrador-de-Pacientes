import React from "react"
import { useState } from "react"
import Headers from "./components/header/Headers"
import Formulario from "./components/formulario/Formulario"
import ListadoPacientes from "./components/listadoPacientes/ListadoPacientes"

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  return (
    <div className="container mx-auto mt-20">
      <Headers/>
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
        />
        <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        />
      </div>
    </div>
  )
}

export default App
