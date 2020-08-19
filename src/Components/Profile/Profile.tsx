import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import {PostItemType} from "../redux/state";

type ProfilePropsType = {
    posts:Array<PostItemType>
    addPost: (postMessage: string) => void
}

const Profile = (props:ProfilePropsType) => {
    return(
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;