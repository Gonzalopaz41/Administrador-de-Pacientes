import React from "react"
import Headers from "./components/header/Headers"
import Formulario from "./components/formulario/Formulario"
import ListadoPacientes from "./components/listadoPacientes/ListadoPacientes"

function App() {
  

  return (
    <div className="container mx-auto mt-20">
      <Headers/>
      <div className="mt-12 md:flex">
        <Formulario/>
        <ListadoPacientes/>
      </div>
    </div>
  )
}

export default App
