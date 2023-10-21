import React from "react";

export const Header = () => {
  return (
    <div>
       <table>
      <div className="container">
       
          <div class="row" >
            <div class="col-lg-6">
              <h1>Customer Detail:-</h1>
              <tr>
                <td>
                  <h3>Name</h3>
                </td>
                <td>
                  <input type="text" id="name" />
                </td>
              </tr>
              <tr>
                <td>
                  
                  <h3>Address</h3>
                </td>
                <td>
                  
                  <input type="text" id="address" />
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Mob.No</h3>
                </td>
                <td>
                
                  <input type="text" id="mobno" />
                </td>
              </tr>
            </div>
            <div class="col-lg-6">
              <h1>Invoice Detail:-</h1>
              <tr>
                <td>
                  <h3>Invoice No</h3>
                </td>
                <td>
                  <input type="text" id="invoice" />
                </td>
              </tr>
              <tr>
                <td>
                  
                  <h3>Date</h3>
                </td>
                <td>
                  
                  <input type="text"  id="date"/>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Vehicle No</h3>
                </td>
                <td>
                
                  <input type="text" id="vehicle" />
                </td>
              </tr>
            </div>
          </div>
       
      </div>
      </table>
    </div>
  );
};
