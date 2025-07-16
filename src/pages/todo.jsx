import { useState } from 'react'
import { addToDo, deleteToDO } from '../redux/toDoAction'
import { useDispatch, useSelector } from 'react-redux'

function ToDo() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state)
  const [inputValue, setInputValue] = useState('')

  function sendToDo() {
    if (inputValue.trim() !== '') {
      dispatch(addToDo(inputValue))
      setInputValue('')
    } else {
      return alert('White your to do!')
    }
  }

  function deleteItem(key) {
    dispatch(deleteToDO(key))
  }

  function renderToDo() {
    return todos.map((item, key) => {
      return (
        <li key={key}>
          {item}
          <button onClick={() => deleteItem(key)}>Delete</button>
        </li>
      )
    })
  }

  return (
    <>
      <h1>To Do</h1>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={() => sendToDo()} className='form-send'>Send todo</button>
      <ul>
        {renderToDo()}
      </ul>
    </>
  )  
}

export default ToDo