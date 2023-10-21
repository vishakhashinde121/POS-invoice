import React from 'react'

export const Footer = (props) => {
  return (
    <div className='footer'>
        <div className="clss">
        <table border={1}>
          <tr>
            <td>
              <h3>Qty</h3>
              <input type="text" value={props.pqty}/>
            </td>
            <td>
              <h3>Basic</h3>
              <input type="text" value={props.pbasic}/>
            </td>
            <td>
              <h3>Dis value</h3>
              <input type="text" value={props.pdisval}/>
            </td>
            <td>
              <h3>Net Total</h3>
              <input type="text" value={props.total}/>
            </td>
            
          </tr>
        </table>
      </div>
    </div>
  )
}
