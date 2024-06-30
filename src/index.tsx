import React from 'react';
import ReactDom from 'react-dom';
import Hello from '../modules/hello'

const Home = () => {



    return (
    <>
        <div>
            Hello World!
        </div>
        <Hello />

    </>
    )

}

ReactDom.render(<Home />, document.getElementById('root'));