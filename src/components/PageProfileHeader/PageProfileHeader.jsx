import React from 'react'; 
import './PageProfileHeader.scss';


export default function PageProfile(props) { 

    return ( 
        <PageProfileHeader>
            <div className="left_field">
                <div className="menu">
                    <a href="http://localhost:8080/back/" className="menu">
                        <span className="material-icons">menu</span>
                    </a>
                </div>
        <h1 className="title">Edit Profile</h1>
            </div>
        
            <div className="search">
                <a href="http://localhost:8080/search/" className="search">
                    <span className="material-icons">search</span>
                </a>
            </div>
        </PageProfileHeader>
  );
}



export default function PageProfileHeader(props) { 

    return ( 
        <div className="header">
        </div>
  );
}


