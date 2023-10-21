import React, { useState } from 'react'

export const ProductList = (props) => {
 
  return (


<tr className='plist'>
<td>{props.count}</td>
    <td>{props.product}</td>
    <td>{props.qty}</td>
    <td>{props.rate}</td>
    <td>{props.basic}</td>
    <td>{props.disper}</td>
    <td>{props.disvalue}</td>
    <td>{props.nettot}</td>
    
</tr>







  )
}
