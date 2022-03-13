import React, { useState, useContext } from 'react'
import { UserContext } from "../App"
import { useHistory } from "react-router-dom"
import M from "materialize-css"

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.chips');
  var instances = M.Chips.init(elems);
  console.log(instances.elems);
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems, 'defaultDate');
  console.log(instances.elems);
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
  console.log(instances.elems);

});

const TheForm = () => {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(UserContext)
  const history = useHistory()
  const [firstName, setfirstName] = useState(JSON.parse(localStorage.getItem("user")).name)
  const [lastName, setlastName] = useState(JSON.parse(localStorage.getItem("user")).name)
  const [email, setEmail] = useState(JSON.parse(localStorage.getItem("user")).email)
  const [dateDue, setdateDue] = useState("")
  const [themes, setthemes] = useState("")
  const [style, setstyle] = useState("")
  const [background, setbackground] = useState("")
  const [size, setsize] = useState("")
  const [budget, setbudget] = useState("")
  const [file, setfile] = useState("")
  const [message, setmessage] = useState("")

  const sendForm = () => {
    const data = new FormData()
    data.append("file", file)
    data.append("upload_preset", "insta-clone")

    fetch("https://api.cloudinary.com/v1_1/gabitze/image/upload", {
      method: "post",
      body: data
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.url)
        fetch("/saveForm", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("jwt")
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            themes,
            dateDue,
            style,
            background,
            size,
            budget,
            file: data.url,
            message
          })
        }).then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.error) {
              M.toast({ html: data.error, classes: "#5c6bc0 indigo lighten-1" })
            }
            else {
              M.toast({ html: "Thank you for your order :)", classes: "#26a69a teal lighten-1" })
              history.push("/about");
            }
          }).catch(err => {
            console.log(err);
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="theForm">
      <div className="banner">
        <h3>Please tell me all your preferences :)</h3>
      </div>
      <div className="name-item">
        <div>
          <label htmlFor="name">Fisrt name<span>*</span></label>
          <input type="text" name="name" placeholder="First" value={firstName} onChange={(e) => setfirstName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="name">Last name<span>*</span></label>
          <input type="text" name="name" placeholder="Last" value={lastName} onChange={(e) => setlastName(e.target.value)} />
        </div>
      </div>
      <div className="item">
        <label htmlFor="email">Email<span>*</span></label>
        <input id="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="item">
        <label htmlFor="bdate">I need this done by:<span>*</span></label>
        <input id="pickDate" type="text" className="datepicker" value={dateDue} onSelect={(e) => setdateDue(e.target.value)}></input>
        <i className="fas fa-calendar-alt"></i>
      </div><br />
      <div className="chips chips-initial input-field">
        <p>Select some themes for your drawing, key word, etc. Just type and press enter</p><br />
        <div className="chip" tabIndex="0">Dark<i className="material-icons close">close</i></div>
        <div className="chip" tabIndex="0">Skulls<i className="material-icons close">close</i>
        </div><div className="chip" tabIndex="0">My Face<i className="material-icons close">close</i>
        </div><div className="chip" tabIndex="0">Small <i className="material-icons close">close</i></div>
        <div className="chip" tabIndex="0">Tattoo Style<i className="material-icons close">close</i></div>
        <input className="input" id="c260a6f7-3bbc-e6ca-2740-2ac5ac3ce0f9" placeholder="my themes" value={themes} onChange={(e) => setthemes(e.target.value)} />
      </div><br />
      <p>
        <label><input id="checkbox" type="checkbox" onClick={(e) => setstyle("Tattoo_Style")} /><span>Tatto Style</span></label>
        <label><input id="checkbox" type="checkbox" value={style} onClick={(e) => setstyle("My_Style")} /><span>My Style</span></label>
        <label><input id="checkbox" type="checkbox" value={style} onClick={(e) => setstyle("Glowstick_Style")} /><span>Glowstick Style</span></label>
      </p><br /><br />
      <div className="input-field col s12">
        <select value={background} onChange={(e) => setbackground(e.target.value)}>
          <option value="" defaultValue disabled>Choose a background</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="No background">No background</option>
        </select>
        <label>The background</label>
      </div><br /><br />
      <div className="input-field col s12">
        <select value={size} onChange={(e) => setsize(e.target.value)}>
          <option value="" defaultValue disabled >Choose the size</option>
          <option value="A5">A5</option>
          <option value="A4">A4</option>
          <option value="A3">A3</option>
          <option value="A2">A2</option>
          <option value="A1">A1</option>
          <option value="My canvas">My canvas</option>
        </select>
        <label>The Size</label>
      </div><br /><br />
      <div className="input-field col s12">
        <select value={budget} onChange={(e) => setbudget(e.target.value)}>
          <option value="" defaultValue disabled>Choose your budget</option>
          <option value="It doesn't matter">It doesn't matter</option>
          <option value="Less than 20$">Less than 20$</option>
          <option value="Less than 30$">Less than 30$</option>
          <option value="Less than 40$">Less than 40$</option>
          <option value="Less than 50$">Less than 50$</option>
          <option value="Less than 60$">Less than 60$</option>
          <option value="Less than 70$">Less than 70$</option>
          <option value="Less than 80$">Less than 80$</option>
          <option value="Less than 90$">Less than 90$</option>
        </select>
        <label>Your expected price </label>
      </div><br /><br />
      <form action="#">
        <div className="file-field input-field">
          <div className="btn">
            <span>File</span>
            <input type="file" onChange={(e) => setfile(e.target.files[0])} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" placeholder="give me a refference" />
          </div>
        </div>
      </form><br />
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <textarea id="textarea1" className="materialize-textarea" value={message} onChange={(e) => setmessage(e.target.value)}></textarea>
              <label htmlFor="textarea1">Tell me more about it. What did I miss?</label>
            </div>
          </div>
        </form>
      </div><br />
      <div className="sendOrder">
        <button className="order" type="submit" onClick={sendForm}>Send my Order</button>
      </div><br />
    </div>
  )
}

export default TheForm