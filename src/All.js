import React from "react";
import { ProductList } from "./ProductList";
import { AddProduct } from "./AddProduct";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useState } from "react";

function All() {
  let mydatap = [];
  const [mydata, setmydata] = useState(mydatap);

  const [pqty, setpqty] = useState(0);
  const [pbasic, setpbasic] = useState(0);
  const [pdisval, setpdisval] = useState(0);
  const [ptotal, setptotal] = useState(0);
  const myaddproduct = (Mydata) => {
    const updata = [Mydata, ...mydata];
    setmydata(updata);
    console.log(updata);
  };
  const psum = (sum) => {
    setpqty(parseFloat(pqty) + parseFloat(sum.qty));
    setpbasic(parseFloat(pbasic) + parseFloat(sum.basic));
    setpdisval(parseFloat(pdisval) + parseFloat(sum.disvalue));
    setptotal(parseFloat(ptotal) + parseFloat(sum.nettot));
  };

  return (
    <div className="edit">
      <Header />
      <AddProduct AddProduct={myaddproduct} sum={psum} />
      <br></br>
      <br></br>
      <table border={2} className="table">
        <tr>
          <th>Sr No</th>
          <th>Product</th>
          <th>Qty</th>
          <th>Rate</th>
          <th>Basic</th>
          <th>Dis%</th>
          <th>Dis value</th>
          <th>Total</th>
        </tr>
        {mydata.map((el, index) => {
          return (
            <ProductList
              count={index + 1}
              product={el.product}
              qty={el.qty}
              rate={el.rate}
              basic={el.basic}
              disper={el.disper}
              disvalue={el.disvalue}
              nettot={el.nettot}
            />
          );
        })}
      </table>
      
      <Footer pqty={pqty} pbasic={pbasic} pdisval={pdisval} total={ptotal} />
    </div>
  );
}
export default All;
