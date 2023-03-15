import React from 'react'; 
import TypicalHeader from '../../components/TypicalHeader/TypicalHeader';
import ArrowBack from '@mui/icons-material/ArrowBack';
import DoneIcon from '@mui/icons-material/Done';
import './PageProfile.scss';
import EditField from '../../components/EditField/EditField';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export default function PageProfile(props) { 

    return ( 
        <>
        <TypicalHeader 
        title={'Edit Profile'}
        icon1={<ArrowBack sx={{ fontSize: 30 }}/>}
        icon2={<DoneIcon sx={{ fontSize: 30 }}/>} 
        />
        
        <div className='editable_fields'>
            <div className='user_avatar_change'>
                <div className='edit_photo'>
                    <CameraAltIcon sx={{ fontSize: 30, color: 'white'}}/>
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/706/706831.png" height="80px"/>
            </div>

            <div className='user_info_fields'>
                <EditField field_name={'Full name'}/>
                <EditField field_name={'Username'} add_info={'Minumum length is 5 characters!'}/>
                <EditField field_name={'Bio'} add_info={'Any details about you'}/>
            </div>
        </div>
        </>
        
  );
}






