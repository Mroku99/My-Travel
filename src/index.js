import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import data from './data'
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';


function App() {
    const cardData = data.map(info => {
        return (
            <Card {...info}/>
        )
    })

    return (
        <div className='app'>
            <Navbar />
            {cardData}
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

