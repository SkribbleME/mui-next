var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// @inheritedComponent Paper

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import Paper from '../Paper';
import StepConnector from './StepConnector';

export const styles = theme => ({
  root: {
    display: 'flex',
    padding: theme.spacing.unit * 3
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  vertical: {
    flexDirection: 'column'
  }
});

function Stepper(props) {
  const {
    activeStep,
    alternativeLabel,
    classes,
    className: classNameProp,
    children,
    connector: connectorProp,
    nonLinear,
    orientation
  } = props,
        other = _objectWithoutProperties(props, ['activeStep', 'alternativeLabel', 'classes', 'className', 'children', 'connector', 'nonLinear', 'orientation']);

  const className = classNames(classes.root, classNameProp, alternativeLabel ? null : classes[orientation]);

  const connector = connectorProp ? React.cloneElement(connectorProp, { orientation }) : null;
  const childrenArray = React.Children.toArray(children);
  const steps = childrenArray.map((step, index) => {
    const controlProps = {
      index,
      orientation,
      active: false,
      completed: false,
      disabled: false,
      last: index + 1 === childrenArray.length,
      alternativeLabel,
      connector: connectorProp
    };

    if (activeStep === index) {
      controlProps.active = true;
    } else if (!nonLinear && activeStep > index) {
      controlProps.completed = true;
    } else if (!nonLinear && activeStep < index) {
      controlProps.disabled = true;
    }

    return [!alternativeLabel && connector && index > 0 && React.cloneElement(connector, {
      key: `connect-${index - 1}-to-${index}` // eslint-disable-line react/no-array-index-key
    }), React.cloneElement(step, _extends({}, controlProps, step.props))];
  });

  return React.createElement(
    Paper,
    _extends({ square: true, elevation: 0, className: className }, other),
    steps
  );
}

Stepper.propTypes = {
  /**
   * Set the active step (zero based index).
   */
  activeStep: PropTypes.number,
  /**
   * If set to 'true' and orientation is horizontal,
   * then the step label will be positioned under the icon.
   */
  alternativeLabel: PropTypes.bool,
  /**
   * Two or more `<Step />` components.
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
   * A component to be placed between each step.
   */
  connector: PropTypes.element,
  /**
   * If set the `Stepper` will not assist in controlling steps for linear flow.
   */
  nonLinear: PropTypes.bool,
  /**
   * The stepper orientation (layout flow direction).
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical'])
};

Stepper.defaultProps = {
  activeStep: 0,
  alternativeLabel: false,
  connector: React.createElement(StepConnector, null),
  nonLinear: false,
  orientation: 'horizontal'
};

Stepper.muiName = 'Stepper';

export default withStyles(styles, { name: 'MuiStepper' })(Stepper);