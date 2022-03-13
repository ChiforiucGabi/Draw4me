import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import M from "materialize-css"

const Admin = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('/allorders', {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    }).then(res => res.json())
      .then(result => {
        setData(result.form)
        console.log(result.form)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (localStorage.getItem("admin") === "true") {
    return (
      <div className="theOrders" align="center">
        <h3>All orders</h3>
        {
          data.map(item => {
            return (
              <div>
                <p>Order number: {item._id}</p><br />
                <p>First Name: {item.firstName}</p><br />
                <p>Last Name: {item.lastName}</p><br />
                <p>Email: {item.email}</p><br />
                <p>Themes: {item.themes}</p><br />
                <p>Date due: {item.dateDue}</p><br />
                <p>Style: {item.style}</p><br />
                <p>Background: {item.background}</p><br />
                <p>Size: {item.size}</p><br />
                <p>Budget: {item.budget}</p><br />
                <p>Message for me: {item.message}</p><br />
                <img src={item.file} alt="img" className="image" width="600"></img><br /><br /><br /><br />
              </div>
            )
          })
        }
        <button type="button" className="submit" onClick={() => {
                    localStorage.clear();
                    M.toast({ html: 'Ok, DONE :)', classes: 'rounded #616161 grey darken-2' });
                    window.location.reload();
                }}>Log out from admin</button>
      </div >
    )
  }
  else {
    return (
      <div align="center">
        <h2>YOU ARE NOT ADMIN!</h2>
        <img alt="img" src="https://res.cloudinary.com/gabitze/image/upload/v1622107766/err_adtuje.png" width="600"></img>
      </div>
    )
  }

}

export default Admin