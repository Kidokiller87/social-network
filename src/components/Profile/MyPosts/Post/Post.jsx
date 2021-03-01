import React from "react";
import s from './Post.module.css';

const Post = (props) => {


    return <div className={s.item}>
        <img src='https://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Doll-icon.png' />
                    {props.message}
                    <div>
            <span>likes</span> {props.likesCount}
        </div >
    </div>

}

export default Post;