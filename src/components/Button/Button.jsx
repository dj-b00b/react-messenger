import React from 'react';  
import './Button.scss';
import CreateIcon from '@mui/icons-material/Create';

export default function Button(props) {
  return (
    <button className="floating_button">
        <CreateIcon sx={{ fontSize: 35 }} />
    </button>
  );
}


