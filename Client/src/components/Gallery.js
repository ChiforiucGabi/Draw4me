import React, { useState, useEffect } from 'react'
import M from "materialize-css"

const closeFct = () => {
    var e = document.getElementById('infoText');
    if (e !== null) {
        e.style.display = 'none';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelectorAll('.carousel');
    M.Carousel.init(carousel, {
        fullWidth: false,
        indicators: true,
    });

    let indicatorItems = document.querySelectorAll('.carousel .indicator-item');
    setInterval(() => {
        indicatorItems.forEach(el => {
            if (el.classList.contains("active")) {
                var sib = el.nextElementSibling;
                if (sib == null) {
                    indicatorItems[1].click();
                } else {
                    sib.click();
                }
            }
        });
    }, 3000);
});
const Gallery = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/allImg', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                setData(result.poze)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    var links = []
    var ids = []
    if (data[0] !== undefined) {
        // eslint-disable-next-line array-callback-return
        data.map(item => {
            links.push(item.link)
            ids.push(item._id)
        })
    }

    if (links !== []) {
        return (
            <div>
                <div id="infoText">
                    <button id="close" onClick={closeFct}>X</button>
                    <p>Hello, I'm glad to see you on my page :) I run a small business and I want to make you happy. </p>
                    <p>Do you want to get a tattoo? Do you need a new, fresh design, made just for u?  </p>
                    <p>I think I can help :) I like to draw a lot of interesting things and I want to include your preferences as well.  </p>
                    <p>So if you find something that you like here, just let me know. I prepared a form for you and we are ready to go :) </p>
                </div>
                <h3 className="gallH3">My latest release</h3>
                <div className="carousel gall">
                    <a className="carousel-item" href={"#" + ids[0]}><img alt="img" src={links[0]} /></a>
                    <a className="carousel-item" href={"#" + ids[1]}><img alt="img" src={links[1]} /></a>
                    <a className="carousel-item" href={"#" + ids[2]}><img alt="img" src={links[2]} /></a>
                    <a className="carousel-item" href={"#" + ids[3]}><img alt="img" src={links[3]} /></a>
                    <a className="carousel-item" href={"#" + ids[4]}><img alt="img" src={links[4]} /></a>
                    <a className="carousel-item" href={"#" + ids[5]}><img alt="img" src={links[5]} /></a>
                </div>

                <h3 className="gallH3">On the darker side of things...</h3>
                <div className="carousel gall">
                    <a className="carousel-item" href={"#" + ids[6]}><img alt="img" src={links[6]} /></a>
                    <a className="carousel-item" href={"#" + ids[7]}><img alt="img" src={links[7]} /></a>
                    <a className="carousel-item" href={"#" + ids[8]}><img alt="img" src={links[8]} /></a>
                    <a className="carousel-item" href={"#" + ids[9]}><img alt="img" src={links[9]} /></a>
                    <a className="carousel-item" href={"#" + ids[10]}><img alt="img" src={links[10]} /></a>
                </div>

                <a href="#1" className="lightbox trans" id={ids[0]}><img alt="img" src={links[0]} /></a>
                <a href="#2" className="lightbox trans" id={ids[1]}><img alt="img" src={links[1]} /></a>
                <a href="#3" className="lightbox trans" id={ids[2]}><img alt="img" src={links[2]} /></a>
                <a href="#4" className="lightbox trans" id={ids[3]}><img alt="img" src={links[3]} /></a>
                <a href="#5" className="lightbox trans" id={ids[4]}><img alt="img" src={links[4]} /></a>
                <a href="#6" className="lightbox trans" id={ids[5]}><img alt="img" src={links[5]} /></a>
                <a href="#7" className="lightbox trans" id={ids[6]}><img alt="img" src={links[6]} /></a>
                <a href="#8" className="lightbox trans" id={ids[7]}><img alt="img" src={links[7]} /></a>
                <a href="#9" className="lightbox trans" id={ids[8]}><img alt="img" src={links[8]} /></a>
                <a href="#10" className="lightbox trans" id={ids[9]}><img alt="img" src={links[9]} /></a>
                <a href="#11" className="lightbox trans" id={ids[10]}><img alt="img" src={links[10]} /></a>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

export default Gallery