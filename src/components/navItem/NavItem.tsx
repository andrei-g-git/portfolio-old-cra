import * as React from 'react'
import "./NavItem.scss";

function NavItem(props: any) {
    return (
        <div className={testClassName(props.active)}  
            key={props.index} //this is fine, the list is immutable
            onClick={() => props.notifyParent(props.index)}
        >
            {props.name}
        </div>   
    )
}

const testClassName = (isActive: boolean): string => {
    let secondClass: string = "nav-item-inactive";
    if(isActive) secondClass = "nav-item-active";
    return `nav-item ${secondClass}`;
};

export default NavItem;
