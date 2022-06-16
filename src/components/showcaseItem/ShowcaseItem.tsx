import * as React from 'react';
import "./ShowcaseItem.scss"; 


function ShowcaseItem(props: any) {
  return (
    <div className="showcase-item-container"
        //onClick={() => {props.notifyParent(props.projectIndex)}}
    >
        <div className="showcase-pic"
            style={{
                backgroundImage: `url(${require(`../../assets/img/${props.image}`)})`,
                // width: "400px",
                // height: "300px",
                // backgroundRepeat: "no-repeat",
                // backgroundSize: "contain"
            }}
        />
        {props.children}
    </div>
  )
}

export default ShowcaseItem;