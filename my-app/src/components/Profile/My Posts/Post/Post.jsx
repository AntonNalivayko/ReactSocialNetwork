import React from 'react';
import s from './Post.module.css';


const Post = (props) => {



    return (
        < div className={s.content}>

            <div className={s.item}>
                <img src='https://sun9-5.userapi.com/impf/dZC2gt15_cD5mfWhn3UpDCw4v56DPCgPqD0TPQ/Vhvo2rvWH0M.jpg?size=810x1080&quality=96&sign=4f2551e1705d0bf49245aa51e0ff4145&type=album' />
                {props.message}
                <div>
                    <span>Like</span>
                </div>
            </div>    
        </ div>
    )
}
export default Post;       