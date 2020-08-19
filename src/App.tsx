import React from 'react';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import {StateType} from "./Components/redux/state";


type AppPropsType = {
    AppState: StateType
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}

const App = (props:AppPropsType) => {
  return (
      <BrowserRouter>
          <div className="App-wrapper">
              <Header/>
              <Navbar friends={props.AppState.sideBar.friends}/>
              <div className="app-wrapper-content">
                  <Route path='/dialogs' render={ () => <Dialogs dialogs={props.AppState.dialogsPage.dialogData} messages={props.AppState.dialogsPage.messageData}/>}/>
                  <Route path='/profile' render={ () => <Profile posts={props.AppState.profilePage.posts} newText={props.AppState.profilePage.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
