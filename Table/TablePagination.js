'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

var _Menu = require('../Menu');

var _Select = require('../Select');

var _Select2 = _interopRequireDefault(_Select);

var _TableCell = require('./TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

var _Toolbar = require('../Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require('../Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _KeyboardArrowLeft = require('../svg-icons/KeyboardArrowLeft');

var _KeyboardArrowLeft2 = _interopRequireDefault(_KeyboardArrowLeft);

var _KeyboardArrowRight = require('../svg-icons/KeyboardArrowRight');

var _KeyboardArrowRight2 = _interopRequireDefault(_KeyboardArrowRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @inheritedComponent TableCell

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      // Increase the specificity to override TableCell.
      '&:last-child': {
        padding: 0
      }
    },
    toolbar: {
      height: 56,
      minHeight: 56,
      paddingRight: 2
    },
    spacer: {
      flex: '1 1 100%'
    },
    caption: {
      flexShrink: 0
    },
    input: {
      fontSize: 'inherit',
      flexShrink: 0
    },
    selectRoot: {
      marginRight: theme.spacing.unit * 4
    },
    select: {
      marginLeft: theme.spacing.unit,
      width: 34,
      textAlign: 'right',
      paddingRight: 22,
      color: theme.palette.text.secondary,
      height: 32,
      lineHeight: '32px'
    },
    actions: {
      flexShrink: 0,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing.unit * 2.5
    }
  };
};

/**
 * A `TableCell` based component for placing inside `TableFooter` for pagination.
 */

var _ref2 = _react2.default.createElement(_KeyboardArrowRight2.default, null);

var _ref3 = _react2.default.createElement(_KeyboardArrowLeft2.default, null);

var _ref4 = _react2.default.createElement(_KeyboardArrowLeft2.default, null);

var _ref5 = _react2.default.createElement(_KeyboardArrowRight2.default, null);

var TablePagination = function (_React$Component) {
  (0, _inherits3.default)(TablePagination, _React$Component);

  function TablePagination() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TablePagination);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TablePagination.__proto__ || (0, _getPrototypeOf2.default)(TablePagination)).call.apply(_ref, [this].concat(args))), _this), _this.handleBackButtonClick = function (event) {
      _this.props.onChangePage(event, _this.props.page - 1);
    }, _this.handleNextButtonClick = function (event) {
      _this.props.onChangePage(event, _this.props.page + 1);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TablePagination, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var count = nextProps.count,
          onChangePage = nextProps.onChangePage,
          rowsPerPage = nextProps.rowsPerPage;

      var newLastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);
      if (this.props.page > newLastPage) {
        onChangePage(null, newLastPage);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          colSpanProp = _props.colSpan,
          Component = _props.component,
          count = _props.count,
          labelDisplayedRows = _props.labelDisplayedRows,
          labelRowsPerPage = _props.labelRowsPerPage,
          onChangePage = _props.onChangePage,
          onChangeRowsPerPage = _props.onChangeRowsPerPage,
          page = _props.page,
          rowsPerPage = _props.rowsPerPage,
          rowsPerPageOptions = _props.rowsPerPageOptions,
          theme = _props.theme,
          other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'colSpan', 'component', 'count', 'labelDisplayedRows', 'labelRowsPerPage', 'onChangePage', 'onChangeRowsPerPage', 'page', 'rowsPerPage', 'rowsPerPageOptions', 'theme']);


      var colSpan = void 0;

      if (Component === _TableCell2.default || Component === 'td') {
        colSpan = colSpanProp || 1000; // col-span over everything
      }

      var themeDirection = theme && theme.direction;

      return _react2.default.createElement(
        Component,
        (0, _extends3.default)({ className: classes.root, colSpan: colSpan }, other),
        _react2.default.createElement(
          _Toolbar2.default,
          { className: classes.toolbar },
          _react2.default.createElement('div', { className: classes.spacer }),
          rowsPerPageOptions.length > 1 && _react2.default.createElement(
            _Typography2.default,
            { type: 'caption', className: classes.caption },
            labelRowsPerPage
          ),
          rowsPerPageOptions.length > 1 && _react2.default.createElement(
            _Select2.default,
            {
              classes: { root: classes.selectRoot, select: classes.select },
              input: _react2.default.createElement(_Input2.default, {
                classes: {
                  root: classes.input
                },
                disableUnderline: true
              }),
              value: rowsPerPage,
              onChange: onChangeRowsPerPage
            },
            rowsPerPageOptions.map(function (rowsPerPageOption) {
              return _react2.default.createElement(
                _Menu.MenuItem,
                { key: rowsPerPageOption, value: rowsPerPageOption },
                rowsPerPageOption
              );
            })
          ),
          _react2.default.createElement(
            _Typography2.default,
            { type: 'caption', className: classes.caption },
            labelDisplayedRows({
              from: count === 0 ? 0 : page * rowsPerPage + 1,
              to: Math.min(count, (page + 1) * rowsPerPage),
              count: count,
              page: page
            })
          ),
          _react2.default.createElement(
            'div',
            { className: classes.actions },
            _react2.default.createElement(
              _IconButton2.default,
              { onClick: this.handleBackButtonClick, disabled: page === 0 },
              themeDirection === 'rtl' ? _ref2 : _ref3
            ),
            _react2.default.createElement(
              _IconButton2.default,
              {
                onClick: this.handleNextButtonClick,
                disabled: page >= Math.ceil(count / rowsPerPage) - 1
              },
              themeDirection === 'rtl' ? _ref4 : _ref5
            )
          )
        )
      );
    }
  }]);
  return TablePagination;
}(_react2.default.Component);

TablePagination.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  colSpan: _propTypes2.default.number,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * The total number of rows.
   */
  count: _propTypes2.default.number.isRequired,
  /**
   * Useful to customize the displayed rows label.
   */
  labelDisplayedRows: _propTypes2.default.func,
  /**
   * Useful to customize the rows per page label. Invoked with a `{ from, to, count, page }`
   * object.
   */
  labelRowsPerPage: _propTypes2.default.node,
  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback
   * @param {number} page The page selected
   */
  onChangePage: _propTypes2.default.func.isRequired,
  /**
   * Callback fired when the number of rows per page is changed.
   *
   * @param {object} event The event source of the callback
   */
  onChangeRowsPerPage: _propTypes2.default.func.isRequired,
  /**
   * The zero-based index of the current page.
   */
  page: _propTypes2.default.number.isRequired,
  /**
   * The number of rows per page.
   */
  rowsPerPage: _propTypes2.default.number.isRequired,
  /**
   * Customizes the options of the rows per page select field. If less than two options are
   * available, no select field will be displayed.
   */
  rowsPerPageOptions: _propTypes2.default.array,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
} : {};

TablePagination.defaultProps = {
  component: _TableCell2.default,
  labelDisplayedRows: function labelDisplayedRows(_ref6) {
    var from = _ref6.from,
        to = _ref6.to,
        count = _ref6.count;
    return from + '-' + to + ' of ' + count;
  },
  labelRowsPerPage: 'Rows per page:',
  rowsPerPageOptions: [5, 10, 25]
};

exports.default = (0, _withStyles2.default)(styles, { withTheme: true, name: 'MuiTablePagination' })(TablePagination);