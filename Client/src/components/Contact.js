import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import styles from './contact.css'
import M from "materialize-css"
const Contact = () => {
    const history = useHistory()
    const [nume, setNume] = useState("")
    const [email, setEmail] = useState("")
    const [mesaj, setMesaj] = useState("")
    const sendMess = () => {

        if (!nume) {
            M.toast({ html: 'Enter your name. Please!', classes: 'rounded #616161 grey darken-2' });
            return
        }

        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: 'Invalid email. Please try again!', classes: 'rounded #616161 grey darken-2' });
            return
        }

        if (!mesaj) {
            M.toast({ html: 'Enter some message. Please!', classes: 'rounded #616161 grey darken-2' });
            return
        }

        M.toast({ html: 'Thank you, friend :) I will reach you soon', classes: 'rounded #616161 grey darken-2' });
        history.push("/tabs");
    }

    return (
        <div style={styles}>
            <div id="tot">o
                <section id="hire">
                    <h1>Contact Me :)</h1>
                    <form>
                        <div class="field name-box">
                            <input type="text" id="name" placeholder="Who Are You?" value={nume} onChange={(e) => setNume(e.target.value)} />
                            <label for="name">Name</label>
                            <span class="ss-icon">check</span>
                        </div>

                        <div class="field email-box">
                            <input type="text" id="email" placeholder="name@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label for="email">Email</label>
                            <span class="ss-icon">check</span>
                        </div>

                        <div class="field msg-box">
                            <textarea id="msg" class="materialize-textarea" placeholder="Tell what u need to know" value={mesaj} onChange={(e) => setMesaj(e.target.value)}></textarea>
                            <label for="msg">Msg</label>
                            <span class="ss-icon">check</span>
                        </div>

                        <input class="button" type="submit" onClick={sendMess} value="Send" />
                    </form>
                </section>
                <div class="mapouter">
                    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                    <div class="gmap_canvas"><iframe width="574" height="583" id="gmap_canvas" src="https://maps.google.com/maps?q=suceava&t=&z=9&ie=UTF8&iwloc=&output=embed" scrolling="no"></iframe><a href="https://123movies-to.org">h</a><br />
                        <a href="https://www.embedgooglemap.net">embed google map in web page</a>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Contact