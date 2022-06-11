import * as React from 'react';
import { connect } from 'react-redux';
import "./Projects.scss";

const Projects = (props: any) => {
  return (
    <div className="projects-container"
        style={{height: "100vh", maxHeight: "100vh"}}
    >
        <div className="projects-title">
            PROJECTS
        </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);