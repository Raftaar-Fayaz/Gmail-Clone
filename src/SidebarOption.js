import React from 'react';
import './SidebarOption.css';
import Avatar from '@material-ui/core/Avatar';

function SidebarOption({ Icon, src, title, number, selected}) {
    return (
        <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOption
