import React, { useState } from 'react'
import M from "materialize-css"




const AddDrawing = () => {

    const [imageFile, setImageFile] = useState(null)
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [keyWords, setkeyWords] = useState("0")
    const [image, setImage] = useState("")

    const upload = () => {

        setImageFile(null)
        setPrice(0)
        setDescription("")
        setkeyWords("")
        setImage("")

        M.toast({ html: "Drawing uploaded successfully", classes: 'rounded' })
    }


    return (
        <div style={{ margin: "auto", marginTop: "5rem", minHeight: "100vh", maxWidth: "40%" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img id="preview-image" src={image} alt="" style={{ maxWidth: "30%" }}></img>
            </div>
            <div className="file-field input-field">
                <div className="btn">
                    <span>Upload Drawing</span>


                    <input type="file" value={imageFile} onChange={(e) => {
                        if (e.target.files[0] === undefined) {
                            return
                        } else {
                            setImage(URL.createObjectURL(e.target.files[0]))
                        }
                    }} />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" placeholder="Upload the drawing" />
                </div>
            </div>

            <div class="row">
                <div class="col s12">
                    Select price:
                    <div class="input-field inline">
                        <input type="number" value={price} onChange={event => setPrice(event.value)} />
                    </div>
                    $ (dollars)
                </div>
            </div>

            <div class="row">
                <div class="col s12">
                    Write a few words about your art:

                    <textarea style={{ minHeight: "7rem" }} value={description} onChange={event => setDescription(event.value)} />
                </div>
            </div>

            <div class="row">
                <div class="col s12">
                    Enter key words for filters

                    <textarea value={keyWords} onChange={event => setkeyWords(event.value)} />
                </div>
            </div>

            <div class="row">
                <div class="col s12">
                    Select the category of the drawing:

                    <div>
                        <p style={{ marginRight: "1rem" }}>
                            <label>
                                <input class="with-gap" name="group1" type="radio" />
                                <span style={{ color: "black" }}>Tattoo</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input class="with-gap" name="group1" type="radio" />
                                <span style={{ color: "black" }}>Comission</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input class="with-gap" name="group1" type="radio" />
                                <span style={{ color: "black" }}>Glow</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input class="with-gap" name="group1" type="radio" />
                                <span style={{ color: "black" }}>Other</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <button className='btn' onClick={upload}>add drawing</button>
            </div>
        </div >
    )
}

export default AddDrawing;