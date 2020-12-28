import React from "react";
import s from './Post.module.css';

const Post = (props) => {


    return <div className={s.item}>
        <img src='https://i.pinimg.com/474x/ef/f2/8f/eff28fcb611aac099c3d1e72f6073da8.jpg' />
                    {props.message}
                    <div>
            <span>likes</span> {props.likes}
        </div >
    </div>

}

export default Post;