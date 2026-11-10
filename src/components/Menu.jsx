//mottar matrettene som props

import Dish from "./Dish";

// uses destructuring to access "meny" key directly
export default function Menu({ meny }) {
  //input:
  //const test = ["en", "to", "tre"];
  //----------------------------------------
  //map through:
  //   {test.map((tall) => (
  //         <h1>{tall}</h1>
  //       ))}
  //-----------------------------------------
  //output:
  //const arr = [<h1>en</h1>, <h1>to</h1>];
  //------------------------------------------

  return (
    <>
      <p>meny</p>
      {/* og viser dem i en liste. */}
      <div className="meny">
        {meny.map((rett) => (
          <Dish key={rett.id} {...rett} />
        ))}
      </div>
    </>
  );
}
