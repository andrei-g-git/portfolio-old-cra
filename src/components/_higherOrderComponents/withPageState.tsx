import * as React from 'react';
import { connect } from 'react-redux';

export const withPageState = (
    WrappedComponent: /* JSX.Element | JSX.Element[] */ | typeof React.Component | React.ComponentClass<any> | React.FunctionComponent<any>,
) => {
    return connect(mapStateToProps, {})(
        (props: any): JSX.Element => {
            return (
                <WrappedComponent {...props}/>
            );
        });
}

const mapStateToProps = (state: any) => {
    return{
        page: state.ui.highlightedNavItem
    }
};


