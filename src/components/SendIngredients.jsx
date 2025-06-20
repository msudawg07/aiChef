export default function SendIngredients(props) {
  return (
    <div className="sendIngMain">
      <div>
        <h2>Ready for recipe?</h2>
        <p>Generate a recipe from your list of ingredients.</p>
      </div>
      <button onClick={() => console.log(props.ingredients)} className='getRecipe'>Get a recipe</button>
    </div>
  )
}