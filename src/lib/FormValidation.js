import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

const getValidationErrors = (rules, model) => rules.reduce((errors, [rule, prop, err]) => (
  !rule(model) ? {
    ...errors,
    [prop]: err
  } : errors
), {});

const validate = (rules) => (WrappedComponent) => {
  const validated = (props) => {
    const errors = getValidationErrors(rules, props.model)
    
    return React.createElement(WrappedComponent, {
      ...props,
      isValid: !Object.keys(errors).length,
      errors,
    });
  }
  validated.displayName = `Validate(${WrappedComponent.displayName || WrappedComponent.name})`
  return hoistNonReactStatics(validated, WrappedComponent)
}

const isRequired = (prop, friendlyName = prop) => {
  let message = `${friendlyName} is a required field`;
  return [ (model) => !!model[prop], prop, message ];
};

const greaterThan = (prop, value, friendlyName = prop) => {
  let message = `${friendlyName} must be greater than ${value}`;
  return [ (model) => !!model[prop] && model[prop] > value, prop, message ];
}

const lessThan = (prop, value, friendlyName = prop) => {
  let message = `${friendlyName} must be less than ${value}`;
  return [ (model) => !!model[prop] && model[prop] < value, prop, message ];
}

const greaterThanOrEqual = (prop, value, friendlyName = prop) => {
  let message = `${friendlyName} must be greater than or equal to ${value}`;
  return [ (model) => !!model[prop] && model[prop] >= value, prop, message ];
}

const lessThanOrEqual = (prop, value, friendlyName = prop) => {
  let message = `${friendlyName} must be less than or equal to ${value}`;
  return [ (model) => !!model[prop] && model[prop] <= value, prop, message ];
}

const custom = (prop, func, message) => [ func, prop, message ]

export default validate;
export { isRequired, greaterThan, lessThan, greaterThanOrEqual, lessThanOrEqual, custom };
