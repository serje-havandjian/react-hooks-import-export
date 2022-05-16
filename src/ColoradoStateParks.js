import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde"
import * as AllVariables from "./parks/RockyMountain"

console.log(AllVariables.trees)
AllVariables.wildlife()
AllVariables.elevation()

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>
    <MesaVerde />
  </h1>;
}




export default ColoradoStateParks