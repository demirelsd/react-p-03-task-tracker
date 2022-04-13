import { version, useId } from "react";

export default function UseIds() {
   const ID = useId();
   const type = typeof ID;
   console.log(ID);
return (
  <div >
     <p> Reactjs version : {version} </p>
     <h1> Id: {ID} and type of Id is: {type} </h1>
  </div>
);
}