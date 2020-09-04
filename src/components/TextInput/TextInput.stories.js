import React from "react";
import { TextInput } from "./TextInput";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

export default {
  title: "TextInput",
  component: TextInput,
  parameters: {
    component: TextInput,
  },
};

export const Standard = () => (
  <TextInput label={"Standard"} placeholder={"Standard Placeholder"} />
);

export const ReadOnly = () => (
  <TextInput
    label={"ReadOnly Field"}
    placeholder={"Placeholder"}
    readOnly={true}
  />
);

export const InputWithIcon = () => (
  <TextInput
    label={"Icon Field"}
    iconName={'calendar'}
    placeholder={"Placeholder"}
  />
);

export const Disabled = () => (
  <TextInput
    label={"disabled Field"}
    placeholder={"Placeholder"}
    disabled={true}
  />
);

export const Errored = () => (
  <TextInput
    label={"Error Field"}
    placeholder={"Placeholder"}
    errorMessage={"This Field has error message"}
  />
);

export const NumberMaskedInput = () => (
  <TextInput
    label={"Number Masked Field"}
    masked={true}
    maskFormat={"(999) 999 - {9999}"}
  />
);

export const TextMaskedInput = () => (
  <TextInput
    label={"Text Masked Field"}
    masked={true}
    maskFormat={"msk: (aaa) aaa - aaa"}
  />
);


export const RequiredInput = () => (
  <TextInput
    label={"Text Masked Field"}
    required={true}
  />
);

export const TextArea = () => (
         <TextInput
           label={"TextArea Field"}
           textAreaProps={{
             textArea: true,
             rows: 3,
             resizable: true,
             autoHeight: true,
           }}
         />
       );