import React from "react";
import PropTypes from "prop-types";
import { TextField, MaskedTextField } from "office-ui-fabric-react";
import { initializeIcons } from "@uifabric/icons";

/**
- Use This Input Field with different props as per requirement
**/
export const TextInput = ({
  value,
  onChangeText,
  label,
  placeholder,
  iconName,
  iconPosition,
  disabled,
  errorMessage,
  readOnly,
  masked,
  required,
  maskFormat,
  textAreaProps,
  underlined,
  borderless,
}) => {
  let iconProps = { iconName: iconName };
  initializeIcons();
  return masked ? (
    <MaskedTextField
      label={label}
      mask={maskFormat}
      errorMessage={errorMessage}
      readOnly={readOnly}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={onChangeText}
      iconProps={iconProps}
      required={required}
      underlined={underlined}
      borderless={borderless}
    />
  ) : (
    <TextField
      label={label}
      errorMessage={errorMessage}
      readOnly={readOnly}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={onChangeText}
      iconProps={iconProps}
      required={required}
      multiline={textAreaProps.textArea}
      autoAdjustHeight={textAreaProps.autoHeight}
      rows={textAreaProps.rows}
      resizable={textAreaProps.resizable}
      underlined={underlined}
      borderless={borderless}
    />
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  iconName: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  /**
   - This Object pass as props to use input as TextArea
   - multiple props for making textarea such as no. of rows, resizable and auto-height
   */
  textAreaProps: PropTypes.shape({
    textArea: PropTypes.bool,
    rows: PropTypes.number,
    resizable: PropTypes.bool,
    autoHeight: PropTypes.bool,
  }),

  errorMessage: PropTypes.string,
  readOnly: PropTypes.bool,
  masked: PropTypes.bool,
  /**
   - Masked Format works something like this..
   - aaa for Alphabets
   - 999 for Numbers
   - Spaces also can be formatted by giving space in maskFormat prop
   - Brackets also can be formated by using bracket in maskFormat prop
   */
  maskFormat: PropTypes.string,

  underlined: PropTypes.bool,
  borderless: PropTypes.bool,
};

TextInput.defaultProps = {
  readOnly: false,
  disabled: false,
  masked: false,
  required: false,
  maskFormat: "mask: (999) 999 - 9999",
  underlined: false,
  borderless: false,
  textAreaProps: {
    textArea: false,
    rows: 1,
    resizable: false,
    autoHeight: false,
  },
};
