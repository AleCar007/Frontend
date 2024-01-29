// eslint-disable-next-line react/prop-types
const TodoItem = ({todo, handleDelete}) => {
  return (
    <div>
        <li>{todo}
            <button className='delete-button' onClick={handleDelete}>Eliminar</button>
        </li>
    </div>
  )
}

export default TodoItem