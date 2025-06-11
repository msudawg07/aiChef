import chefIMG from '../assets/chefIMG.jpg'

export default function Header() {
  return (
    <header>
        <img src={chefIMG} />
        <h1>Chef Claude</h1>
    </header>
  )
}