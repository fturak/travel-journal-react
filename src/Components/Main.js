import Card from "./Card"
import Data from "../Data"
export default function Main () {

    const cards = Data.map(card =>{
        return (
          <Card data={card} key={card.id}/>
        )
      });

    return (
        <section className="main">
            {cards}
        </section>
    )
}