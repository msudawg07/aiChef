import { useState } from 'react'
import SendIngredients from "./SendIngredients"

export default function Main() {

  const [listOfIngredients, setListOfIngredients] = useState([])

  function submit(formData) {
    let ingredient = formData.get('ingredient')
    if(ingredient.startsWith(" ")) {
      alert('Must enter ingredient')
      return
    }
    setListOfIngredients(prev => [...prev, <li key={ingredient}>{ingredient}</li>])
  }


  return (
    <main>

      <form action={submit} className="mainForm">
        <input className='ingredientInput' type='text' placeholder="i.e bacon" name='ingredient' required></input>
        <button>+ Add Ingredients</button>
      </form>

      {listOfIngredients.length != 0 && <h2>List of ingredients</h2>}
      {listOfIngredients.length>0 && <ul>{listOfIngredients}</ul>}
      {listOfIngredients.length>3 && <SendIngredients ingredients={listOfIngredients}/>}

    </main>
  )
}





  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget)
  //   const ingredient = formData.get('ingredient')
  //   // setListOfIngredients((prev) => [...prev, ingredient])
  //   setListOfIngredients((prev) => [...prev, <li>{ingredient}</li>])
  // }