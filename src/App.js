import React from 'react';
import './App.css';
import DadJoke from "./components/DadJoke";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <DadJoke />
            <script>
                require('renderer.js');
            </script>
        </div>
    );
}

export default App;
