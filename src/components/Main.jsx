import { useState } from 'react'

export default function Main() {

  const [listOfIngredients, setListOfIngredients] = useState([])
  const [onHand, setonHand] = useState('')

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget)
  //   const ingredient = formData.get('ingredient')
  //   // setListOfIngredients((prev) => [...prev, ingredient])
  //   setListOfIngredients((prev) => [...prev, <li>{ingredient}</li>])
  // }

  function submit(formData) {
    let ingredient = formData.get('ingredient')
    setListOfIngredients(prev => [...prev, <li>{ingredient}</li>])
    setonHand('Ingredients on hand')
  }

  return (
    <main>
      <form action={submit} className="mainForm">
        <input type='text' placeholder="i.e bacon" name='ingredient'></input>
        <button>+ Add Ingredients</button>
      </form>

      {/* <ul>{listOfIngredients.map(item => <li>{item}</li>)}</ul> */}
      <h1>{onHand}</h1>
      <ul>{listOfIngredients}</ul>
    </main>

  )
}