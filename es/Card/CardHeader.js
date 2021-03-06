var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// @inheritedComponent CardContent

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import Typography from '../Typography';
import CardContent from './CardContent';

export const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    flex: '0 0 auto',
    marginRight: theme.spacing.unit * 2
  },
  action: {
    flex: '0 0 auto',
    alignSelf: 'flex-start',
    marginTop: theme.spacing.unit * -1,
    marginRight: theme.spacing.unit * -2
  },
  content: {
    flex: '1 1 auto'
  },
  title: {},
  subheader: {}
});

function CardHeader(props) {
  const { avatar, action, classes, className: classNameProp, subheader, title } = props,
        other = _objectWithoutProperties(props, ['avatar', 'action', 'classes', 'className', 'subheader', 'title']);

  return React.createElement(
    CardContent,
    _extends({ className: classNames(classes.root, classNameProp) }, other),
    avatar && React.createElement(
      'div',
      { className: classes.avatar },
      avatar
    ),
    React.createElement(
      'div',
      { className: classes.content },
      React.createElement(
        Typography,
        { type: avatar ? 'body2' : 'headline', component: 'span', className: classes.title },
        title
      ),
      React.createElement(
        Typography,
        {
          type: avatar ? 'body2' : 'body1',
          component: 'span',
          color: 'secondary',
          className: classes.subheader
        },
        subheader
      )
    ),
    action && React.createElement(
      'div',
      { className: classes.action },
      action
    )
  );
}

CardHeader.propTypes = {
  /**
   * The action to display in the card header.
   */
  action: PropTypes.node,
  /**
   * The Avatar for the Card Header.
   */
  avatar: PropTypes.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The content of the component.
   */
  subheader: PropTypes.node,
  /**
   * The content of the Card Title.
   */
  title: PropTypes.node
};

export default withStyles(styles, { name: 'MuiCardHeader' })(CardHeader);