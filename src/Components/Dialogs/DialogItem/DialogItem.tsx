import React from "react";
import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number
    name: string
}

const DialogItem = (props:DialogItemPropsType) => {
    let path = '/dialogs/'+props.id;
    return (
        <div className={classes.dialog+' '+classes.active}>
            <img className={classes.avatar} src='https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg' alt='missing avt'/>
            <NavLink to={path} key={props.id}>{props.name}</NavLink>
        </div>
    )
};


export default DialogItem;