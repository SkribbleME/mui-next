var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import EventListener from 'react-event-listener';
import debounce from 'lodash/debounce';
import withStyles from '../styles/withStyles';

export const styles = {
  root: {
    boxSizing: 'border-box',
    flexShrink: 0
  },
  tile: {
    position: 'relative',
    display: 'block', // In case it's not renderd with a div.
    height: '100%',
    overflow: 'hidden'
  },
  imgFullHeight: {
    height: '100%',
    transform: 'translateX(-50%)',
    position: 'relative',
    left: '50%'
  },
  imgFullWidth: {
    width: '100%',
    position: 'relative',
    transform: 'translateY(-50%)',
    top: '50%'
  }
};

class GridListTile extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.imgElement = null, this.handleResize = debounce(() => {
      this.fit();
    }, 166), this.fit = () => {
      const imgElement = this.imgElement;

      if (!imgElement) {
        return;
      }

      if (!imgElement.complete) {
        return;
      }

      if (imgElement.width / imgElement.height > imgElement.parentNode.offsetWidth / imgElement.parentNode.offsetHeight) {
        imgElement.classList.remove(this.props.classes.imgFullWidth);
        imgElement.classList.add(this.props.classes.imgFullHeight);
      } else {
        imgElement.classList.remove(this.props.classes.imgFullHeight);
        imgElement.classList.add(this.props.classes.imgFullWidth);
      }

      imgElement.removeEventListener('load', this.fit);
    }, _temp;
  }

  componentDidMount() {
    this.ensureImageCover();
  }

  componentDidUpdate() {
    this.ensureImageCover();
  }

  componentWillUnmount() {
    this.handleResize.cancel();
  }

  ensureImageCover() {
    if (!this.imgElement) {
      return;
    }

    if (this.imgElement.complete) {
      this.fit();
    } else {
      this.imgElement.addEventListener('load', this.fit);
    }
  }

  render() {
    const _props = this.props,
          {
      children,
      classes,
      className,
      cols,
      component: ComponentProp,
      rows
    } = _props,
          other = _objectWithoutProperties(_props, ['children', 'classes', 'className', 'cols', 'component', 'rows']);

    return React.createElement(
      ComponentProp,
      _extends({ className: classNames(classes.root, className) }, other),
      React.createElement(EventListener, { target: 'window', onResize: this.handleResize }),
      React.createElement(
        'div',
        { className: classes.tile },
        React.Children.map(children, child => {
          if (child.type === 'img') {
            return React.cloneElement(child, {
              key: 'img',
              ref: node => {
                this.imgElement = node;
              }
            });
          }

          return child;
        })
      )
    );
  }
}

GridListTile.propTypes = {
  /**
   * Theoretically you can pass any node as children, but the main use case is to pass an img,
   * in which case GridListTile takes care of making the image "cover" available space
   * (similar to `background-size: cover` or to `object-fit: cover`).
   */
  children: PropTypes.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Width of the tile in number of grid cells.
   */
  cols: PropTypes.number,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * Height of the tile in number of grid cells.
   */
  rows: PropTypes.number
};

GridListTile.defaultProps = {
  cols: 1,
  component: 'li',
  rows: 1
};

export default withStyles(styles, { name: 'MuiGridListTile' })(GridListTile);