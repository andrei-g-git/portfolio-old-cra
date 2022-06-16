import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ShowcaseItem from '../showcaseItem/ShowcaseItem';
import ShowcaseOverlay from '../showcaseOverlay/ShowcaseOverlay';
import { getShowcaseItems } from './showcaseItems';
import { withThemeState } from '../_higherOrderComponents/withState';
import { toggledShowcaseModal, selectedShowcaseItem } from '../../redux/actions';
import "./Projects.scss";



const ShowcaseOverlayWithThemeState = withThemeState(ShowcaseOverlay);

const Projects = (props: any) => {
	return (
		<div className="projects-container"
			style={{ height: "100vh", maxHeight: "100vh" }}
		>
			<div className="projects-title">
				PROJECTS
			</div>
			<div className="showcase-container">
				{
					getShowcaseItems().map((item) => 
						<ShowcaseItem image={item.image}
							key={item.index}
						>
							<ShowcaseOverlayWithThemeState index={item.index}
								title={item.name}
								description={item.description}
								notifyParent={curryStoreSelectedProject(
									props.selectProject,
									props.toggleModal
								)}
								key={item.index}
							/>
						</ShowcaseItem>
					)
				}
			</div>
		</div>
	);
};

const curryStoreSelectedProject = (selectedShowcaseItemCallback: Function, toggledCallback: Function) => { //should be custom hook
	return (index: number) => {
		selectedShowcaseItemCallback(index);
		toggledCallback(true);
	};
};

const mapStateToProps = (state: any) => {
	// return{
	// 	selectedProject: state.ui.selectedProject
	// };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return{
		selectProject: (index: number) => {
			dispatch(selectedShowcaseItem(index));
		},
		toggleModal: (isVisible: boolean) => {
			dispatch(toggledShowcaseModal(isVisible));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);