'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _createBreakpoints = require('../styles/createBreakpoints');

var _withWidth = require('../utils/withWidth');

var _withWidth2 = _interopRequireDefault(_withWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
function HiddenJs(props) {
  var children = props.children,
      lgDown = props.lgDown,
      lgUp = props.lgUp,
      mdDown = props.mdDown,
      mdUp = props.mdUp,
      only = props.only,
      smDown = props.smDown,
      smUp = props.smUp,
      width = props.width,
      xlDown = props.xlDown,
      xlUp = props.xlUp,
      xsDown = props.xsDown,
      xsUp = props.xsUp,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'lgDown', 'lgUp', 'mdDown', 'mdUp', 'only', 'smDown', 'smUp', 'width', 'xlDown', 'xlUp', 'xsDown', 'xsUp']);


  process.env.NODE_ENV !== "production" ? (0, _warning2.default)((0, _keys2.default)(other).length === 0, 'Material-UI: unsupported properties received ' + (0, _stringify2.default)(other) + ' by `<Hidden />`.') : void 0;

  var visible = true;

  // `only` check is faster to get out sooner if used.
  if (only) {
    if (Array.isArray(only)) {
      for (var i = 0; i < only.length; i += 1) {
        var breakpoint = only[i];
        if (width === breakpoint) {
          visible = false;
          break;
        }
      }
    } else if (only && width === only) {
      visible = false;
    }
  }

  // Allow `only` to be combined with other props. If already hidden, no need to check others.
  if (visible) {
    // determine visibility based on the smallest size up
    for (var _i = 0; _i < _createBreakpoints.keys.length; _i += 1) {
      var _breakpoint = _createBreakpoints.keys[_i];
      var breakpointUp = props[_breakpoint + 'Up'];
      var breakpointDown = props[_breakpoint + 'Down'];
      if (breakpointUp && (0, _withWidth.isWidthUp)(_breakpoint, width) || breakpointDown && (0, _withWidth.isWidthDown)(_breakpoint, width)) {
        visible = false;
        break;
      }
    }
  }

  if (!visible) {
    return null;
  }

  return children;
}

HiddenJs.propTypes = {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Specify which implementation to use.  'js' is the default, 'css' works better for server
   * side rendering.
   */
  implementation: _propTypes2.default.oneOf(['js', 'css']),
  /**
   * You can use this property when choosing the `js` implementation with server side rendering.
   *
   * As `window.innerWidth` is unavailable on the server,
   * we default to rendering an empty componenent during the first mount.
   * In some situation you might want to use an heristic to approximate
   * the screen width of the client browser screen width.
   *
   * For instance, you could be using the user-agent or the client-hints.
   * http://caniuse.com/#search=client%20hint
   */
  initialWidth: _propTypes2.default.number,
  /**
   * If true, screens before this size and down will be hidden.
   */
  lgDown: _propTypes2.default.bool,
  /**
   * If true, screens this size and up will be hidden.
   */
  lgUp: _propTypes2.default.bool,
  /**
   * If true, screens before this size and down will be hidden.
   */
  mdDown: _propTypes2.default.bool,
  /**
   * If true, screens this size and up will be hidden.
   */
  mdUp: _propTypes2.default.bool,
  /**
   * Hide the given breakpoint(s).
   */
  only: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']), _propTypes2.default.arrayOf(_propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']))]),
  /**
   * If true, screens before this size and down will be hidden.
   */
  smDown: _propTypes2.default.bool,
  /**
   * If true, screens this size and up will be hidden.
   */
  smUp: _propTypes2.default.bool,
  /**
   * @ignore
   * width prop provided by withWidth decorator.
   */
  width: _propTypes2.default.string.isRequired,
  /**
   * If true, screens before this size and down will be hidden.
   */
  xlDown: _propTypes2.default.bool,
  /**
   * If true, screens this size and up will be hidden.
   */
  xlUp: _propTypes2.default.bool,
  /**
   * If true, screens before this size and down will be hidden.
   */
  xsDown: _propTypes2.default.bool,
  /**
   * If true, screens this size and up will be hidden.
   */
  xsUp: _propTypes2.default.bool
};

exports.default = (0, _withWidth2.default)()(HiddenJs);