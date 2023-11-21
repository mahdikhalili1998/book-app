import React from "react";
import { books } from "../constants/mockData";
import Carditem from "./Carditem";
function Bookcard() {
  return (
    <div>
      <div>
        {books.map((item) => (
          <Carditem data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Bookcard;
