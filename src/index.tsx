import React from 'react';
import ReactDom from 'react-dom';
import Hello from '../modules/hello';
import catPic from '/assets/cat.jpg';
import './index.css';
const Home = () => {

    // function animate() {
    //     document.getElementById('catimg')?.classList.toggle('animation')
    // }

    return (
    <>
        <h1>
            Let's Play A Game!
        </h1>
        {/* <a href="#" onClick={animate}> */}
            <div className="cat-container">
                <img src={catPic} className="cat" id="catimg" />
            </div>
        {/* </a> */}
        <Hello />

    </>
    )

}

ReactDom.render(<Home />, document.getElementById('root'));