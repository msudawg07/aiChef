import { useState, useRef, useEffect } from 'react'
import SendIngredients from "./SendIngredients"
import ClaudeRecipe from "./ClaudeRecipe"
import getRecipeFromMistral from '../ai.js'

export default function Main() {

  const [listOfIngredients, setListOfIngredients] = useState([])
  const [clickGetRecipe, setClickGetRecipe] = useState(false)
  const [recipe, setRecipe] = useState('')
  const recipeSection = useRef(null)

  function submit(formData) {
    let ingredient = formData.get('ingredient')
    if(ingredient.startsWith(" ")) {
      alert('Must enter ingredient')
      return
    }
    setListOfIngredients(prev => [...prev, ingredient])
  }

  function fetchRecipe() {
    getRecipeFromMistral(listOfIngredients)
    .then(res => setRecipe(res))
  }

  useEffect(() => {
    if(recipe && recipeSection.current != null) {
        recipeSection.current.scrollIntoView({behavior: 'smooth'})
    }
  },[recipe])


  return (
    <main>

      <form action={submit} className="mainForm">
        <input className='ingredientInput' type='text' placeholder="i.e bacon" name='ingredient' required></input>
        <button>+ Add Ingredients</button>
      </form>

      {listOfIngredients.length != 0 && <h2>List of ingredients</h2>}
      {listOfIngredients.length>0 && <ul>{listOfIngredients.map(i => <li key={i}>{i}</li>)}</ul>}
      {listOfIngredients.length>3 && <SendIngredients ingredients={listOfIngredients} fetchRecipe={fetchRecipe}/>}
      {recipe != '' && <ClaudeRecipe recipe={recipe} ref={recipeSection}/>}
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