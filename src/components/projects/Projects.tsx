import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ShowcaseItem from '../showcaseItem/ShowcaseItem';
import ShowcaseOverlay from '../showcaseOverlay/ShowcaseOverlay';
import ExpandProject from '../expandProject/ExpandProject';
import { getShowcaseItems, ShowcaseObject } from './showcaseItems';
import { withThemeState } from '../_higherOrderComponents/withState';
import { toggledShowcaseModal, selectedShowcaseItem } from '../../redux/actions';
import "./Projects.scss";



const ShowcaseOverlayWithThemeState = withThemeState(ShowcaseOverlay);

const Projects = (props: any) => {

	let upperClass = "projects-container";
	if(props.showcasing) upperClass += " blur-projects" //ternary statement in the tsx doesn't work for some reason
	return (
		<div className={upperClass}//{"projects-container" + props.showcasing ? " blur-projects" : ""}
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

			{
				props.showcasing ?
					<ExpandProject notifyParent={curryOpenProjectUrl(getShowcaseItems(), props.selectedProject)}/>
				:
					null
			}
		</div>
	);
};

const curryStoreSelectedProject = (selectedShowcaseItemCallback: Function, toggledCallback: Function) => { //should be custom hook
	return (index: number) => {
		selectedShowcaseItemCallback(index);
		toggledCallback(true);
	};
};

const curryOpenProjectUrl = (showcaseItems: ShowcaseObject[], index: number) => {
	return (): void => {
		const url = showcaseItems[index].url;
		window.open(url, "_blank");
	};
}

const mapStateToProps = (state: any) => {
	return{
		showcasing: state.ui.showcasing,
		selectedProject: state.ui.selectedProject

	};
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