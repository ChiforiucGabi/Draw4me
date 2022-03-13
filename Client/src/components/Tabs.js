/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
const Tabs = () => {

    const history = useHistory()
    const fav = () => {
        document.querySelector('.favourite').classList.toggle("favorite");
    }

    const displayAction = () => {
        var test = localStorage.getItem("user");
        if (test !== null) {
            return [
                <button className="favourite" type="submit" onClick={fav}><i className="material-icons">favorite_border</i></button>,
                <button className="favourite" type="submit" onClick={fav}><i className="material-icons">add_shopping_cart</i></button>
                //daca ete in lista de liked apare rosu
                //<button className="favourite" type="submit" onClick={fav}><i className="material-icons">favorite</i></button>
            ]
        } else {
            return [
            ]
        }
    }

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/allTabs', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                setData(result.tabs)
                console.log(data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="row">
            <div className="col s12">
                <ul className="tabs #616161 grey darken-2">
                    <li className="tab col s3"><a href="#tattoos">Tattoo Models</a></li>
                    <li className="tab col s3"><a href="#digital">Digital Art</a></li>
                    <li className="tab col s3"><a href="#comm">Commisions</a></li>
                    <li className="tab col s3"><a href="#other">Other</a></li>
                </ul>
            </div>
            <div className="col s12 tat" id="tattoos">
                <div align="center" className="galleryTatt">
                    <ul id="img">
                        {
                            data.map(item => {
                                if (item.category === "tattoo") {
                                    return (
                                        <a href={"#" + item._id}>
                                            <div className="container">
                                                <img src={item.link} alt="img" className="image" width="400"></img>
                                                <div className="middle">
                                                    <div className="text">Click now, and u can download my art :)</div>
                                                </div>
                                            </div><p>{item.title} - {item.pret}</p>{displayAction()}</a>
                                    )
                                }
                            })
                        }
                    </ul>
                    <div>o</div>
                    <div>o</div>
                    {
                        data.map(item => {
                            if (item.category === "tattoo") { return (<a href="#1" className="lightbox trans" id={item._id}><img alt="img" src={item.link} /></a>) }
                        })
                    }
                </div>
            </div>
            <div className="col s12 dig" id="digital">
                <div align="center" className="gallery">
                    <ul id="img">
                        {
                            data.map(item => {
                                if (item.category === "digital") {
                                    return (
                                        <a href={"#" + item._id}>
                                            <div className="container">
                                                <img src={item.link} alt="img" className="image" width="430"></img>
                                                <div className="middle">
                                                    <div className="text">Click now, and u can download my art :)</div>
                                                </div>
                                            </div><p>{item.title} - {item.pret}</p>{displayAction()}</a>
                                    )
                                }
                            })
                        }
                    </ul>
                    <div>o</div>
                    <div>o</div>
                    {
                        data.map(item => {
                            if (item.category === "digital") { return (<a href="#1" className="lightbox trans" id={item._id}><img alt="img" src={item.link} /></a>) }
                        })
                    }
                </div>
            </div>
            <div className="col s12 comm" id="comm">
                <div align="center" className="gallery">
                    <ul id="img">
                        {
                            data.map(item => {
                                if (item.category === "comm") {
                                    return (
                                        <a href={"#" + item._id}>
                                            <div className="container">
                                                <img src={item.link} alt="img" className="image" width="430"></img>
                                                <div className="middle">
                                                    <div className="text">Click now, and u can download my art :)</div>
                                                </div>
                                            </div><p>{item.title} - {item.pret}</p>{displayAction()}</a>
                                    )
                                }
                            })
                        }
                    </ul>
                    <div>o</div>
                    <div>o</div>
                    {
                        data.map(item => {
                            if (item.category === "comm") { return (<a href="#1" className="lightbox trans" id={item._id}><img alt="img" src={item.link} /></a>) }
                        })
                    }
                </div>
            </div>
            <div className="col s12 tat" id="other">
                <div align="center" className="gallery">
                    <ul id="img">
                        {
                            data.map(item => {
                                if (item.category === "other") {
                                    return (
                                        <a href="/contact">
                                            <div className="container">
                                                <img src={item.link} alt="img" className="image" width="400"></img>
                                                <div className="middle">
                                                    <div className="text">Click now, and contact me for any questions :)</div>
                                                </div>
                                            </div><p>{item.title} - {item.pret}</p></a>
                                    )
                                }
                            })
                        }
                    </ul>
                    <div>o</div>
                </div>
            </div>
        </div>
    )
}

export default Tabs