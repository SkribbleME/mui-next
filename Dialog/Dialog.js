'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _helpers = require('../utils/helpers');

var _Modal = require('../Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Fade = require('../transitions/Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _transitions = require('../styles/transitions');

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    paper: {
      display: 'flex',
      margin: theme.spacing.unit * 4,
      flexDirection: 'column',
      flex: '0 1 auto',
      position: 'relative',
      maxHeight: '90vh',
      overflowY: 'auto', // Fix IE11 issue, to remove at some point.
      '&:focus': {
        outline: 'none'
      }
    },
    paperWidthXs: {
      maxWidth: Math.max(theme.breakpoints.values.xs, 360)
    },
    paperWidthSm: {
      maxWidth: theme.breakpoints.values.sm
    },
    paperWidthMd: {
      maxWidth: theme.breakpoints.values.md
    },
    fullWidth: {
      width: '100%'
    },
    fullScreen: {
      margin: 0,
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: '100%',
      borderRadius: 0
    }
  };
};

/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */
// @inheritedComponent Modal

function Dialog(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      className = props.className,
      fullScreen = props.fullScreen,
      fullWidth = props.fullWidth,
      ignoreBackdropClick = props.ignoreBackdropClick,
      ignoreEscapeKeyUp = props.ignoreEscapeKeyUp,
      maxWidth = props.maxWidth,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onEscapeKeyUp = props.onEscapeKeyUp,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      open = props.open,
      TransitionProp = props.transition,
      transitionDuration = props.transitionDuration,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'fullScreen', 'fullWidth', 'ignoreBackdropClick', 'ignoreEscapeKeyUp', 'maxWidth', 'onBackdropClick', 'onClose', 'onEnter', 'onEntered', 'onEntering', 'onEscapeKeyUp', 'onExit', 'onExited', 'onExiting', 'open', 'transition', 'transitionDuration']);


  return _react2.default.createElement(
    _Modal2.default,
    (0, _extends3.default)({
      className: (0, _classnames2.default)(classes.root, className),
      BackdropTransitionDuration: transitionDuration,
      ignoreBackdropClick: ignoreBackdropClick,
      ignoreEscapeKeyUp: ignoreEscapeKeyUp,
      onBackdropClick: onBackdropClick,
      onEscapeKeyUp: onEscapeKeyUp,
      onClose: onClose,
      show: open,
      role: 'dialog'
    }, other),
    _react2.default.createElement(
      TransitionProp,
      {
        appear: true,
        'in': open,
        timeout: transitionDuration,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited
      },
      _react2.default.createElement(
        _Paper2.default,
        {
          elevation: 24,
          className: (0, _classnames2.default)(classes.paper, classes['paperWidth' + (0, _helpers.capitalizeFirstLetter)(maxWidth)], (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.fullScreen, fullScreen), (0, _defineProperty3.default)(_classNames, classes.fullWidth, fullWidth), _classNames))
        },
        children
      )
    )
  );
}

Dialog.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Dialog children, usually the included sub-components.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, it will be full-screen
   */
  fullScreen: _propTypes2.default.bool,
  /**
   * If specified, stretches dialog to max width.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   */
  ignoreBackdropClick: _propTypes2.default.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   */
  ignoreEscapeKeyUp: _propTypes2.default.bool,
  /**
   * Determine the max width of the dialog.
   * The dialog width grows with the size of the screen, this property is useful
   * on the desktop where you might need some coherent different width size across your
   * application.
   */
  maxWidth: _propTypes2.default.oneOf(['xs', 'sm', 'md']),
  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: _propTypes2.default.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes2.default.func,
  /**
   * Callback fired before the dialog enters.
   */
  onEnter: _propTypes2.default.func,
  /**
   * Callback fired when the dialog has entered.
   */
  onEntered: _propTypes2.default.func,
  /**
   * Callback fired when the dialog is entering.
   */
  onEntering: _propTypes2.default.func,
  /**
   * Callback fires when the escape key is released and the modal is in focus.
   */
  onEscapeKeyUp: _propTypes2.default.func,
  /**
   * Callback fired before the dialog exits.
   */
  onExit: _propTypes2.default.func,
  /**
   * Callback fired when the dialog has exited.
   */
  onExited: _propTypes2.default.func,
  /**
   * Callback fired when the dialog is exiting.
   */
  onExiting: _propTypes2.default.func,
  /**
   * If `true`, the Dialog is open.
   */
  open: _propTypes2.default.bool,
  /**
   * Transition component.
   */
  transition: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number })])
} : {};

Dialog.defaultProps = {
  fullScreen: false,
  fullWidth: false,
  ignoreBackdropClick: false,
  ignoreEscapeKeyUp: false,
  maxWidth: 'sm',
  open: false,
  transition: _Fade2.default,
  transitionDuration: { enter: _transitions.duration.enteringScreen, exit: _transitions.duration.leavingScreen }
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiDialog' })(Dialog);