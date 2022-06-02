import * as React from 'react'
import {useEffect} from "react";
import "./NavItem.scss";

function NavItem(props: any) {
    let activityClass: string = "nav-item-inactive";
    useEffect(() => { //this runs after the component return statement so it's useless
        props.active ? 
            activityClass = "nav-item-active"
        :
            activityClass = "nav-item-inactive"        
    },
        [props.active]
    );

    return (
        <div className={"nav-item" + " " + props.active ? "nav-item-active" : "nav-item-inactive"}
            key={props.index} //this is fine, the list is immutable
            onClick={() => props.notifyParent(props.index)}
        >
            {props.name}
        </div>   
    )
}

export default NavItem;