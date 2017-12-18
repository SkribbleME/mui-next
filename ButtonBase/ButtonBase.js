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

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _keyboardFocus = require('../utils/keyboardFocus');

var _TouchRipple = require('./TouchRipple');

var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

var _createRippleHandler = require('./createRippleHandler');

var _createRippleHandler2 = _interopRequireDefault(_createRippleHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      // Remove grey highlight
      WebkitTapHighlightColor: theme.palette.common.transparent,
      backgroundColor: 'transparent', // Reset default value
      outline: 'none',
      border: 0,
      borderRadius: 0,
      cursor: 'pointer',
      userSelect: 'none',
      appearance: 'none',
      textDecoration: 'none',
      // So we take precedent over the style of a native <a /> element.
      color: 'inherit',
      '&::-moz-focus-inner': {
        borderStyle: 'none' // Remove Firefox dotted outline.
      }
    },
    disabled: {
      pointerEvents: 'none', // Disable link interactions
      cursor: 'default'
    }
  };
};

var ButtonBase = function (_React$Component) {
  (0, _inherits3.default)(ButtonBase, _React$Component);

  function ButtonBase() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ButtonBase);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ButtonBase.__proto__ || (0, _getPrototypeOf2.default)(ButtonBase)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      keyboardFocused: false
    }, _this.onKeyboardFocusHandler = function (event) {
      _this.keyDown = false;
      _this.setState({ keyboardFocused: true });

      if (_this.props.onKeyboardFocus) {
        _this.props.onKeyboardFocus(event);
      }
    }, _this.ripple = null, _this.keyDown = false, _this.button = null, _this.keyboardFocusTimeout = null, _this.keyboardFocusCheckTime = 50, _this.keyboardFocusMaxCheckTimes = 5, _this.handleKeyDown = function (event) {
      var _this$props = _this.props,
          component = _this$props.component,
          focusRipple = _this$props.focusRipple,
          onKeyDown = _this$props.onKeyDown,
          onClick = _this$props.onClick;

      var key = (0, _keycode2.default)(event);

      // Check if key is already down to avoid repeats being counted as multiple activations
      if (focusRipple && !_this.keyDown && _this.state.keyboardFocused && key === 'space') {
        _this.keyDown = true;
        event.persist();
        _this.ripple.stop(event, function () {
          _this.ripple.start(event);
        });
      }

      if (onKeyDown) {
        onKeyDown(event);
      }

      // Keyboard accessibility for non interactive elements
      if (event.target === _this.button && onClick && component && component !== 'a' && component !== 'button' && (key === 'space' || key === 'enter')) {
        event.preventDefault();
        onClick(event);
      }
    }, _this.handleKeyUp = function (event) {
      if (_this.props.focusRipple && (0, _keycode2.default)(event) === 'space' && _this.state.keyboardFocused) {
        _this.keyDown = false;
        event.persist();
        _this.ripple.stop(event, function () {
          return _this.ripple.pulsate(event);
        });
      }
      if (_this.props.onKeyUp) {
        _this.props.onKeyUp(event);
      }
    }, _this.handleMouseDown = (0, _createRippleHandler2.default)(_this, 'MouseDown', 'start', function () {
      clearTimeout(_this.keyboardFocusTimeout);
      (0, _keyboardFocus.focusKeyPressed)(false);
      if (_this.state.keyboardFocused) {
        _this.setState({ keyboardFocused: false });
      }
    }), _this.handleMouseUp = (0, _createRippleHandler2.default)(_this, 'MouseUp', 'stop'), _this.handleMouseLeave = (0, _createRippleHandler2.default)(_this, 'MouseLeave', 'stop', function (event) {
      if (_this.state.keyboardFocused) {
        event.preventDefault();
      }
    }), _this.handleTouchStart = (0, _createRippleHandler2.default)(_this, 'TouchStart', 'start'), _this.handleTouchEnd = (0, _createRippleHandler2.default)(_this, 'TouchEnd', 'stop'), _this.handleTouchMove = (0, _createRippleHandler2.default)(_this, 'TouchEnd', 'stop'), _this.handleBlur = (0, _createRippleHandler2.default)(_this, 'Blur', 'stop', function () {
      clearTimeout(_this.keyboardFocusTimeout);
      (0, _keyboardFocus.focusKeyPressed)(false);
      _this.setState({ keyboardFocused: false });
    }), _this.handleFocus = function (event) {
      if (_this.props.disabled) {
        return;
      }

      // Fix for https://github.com/facebook/react/issues/7769
      if (!_this.button) {
        _this.button = event.currentTarget;
      }

      event.persist();
      var keyboardFocusCallback = _this.onKeyboardFocusHandler.bind(_this, event);
      (0, _keyboardFocus.detectKeyboardFocus)(_this, _this.button, keyboardFocusCallback);

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ButtonBase, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.button = (0, _reactDom.findDOMNode)(this);
      (0, _keyboardFocus.listenForFocusKeys)();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // The blur won't fire when the disabled state is set on a focused input.
      // We need to book keep the focused state manually.
      if (!this.props.disabled && nextProps.disabled && this.state.keyboardFocused) {
        this.setState({
          keyboardFocused: false
        });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (this.props.focusRipple && nextState.keyboardFocused && !this.state.keyboardFocused && !this.props.disableRipple) {
        this.ripple.pulsate();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.button = null;
      clearTimeout(this.keyboardFocusTimeout);
    } // Used to help track keyboard activation keyDown

  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props = this.props,
          centerRipple = _props.centerRipple,
          children = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          component = _props.component,
          disabled = _props.disabled,
          disableRipple = _props.disableRipple,
          focusRipple = _props.focusRipple,
          keyboardFocusedClassName = _props.keyboardFocusedClassName,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onKeyboardFocus = _props.onKeyboardFocus,
          onKeyDown = _props.onKeyDown,
          onKeyUp = _props.onKeyUp,
          onMouseDown = _props.onMouseDown,
          onMouseLeave = _props.onMouseLeave,
          onMouseUp = _props.onMouseUp,
          onTouchEnd = _props.onTouchEnd,
          onTouchMove = _props.onTouchMove,
          onTouchStart = _props.onTouchStart,
          rootRef = _props.rootRef,
          tabIndex = _props.tabIndex,
          type = _props.type,
          other = (0, _objectWithoutProperties3.default)(_props, ['centerRipple', 'children', 'classes', 'className', 'component', 'disabled', 'disableRipple', 'focusRipple', 'keyboardFocusedClassName', 'onBlur', 'onFocus', 'onKeyboardFocus', 'onKeyDown', 'onKeyUp', 'onMouseDown', 'onMouseLeave', 'onMouseUp', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'rootRef', 'tabIndex', 'type']);


      var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), (0, _defineProperty3.default)(_classNames, keyboardFocusedClassName || '', this.state.keyboardFocused), _classNames), classNameProp);

      var buttonProps = {};

      var ComponentProp = component;

      if (!ComponentProp) {
        if (other.href) {
          ComponentProp = 'a';
        } else {
          ComponentProp = 'button';
        }
      }

      if (ComponentProp === 'button') {
        buttonProps.type = type || 'button';
      }

      if (ComponentProp !== 'a') {
        buttonProps.role = buttonProps.role || 'button';
        buttonProps.disabled = disabled;
      }

      return _react2.default.createElement(
        ComponentProp,
        (0, _extends3.default)({
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp,
          onMouseDown: this.handleMouseDown,
          onMouseLeave: this.handleMouseLeave,
          onMouseUp: this.handleMouseUp,
          onTouchEnd: this.handleTouchEnd,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          tabIndex: disabled ? -1 : tabIndex,
          className: className
        }, buttonProps, other, {
          ref: rootRef
        }),
        children,
        !disableRipple && !disabled ? _react2.default.createElement(_TouchRipple2.default, {
          innerRef: function innerRef(node) {
            _this2.ripple = node;
          },
          center: centerRipple
        }) : null
      );
    }
  }]);
  return ButtonBase;
}(_react2.default.Component);

