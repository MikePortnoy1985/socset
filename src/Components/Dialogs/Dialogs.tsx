import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogItemType, MessageItemType} from "../redux/state";

type DialogsPropsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
}

const Dialogs = (props:DialogsPropsType) => {

    const dialogItems = props.dialogs.map((p:DialogItemType) => <DialogItem name={p.name} id={p.id}/>)

    const messagesElements = props.messages.map((p:MessageItemType) => <Message message={p.message}/>)

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogItems}
            </div>
            <div className={classes.Messages}>
                {messagesElements}
            </div>
        </div>
    )
};


export default Dialogs;