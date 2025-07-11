import { useEffect, useState } from 'react'
import getRecipeFromMistral from '../ai.js'
import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props) {

  return (
    <div ref={props.ref}><ReactMarkdown>{props.recipe}</ReactMarkdown></div>
  )
}





