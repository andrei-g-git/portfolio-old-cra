import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggledShowcaseModal } from '../../redux/actions';
import "./ExpandProject.scss";

export const ExpandProject = (props: any) => {
  return (
    <div className="expand-project-container">
        <div className="expand-project-modal">
            <button
                style={{fontSize: "xl"}}
                onClick={() => props.closeModal(false)}
            >
                X
            </button>

            <button
                onClick={() => props.notifyParent()}
            >
                GO TO SITE
            </button>
        </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
    return{
        visible: state.ui.showcasing
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        closeModal: (isVisible: boolean) => {
            dispatch(toggledShowcaseModal(isVisible));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpandProject);