import { useState } from "react";
import img from "../assets/img.svg"
import { ClayCheckbox } from '@clayui/form';


const Search = () => {
  const [value, setValue] = useState(false);

  return (
    <div className="card-subscription">
      <div className="card-body">
        <div>
          <ClayCheckbox checked={value} onChange={() => setValue(val => !val)} />
        </div>
        <div className="img row d-flex justify-content-center mb-4">
          <img src={img}></img>
        </div>
        <div className="head-text row d-flex justify-content-center mb-1" type="text">
          Prodution
        </div>
        <div className="head-text-2 row d-flex justify-content-center" type="text">
          Instance size: 1
        </div>
        <div className="card-date row d-flex justify-content-center mb-4" type="text">
          05/01/2021 - 05/01/2024
        </div>
        <div class="badge-card-subscription d-flex justify-content-center">
          Active
        </div>
      </div>
    </div>
  )
}


export default Search;

