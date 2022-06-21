import * as React from 'react';
import "./ProjectSimpleGallery.scss";

function ProjectSimpleGallery(props: any) {
  return (
    <div>
        <div className="gallery-container">
            {
                props.images.map((image: string, index: number) => 
                    <img className="gallery-pic"
                        src={require("../../assets/img/" + image)}
                        alt="screenshot"
                        key={index}
                    />
                )
            }
        </div>        
    </div>
  );
};

export default ProjectSimpleGallery;