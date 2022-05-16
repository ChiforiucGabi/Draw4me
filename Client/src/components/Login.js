import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom"
import { UserContext } from "../App"
import styles from './style.css'
import M from "materialize-css"

const laClick = () => {
    document.querySelector('.cont').classList.toggle('s--signup');
}

setTimeout(() => {
    if (window.location.pathname === "/log/sign") {
        laClick();
    }
}, 30);

const Log = () => {
    // eslint-disable-next-line no-unused-vars
    const { state, dispatch } = useContext(UserContext)
    const history = useHistory()
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const signIn = () => {
        if (email === "admin" && password === "gabi") {
            localStorage.setItem("admin", true)
            history.push("/admin");
            window.location.reload();
            return;
        }

        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: 'Invalid email. Please try again!', classes: 'rounded #616161 grey darken-2' });
            return
        }
        if (!password) {
            M.toast({ html: 'Invalid password. Please try again!', classes: 'rounded #616161 grey darken-2' });
            return
        }

        fetch("/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password,
                email
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.error) {
                    M.toast({ html: data.error, classes: "#5c6bc0 indigo lighten-1" })
                }
                else {
                    localStorage.setItem("jwt", data.token)
                    localStorage.setItem("user", JSON.stringify(data.user))
                    dispatch({ type: "USER", payload: data.user })
                    M.toast({ html: 'Good to see u back, I missed you, friend :)', classes: 'rounded #616161 teal darken-2' });
                    history.push("/gallery");
                    window.location.reload();
                }
            }).catch(err => {
                console.log(err);
            })
    }

    const signUp = () => {

        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: 'Invalid email. Please try again!', classes: 'rounded #616161 grey darken-2' });
            return
        }
        if (!password) {
            M.toast({ html: 'Please set a password!', classes: 'rounded #616161 grey darken-2' });
            return
        }
        if (!userName) {
            M.toast({ html: 'Please pick a username!', classes: 'rounded #616161 grey darken-2' });
            return
        }

        fetch("/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: userName,
                password,
                email
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({ html: data.error, classes: "#5c6bc0 indigo lighten-1" })
                }
                else {
                    M.toast({ html: 'New account created, glad to be your friend :)', classes: 'rounded #616161 teal darken-2' });
                    history.push("/log");
                    window.location.reload();
                }
            }).catch(err => {
                console.log(err);
            })
    }

    const facebook = () => {
        history.push("/tabs");
    }

    return (
        <div style={styles}>
            <div className="cont">
                <div className="form sign-in">
                    <h2>Welcome back to my page :)</h2>
                    <label>
                        <span>Email</span>
                        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button type="button" className="submit" onClick={signIn}>Sign In</button>
                    <button type="button" className="fb-btn" onClick={facebook}>Connect with facebook</button>
                </div>
                <div className="sub-cont">
                    <div className="img">
                        <div className="img__text m--up">
                            <h2>New here?</h2>
                            <p>Sign up and discover great amount of new opportunities!</p>
                            <p>I want us to be friends :)</p>
                        </div>
                        <div className="img__text m--in">
                            <h2>One of my buddies?</h2>
                            <p>If you already have an account, just sign in. I've missed you!</p>
                        </div>
                        <div className="img__btn" onClick={laClick}>
                            <span className="m--up">Sign Up</span>
                            <span className="m--in">Sign In</span>
                        </div>
                    </div>
                    <div className="form sign-up">
                        <h2>Time to feel like home,</h2>
                        <label>
                            <span>Name</span>
                            <input type="text" placeholder="pick username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                        </label>
                        <label>
                            <span>Email</span>
                            <input type="email" placeholder=" enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label>
                            <span>Password</span>
                            <input type="password" placeholder="set password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <button type="button" className="submit" onClick={signUp}>Sign Up</button>
                        <button type="button" className="fb-btn" onClick={facebook}>Join with facebook</button>
                    </div>
                </div>
            </div>
            <a href="https://www.instagram.com/whispersfromthedark/" target="_blank" className="icon-link icon-link--insta" rel="noreferrer">
                <img alt="img" src="https://i.pinimg.com/originals/66/41/c9/6641c94e15a0be37af49a4250386c03e.png" />
            </a>
            <a href="https://www.facebook.com/gabriela.chiforiuc" target="_blank" className="icon-link" rel="noreferrer">
                <img alt="img" src="https://i.pinimg.com/originals/b3/26/b5/b326b5f8d23cd1e0f18df4c9265416f7.png" />
            </a>
        </div>
    )
}

export default Log