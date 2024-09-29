import "./App.css"
import Iten from "./iten"
import bolo from "./assets/menuitens/bolo-chocolate.jpg"
import donut from "./assets/menuitens/donut-morango.jpg"
import redemoinho from "./assets/menuitens/cafe-redemoinho.jpg"
import amor from "./assets/menuitens/cafe-amor-doce.jpg"
import cha from "./assets/menuitens/cha.jpg"

function App() {

  let listAll = [
    {
      id: 1,
      type: "coffee",
      name: "Amor doce",
      img: [amor,"um cafe para aquele que ama"],
    },
    {
      id: 2,
      type: "coffee",
      name: "redemoinho",
      img: [redemoinho,"um cafe cheio de emoção"],
    },
    {
      id: 3,
      type: "dessert",
      name: "Bolo de chocolate",
      img: [bolo,"um bolo de chocolate"],
    },
    {
      id: 4,
      type: "dessert",
      name: "donut de chocolate",
      img: [donut,"um donut de chocolate"],
    },
    {
      id: 5,
      type: "other",
      name: "cha da calmaria",
      img: [cha,"um cha apaziguador"],
    },
  ]

  let listCoffee = []
  let listDesserts = []
  let listOthers = []

  listAll.forEach(iten => {
    if (iten.type == "coffee") {
      listCoffee.push(<Iten itenId={iten.id} itenName={iten.name} itenImg={iten.img} />)
    } else if (iten.type == "dessert") {
      listDesserts.push(<Iten itenId={iten.id} itenName={iten.name} itenImg={iten.img} />)
    } else if (iten.type == "other") {
      listOthers.push(<Iten itenId={iten.id} itenName={iten.name} itenImg={iten.img} />)
    }
  })
  
  return (
    <>
      <header className="header">
        <button className="return"><a className="material-symbols-outlined" href="./index.hmtl">arrow_back</a></button>
        <h1>cardapio</h1>
        <ul>
          <li><a href="#coffee">Café</a></li>
          <li><a href="#desserts">Sobremesas</a></li>
          <li><a href="#others">Outros</a></li>
        </ul>
      </header>
      <div className="bg-img"></div>
      <main className="main-container">
        <div>
          <section id="coffee" className="coffee menu-section">
            <h2>cafés</h2>
            <div id="coffee-container">
              {listCoffee}
            </div>
          </section>
          <section id="desserts" className="desserts menu-section">
            <h2>Sobremesas</h2>
            <div id="desserts-container">
              {listDesserts}
            </div>
          </section>
          <section id="others" className="others menu-section">
            <h2>outros</h2>
            <div id="others-container">
              {listOthers}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
