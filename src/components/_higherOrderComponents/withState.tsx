import * as React from 'react';
import { connect } from 'react-redux';

export const withPageState = (
    WrappedComponent: | typeof React.Component | React.ComponentClass<any> | React.FunctionComponent<any>,
) => {
    return connect(mapPageState, {})(
        (props: any): JSX.Element => {
            return (
                <WrappedComponent {...props}/> 
            );
        });
}

const mapPageState = (state: any) => {
    return{
        page: state.ui.highlightedNavItem
    }
};

//--------------------------------------------------------------------

export const withThemeState = ( // DRY!!!!!!!
    WrappedComponent: | typeof React.Component | React.ComponentClass<any> | React.FunctionComponent<any>,
) => {
    return connect(mapThemeState, {})(
        (props: any): JSX.Element => {
            return (
                <WrappedComponent {...props}/> 
            );
        });
}

const mapThemeState = (state: any) => {
    return{
        darkTheme: state.ui.darkTheme
    }
};


