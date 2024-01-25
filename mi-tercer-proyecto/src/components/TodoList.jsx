import { useState } from "react"


const TodoList = () => {
    const [inputValue, setInputValue] = useState('')

    const handleAddItem = () => {
      console.log("nueva tarea; ", inputValue)
    }

  return (
    <div>
        <h1>Lista de Tareas</h1>
        {/*Para tomar control de la informacion que hay en el input, podemos hacer uso del evento onChange
        para guarda la informacion del input y a penas sea teclado y guardarla en mi estado*/} 
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <hr />
        <button onClick={handleAddItem}>Agregar</button>
        <ul>
          <li>Comprar despensa
            <button>Eliminar</button>
          </li>
          <li>Lavar ropa
            <button>Eliminar</button>
          </li>
          <li>Pasear perro
            <button>Eliminar</button>
          </li>
        </ul>
        
    </div>
  )
}

export default TodoList
