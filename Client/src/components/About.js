import React from 'react'
import M from "materialize-css"

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
    console.log(instances.elems);
});

const About = () => {
    return (
        <div>
            <div class="row forCard">
                <div class="col s12 m6">
                    <div class="card #616161 grey darken-2">
                        <div class="card-content wheat-text">
                            <span class="card-title">Chiforiuc Gabriela</span>
                            <p>Hello, I am gald to see u here. I am a simple artist, but I like to make people happy. If u see something u like here, please contact me and let's  work together :)</p>
                            <p>I want to make the perfect drawing for you, so let's share some details.</p>
                        </div>
                        <div class="card-action">
                            <a href="https://www.facebook.com/">Find me on facebook</a>
                            <a href="/contact">Complete the form</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chip" tabindex="0">FAQ :)<i class="material-icons close">close</i></div>
            <div class="chip" tabindex="0">Story<i class="material-icons close">close</i></div>
            <div class="chip" tabindex="0">My work<i class="material-icons close">close</i></div>
            <div class="chip" tabindex="0">Prices<i class="material-icons close">close</i></div>
            <div>
                <ul class="collapsible">
                    <li>
                        <div class="collapsible-header #616161 grey darken-2"><i class="material-icons">face</i>Who am I?</div>
                        <div class="collapsible-body">
                            <div>First of all, I am a student and this page is my college project.</div>
                            <div>I also like to draw and I like to use this hobby of mine to do something usefull.</div>
                            <div>I like to work with people and I like to help them materialize their ideas, and to bring out the artist inside them.</div>
                            <div>So I wanted to create a page where they can feel free to enjoy some of my projects, and also be a part of them.</div>
                            <div>So on this site, you can buy your own personalised art. You can create your tatto, your anime character, an inovative portret, or just make some cute sickers, pins or tshirts with your logo.</div>
                            <div>You can be the mind, and I am the artist, always here to help.</div>
                            <div>So if u like my ideea, please create an account, let's become friends and start working on some cool art stuff:)</div>
                            <div>I am waiting for u.</div>
                        </div>
                    </li>
                    <li>
                        <div class="collapsible-header #616161 grey darken-2"><i class="material-icons">format_color_fill</i>What do I do?</div>
                        <div class="collapsible-body">
                            <div>So what do I do?</div>
                            <div>I am a student so I bassically study all day long, but I need an escape sometimes. So I like to draw.</div>
                            <div>I used to draw a lot of creepy stuff, but I recently found out I like to draw for people.</div>
                            <div>So when I started  digital art, I wanted to do more than just play around with my thoughts.</div>
                            <div>That's how I decided I wanted to draw for people. You tell me what you want, and I can make it for you.</div>
                            <div>Some people may not have the means to do it, but I know a lot of people have great ideas. So I like to help them see it done.</div>
                            <div>They have a drawing in mind, and I help them mahe it into a drawing, a pin, a sticker, anything they need.</div>
                            <div>I do it for fun, and it makes me happy, but I would also like to get paid for my time and effort. This is why I sell them here.</div>
                        </div>
                    </li>
                    <li>
                        <div class="collapsible-header #616161 grey darken-2"><i class="material-icons">monetization_on</i>My prices table</div>
                        <div class="collapsible-body">
                            <div class="col s12">
                                <table class="responsive-table centered">
                                    <thead>
                                        <tr>
                                            <th>Size</th>
                                            <th>Size (mm)</th>
                                            <th>Medium*</th>
                                            <th>Free Photoshoot</th>
                                            <th>Free postage</th>
                                            <th>Single animal</th>
                                            <th>Additional animals</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan="3">A5</td>
                                            <td rowSpan="3">148 x 210</td>
                                            <td >Digital</td>
                                            <td><i class="material-icons">check</i></td>
                                            <td><i class="material-icons">clear</i></td>
                                            <td>from $20</td>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <td>Pencil</td>
                                            <td><i class="material-icons">check</i></td>
                                            <td><i class="material-icons">check</i></td>
                                            <td>from $28</td>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <td>TattooStyle</td>
                                            <td><i class="material-icons">check</i></td>
                                            <td><i class="material-icons">clear</i></td>
                                            <td>from $30</td>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan="3">A4</td>
                                            <td rowSpan="3">210 x 297</td>
                                            <td >Digital</td>
                                            <td><i class="material-icons">check</i></td>
                                            <td><i class="material-icons">clear</i></td>
                                            <td>from $39</td>
                                            <td>+ 20$</td>
                                        </tr>
                                        <tr>
                                            <td>Pencil</td>
                                            <td><i class="material-icons">check</i></td>
                                            <td><i class="material-icons">check</i></td>
                                            <td>from $45</td>
                                            <td>+ 25$</td>
                                        </tr>
                                        <tr>
                                            <td>TattooStyle</td>
                                            <td><i class="material-icons">check</i></td>
                                            <td><i class="material-icons">clear</i></td>
                                            <td>from $35</td>
                                            <td>+15$</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan="3">A3</td>
                                            <td rowSpan="3">297 x 420</td>
                                            <td >Digital</td>
                                            <td><i class="material-icons">check</i></td>
                                            <td><i class="material-icons">clear</i></td>
                                            <td>from $50</td>
                                            <td>+ 30$</td>
                                        </tr>
                                        <tr>
                                            <td>Pencil</td>
                                            <td><i class="material-icons">check</i></td>
                                            <td><i class="material-icons">check</i></td>
                                            <td>from $58</td>
                                            <td>+ 35$</td>
                                        </tr>
                                        <tr>
                                            <td>TattooStyle</td>
                                            <td><i class="material-icons">check</i></td>
                                            <td><i class="material-icons">clear</i></td>
                                            <td>from $48</td>
                                            <td>+ 27$</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan="3">A2</td>
                                            <td rowSpan="3">420 x 594</td>
                                            <td >Digital</td>
                                            <td><i class="material-icons">check</i></td>
                                            <td><i class="material-icons">clear</i></td>
                                            <td>from $75</td>
                                            <td>+ 40$</td>
                                        </tr>
                                        <tr>
                                            <td>Pencil</td>
                                            <td><i class="material-icons">check</i></td>
                                            <td><i class="material-icons">clear</i></td>
                                            <td>from $80</td>
                                            <td>+ 35$</td>
                                        </tr>
                                        <tr>
                                            <td>TattooStyle</td>
                                            <td><i class="material-icons">check</i></td>
                                            <td><i class="material-icons">clear</i></td>
                                            <td>from $77</td>
                                            <td>+ 25$</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan="3">A1</td>
                                            <td rowSpan="3">594 x 841</td>
                                            <td >Digital</td>
                                            <td><i class="material-icons">check</i></td>
                                            <td><i class="material-icons">clear</i></td>
                                            <td>from $99</td>
                                            <td>+ 40$</td>
                                        </tr>
                                        <tr>
                                            <td>Pencil</td>
                                            <td><i class="material-icons">check</i></td>
                                            <td><i class="material-icons">clear</i></td>
                                            <td>from $120</td>
                                            <td>+ 45$</td>
                                        </tr>
                                        <tr>
                                            <td>TattooStyle</td>
                                            <td><i class="material-icons">check</i></td>
                                            <td><i class="material-icons">clear</i></td>
                                            <td>from $110</td>
                                            <td>+ 30$</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan="3">Client Size</td>
                                            <td rowSpan="3">By request</td>
                                            <td >Digital</td>
                                            <td><i class="material-icons">clear</i></td>
                                            <td><i class="material-icons">clear</i></td>
                                            <td>from $20</td>
                                            <td>quote</td>
                                        </tr>
                                        <tr>
                                            <td>Pencil</td>
                                            <td><i class="material-icons">clear</i></td>
                                            <td><i class="material-icons">clear</i></td>
                                            <td>from $30</td>
                                            <td>quote</td>
                                        </tr>
                                        <tr>
                                            <td>TattooStyle</td>
                                            <td><i class="material-icons">clear</i></td>
                                            <td><i class="material-icons">clear</i></td>
                                            <td>from $25</td>
                                            <td>quote</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About