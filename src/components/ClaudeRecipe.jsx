import { useEffect, useState } from 'react'
import getRecipeFromMistral from '../ai.js'
import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props) {

  return (
    <div><ReactMarkdown>{props.recipe}</ReactMarkdown></div>
  )
}





