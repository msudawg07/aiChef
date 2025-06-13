import { useState } from 'react'

export default function Main() {

  const [listOfIngredients, setListOfIngredients] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const ingredient = formData.get('ingredient')
    setListOfIngredients((prev) => [...prev, <li>{ingredient}</li>])
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="mainForm">
        <input type='text' placeholder="i.e bacon" name='ingredient'></input>
        <button>+ Add Ingredients</button>
      </form>

      <ul>{listOfIngredients}</ul>
    </main>

  )
}