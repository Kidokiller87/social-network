import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    return (
<div>
    My posts
            <div>

            <textarea>HELLO WORLD!</textarea>
            <button>Add post</button>
                   </div>
      <div className={s.posts}>
            
               <Post message='Hi, howe are you?' likes = '1'/>
               <Post message="It's my first post" likes = '2' />
               <Post />
               <Post />
               <Post />
               <Post />
        </div>
    </div>
) 
}

export default MyPosts;