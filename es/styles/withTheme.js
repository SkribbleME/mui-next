var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import wrapDisplayName from 'recompose/wrapDisplayName';
import hoistNonReactStatics from 'hoist-non-react-statics';
import createMuiTheme from './createMuiTheme';
import themeListener from './themeListener';

let defaultTheme;

function getDefaultTheme() {
  if (defaultTheme) {
    return defaultTheme;
  }

  defaultTheme = createMuiTheme();
  return defaultTheme;
}

// Provide the theme object as a property to the input component.
const withTheme = () => Component => {
  class WithTheme extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {};
      this.unsubscribeId = null;
      this.state = {
        // We use || as it's lazy evaluated.
        theme: themeListener.initial(context) || getDefaultTheme()
      };
    }

    componentDidMount() {
      this.unsubscribeId = themeListener.subscribe(this.context, theme => {
        this.setState({ theme });
      });
    }

    componentWillUnmount() {
      if (this.unsubscribeId !== null) {
        themeListener.unsubscribe(this.context, this.unsubscribeId);
      }
    }

    render() {
      return React.createElement(Component, _extends({ theme: this.state.theme }, this.props));
    }
  }

  WithTheme.contextTypes = themeListener.contextTypes;

  if (process.env.NODE_ENV !== 'production') {
    WithTheme.displayName = wrapDisplayName(Component, 'withTheme');
  }

  hoistNonReactStatics(WithTheme, Component);

  if (process.env.NODE_ENV !== 'production') {
    // Exposed for test purposes.
    WithTheme.Naked = Component;
  }

  return WithTheme;
};

export default withTheme;