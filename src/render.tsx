import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType} from "./Components/redux/state";



export let rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                AppState={state}
                addPost={addPost}
            />
        </React.StrictMode>,
        document.getElementById('root')
    )
}