ButtonBase.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the ripples will be centered.
   * They won't start at the cursor interaction position.
   */
  centerRipple: _propTypes2.default.bool,
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * The default value is a `button`.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * If `true`, the base button will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes2.default.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * `disableRipple` must also be `false`.
   */
  focusRipple: _propTypes2.default.bool,
  /**
   * The CSS class applied while the component is keyboard focused.
   */
  keyboardFocusedClassName: _propTypes2.default.string,
  /**
   * @ignore
   */
  onBlur: _propTypes2.default.func,
  /**
   * @ignore
   */
  onClick: _propTypes2.default.func,
  /**
   * @ignore
   */
  onFocus: _propTypes2.default.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onKeyboardFocus: _propTypes2.default.func,
  /**
   * @ignore
   */
  onKeyDown: _propTypes2.default.func,
  /**
   * @ignore
   */
  onKeyUp: _propTypes2.default.func,
  /**
   * @ignore
   */
  onMouseDown: _propTypes2.default.func,
  /**
   * @ignore
   */
  onMouseLeave: _propTypes2.default.func,
  /**
   * @ignore
   */
  onMouseUp: _propTypes2.default.func,
  /**
   * @ignore
   */
  onTouchEnd: _propTypes2.default.func,
  /**
   * @ignore
   */
  onTouchMove: _propTypes2.default.func,
  /**
   * @ignore
   */
  onTouchStart: _propTypes2.default.func,
  /**
   * @ignore
   */
  role: _propTypes2.default.string,
  /**
   * Use that property to pass a ref callback to the root component.
   */
  rootRef: _propTypes2.default.func,
  /**
   * @ignore
   */
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  /**
   * @ignore
   */
  type: _propTypes2.default.string
} : {};

ButtonBase.defaultProps = {
  centerRipple: false,
  disableRipple: false,
  focusRipple: false,
  tabIndex: 0,
  type: 'button'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiButtonBase' })(ButtonBase);