import React, { useState } from "react";

export const AddProduct = (props) => {
  const[product,setproduct]=useState();
  const[qty,setqty]=useState();
  const[rate,setrate]=useState();
  const[basic,setbasic]=useState();
  const[disper,setdisper]=useState();
const[disvalue,setdisvalue]=useState();
const[nettot,setnettot]=useState();



const abc = () =>
{
  setbasic(qty*rate)
}
const stu =()=>{
  setdisvalue((basic*disper)/100)
}
const pqr=()=>{
  
  setnettot(basic-disvalue)
}

const savedata=()=>{
  
  let pdata={
    product:product,
    qty:qty,
    rate:rate,
    basic:basic,
    disper:disper,
    disvalue:disvalue,
    nettot:nettot
  }
  let calculate={
    qty:qty,
    basic:basic,
    disvalue:disvalue,
    nettot:nettot
  }
  console.log(pdata)
  props.AddProduct(pdata)
  props.sum(calculate)
setproduct("")
setqty("");
setrate("")
setbasic("")
setdisper("")
setdisvalue("")
setnettot("")
add();
}
 const add=()=>{
  
 }





  
  return (
    <div>
    
        <form  >
          <div className="container">
            <table border={1}>
              <tr>
                <td>
                <h3>Product</h3>
                  <input type="text" id="product" value={product} onChange={(a)=> setproduct(a.target.value)}/>
                </td>
                <td>
                  <h3>Qty</h3>
                  <input type="text" id="qty" value={qty} onChange={(a)=> setqty(a.target.value)} onKeyUp={abc}/>
                </td>
                <td>
                  <h3>Rate</h3>
                  <input type="text" id="rate" value={rate} onChange={(a)=> setrate(a.target.value)}  onKeyUp={abc}/>
                </td>
                <td>
                  <h3>Basic</h3>
                  <input type="text" id="basic"  value={basic} onKeyUp={pqr} readOnly  />
                                 </td>
                <td>
                  <h3>Dis%</h3>
                  <input type="text" id="disper"value={disper} onChange={(a)=> setdisper(a.target.value)}   onKeyUp={stu}  />
                </td>
                <td>
                  <h3>Dis value</h3>
                  <input type="text" id="disvalue"  value={disvalue}    onKeyUp={pqr}readOnly   />
                </td>
                <td>
                  <h3>Total</h3>
                  <input type="text" id="total"  value={nettot} readOnly/>
                </td>
              </tr>
              <td>
                <button type="button" onClick={savedata} >Add</button>
              </td>
            </table>
          </div>
        </form>
      </div>
  
  );
};
