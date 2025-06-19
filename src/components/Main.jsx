import { useState } from 'react'

export default function Main() {

  const [listOfIngredients, setListOfIngredients] = useState([])
  // const [onHand, setonHand] = useState('') line 35

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget)
  //   const ingredient = formData.get('ingredient')
  //   // setListOfIngredients((prev) => [...prev, ingredient])
  //   setListOfIngredients((prev) => [...prev, <li>{ingredient}</li>])
  // }

  function submit(formData) {
    let ingredient = formData.get('ingredient')
    if(ingredient.startsWith(" ")) {
      alert('Must enter ingredient')
      return
    }
    console.log(ingredient)
    setListOfIngredients(prev => [...prev, <li>{ingredient}</li>])
    // setonHand('Ingredients on hand') line 35
  }

  function h2() {
    return (
      listOfIngredients.length != 0 && <h2>List of ingredients</h2>
    )
  }

  return (
    <main>
      <form action={submit} className="mainForm">
        <input type='text' placeholder="i.e bacon" name='ingredient' required></input>
        <button>+ Add Ingredients</button>
      </form>

      {/* <ul>{listOfIngredients.map(item => <li>{item}</li>)}</ul> */}
      {/* <h1>{listOfIngredients}</h1> */}
      {h2()}
      <ul>{listOfIngredients}</ul>
    </main>

  )
}