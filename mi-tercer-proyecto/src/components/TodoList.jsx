import { useState } from "react"
import TodoItem from "./TodoItem"

const TodoList = () => {
    const [inputValue, setInputValue] = useState('')

    {/*Estado para almacenar la lista de tareas que voy a agregando en un arreglo*/ }
    const [todos, setTodos] = useState([])

    {/*Funcion que agrega tareas a mi lista */}


    const handleAddItem = () => {
      if (inputValue.trim()) { //.trim() me ayuda a limpiar espacios en blancos
        setTodos([...todos, inputValue])
        setInputValue('') //Me ayuda a limpiar el Input cada que damos onClick
        console.log(todos)
      }
    }
    
    const handleDelete = (index) =>{
      setTodos(todos.filter((item, i) => i !== index ))
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
          {todos.map((item, index) => (

            <TodoItem
              todo={item}
              handleDelete={() => handleDelete(index)}
              key={index}
            />

          ))
          }
        </ul>
        
    </div>
  )
}

export default TodoList
