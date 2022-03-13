import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import M from "materialize-css"
const Manage = () => {
    const history = useHistory()
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [unserName, setUserName] = useState("")
    const signUp = () => {

        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: 'Invalid email. Please try again!', classes: 'rounded #616161 grey darken-2' });
            return
        }
        if (!password) {
            M.toast({ html: 'Please set a password!', classes: 'rounded #616161 grey darken-2' });
            return
        }
        if (!unserName) {
            M.toast({ html: 'Please pick a username!', classes: 'rounded #616161 grey darken-2' });
            return
        }
        M.toast({ html: 'Your info has been updated :)', classes: 'rounded #616161 teal darken-2' });
        history.push("/about");
    }

    return (
        <div>
            <h2>Hello friend. You can refresh any data of your profile here :)</h2>
            <div className="manage">
                <label>
                    <span>Change your username?</span>
                    <input type="text" placeholder="pick new username" value={unserName} onChange={(e) => setUserName(e.target.value)} />
                </label><br/>
                <label>
                    <span>Change your email?</span>
                    <input type="email" placeholder=" enter new email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label><br/>
                <label>
                    <span>Change your password?</span>
                    <input type="password" placeholder="set new password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="button" className="submit" id="saveBtn" onClick={signUp}>Save</button>
            </div>
        </div>
    )
}

export default Manage