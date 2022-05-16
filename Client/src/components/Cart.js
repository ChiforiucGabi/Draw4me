import React, { useState } from 'react'



const Cart = () => {

    const [visible, setVisible] = useState(true)
    const [visible2, setVisible2] = useState(true)
    const [price, setPrice] = useState(80)

    const toggleVisible = () => {
        setVisible(!visible)
        setPrice(price - 65)
    }

    const toggleVisible2 = () => {
        setVisible2(!visible2)
        setPrice(price - 15)
    }

    return (
        <div style={{ display: "flex", textAlign: "center", alignSelf: "center" }}>
            <div style={{ display: "inline-block", padding: "2%", marginLeft: "40rem", maxWidth: "20%" }}>

                {
                    visible ?
                        <div class="col s12 m7" style={{ marginBottom: "1rem" }}>
                            <div class="card" style={{ width: "20rem", margin: "auto" }}>
                                <div class="card-image">
                                    <img src="https://res.cloudinary.com/gabitze/image/upload/v1646210323/1_ttop6s.png" alt="" />

                                </div>
                                <div class="card-content" style={{ maxHeight: "5rem" }} >
                                    <p>Nepenthe</p>
                                    <p>Pret: 65$</p>
                                </div>
                                <div class="card-action" style={{ minHeight: "5rem" }}>
                                    <button type="button" className='btn' style={{ float: "right" }} onClick={toggleVisible}>Remove</button>
                                </div>
                            </div>
                        </div>
                        :
                        <></>}

                {
                    visible2 ?
                        <div class="col s12 m7">
                            <div class="card" style={{ width: "20rem", margin: "auto" }}>
                                <div class="card-image">
                                    <img src="https://res.cloudinary.com/gabitze/image/upload/v1646210931/035_tov1um.png" alt="" />
                                </div>
                                <div class="card-content" style={{ maxHeight: "5rem" }} >
                                    <p>Disease</p>
                                    <p>Pret: 15$</p>
                                </div>
                                <div class="card-action" style={{ minHeight: "5rem" }}>
                                    <button type="button" className='btn' style={{ float: "right" }} onClick={toggleVisible2}>Remove</button>
                                </div>
                            </div>
                        </div> :
                        <></>
                }
            </div>

            <div style={{ display: "inline-block", paddingTop: "2%", maxWidth: "40%" }}>
                <div class="col s12 m6" style={{ marginRight: "1rem", marginLeft: "10rem", marginTop: "12rem" }}>
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Totalul comenzii</span>
                            <p>Cost momentan : {price}$</p>
                            <p>Livrare: 10$</p>
                            <hr></hr>
                            <p style={{ marginTop: "1rem" }}>Total: {price + 10}$</p>
                        </div>
                        <div class="card-action">
                            <button type="button" className='btn' style={{ margin: "auto" }}>Go to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cart