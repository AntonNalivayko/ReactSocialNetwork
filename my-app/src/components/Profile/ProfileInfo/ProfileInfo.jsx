import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/preloader/preloader";
import ProfileStatus from './ProfileStatus.jsx';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        < div >
                <div className={s.imgProfile}>
                {/* <img src='https://sun9-5.userapi.com/impf/dZC2gt15_cD5mfWhn3UpDCw4v56DPCgPqD0TPQ/Vhvo2rvWH0M.jpg?size=810x1080&quality=96&sign=4f2551e1705d0bf49245aa51e0ff4145&type=album'/>// */}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                < div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large}/>
                    
                    Наливайко Антон Андреевич
                </div>
                <div className={s.myWork}>
                    Junior Front-end Developer
                </div>
                <div className={s.textFor}>
                    Написал фронтенд для данной социальной сети на REACT.js
                </div>
                
                
                </div>
                
        </div>
    )
};

export default ProfileInfo;