var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';

export const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowY: 'auto',
    listStyle: 'none',
    padding: 0,
    WebkitOverflowScrolling: 'touch' // Add iOS momentum scrolling.
  }
};

function GridList(props) {
  const {
    cellHeight,
    children,
    classes,
    className: classNameProp,
    cols,
    component: ComponentProp,
    spacing,
    style
  } = props,
        other = _objectWithoutProperties(props, ['cellHeight', 'children', 'classes', 'className', 'cols', 'component', 'spacing', 'style']);

  return React.createElement(
    ComponentProp,
    _extends({
      className: classNames(classes.root, classNameProp),
      style: _extends({ margin: -spacing / 2 }, style)
    }, other),
    React.Children.map(children, currentChild => {
      const childCols = currentChild.props.cols || 1;
      const childRows = currentChild.props.rows || 1;

      return React.cloneElement(currentChild, {
        style: _extends({
          width: `${100 / cols * childCols}%`,
          height: cellHeight === 'auto' ? 'auto' : cellHeight * childRows + spacing,
          padding: spacing / 2
        }, currentChild.props.style)
      });
    })
  );
}

GridList.propTypes = {
  /**
   * Number of px for one cell height.
   * You can set `'auto'` if you want to let the children determine the height.
   */
  cellHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
  /**
   * Grid Tiles that will be in Grid List.
   */
  children: PropTypes.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Number of columns.
   */
  cols: PropTypes.number,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default we map the type to a good default headline component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * Number of px for the spacing between tiles.
   */
  spacing: PropTypes.number,
  /**
   * @ignore
   */
  style: PropTypes.object
};

GridList.defaultProps = {
  cellHeight: 180,
  cols: 2,
  component: 'ul',
  spacing: 4
};

export default withStyles(styles, { name: 'MuiGridList' })(GridList);