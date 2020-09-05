import React from "react";
import { CommandBar } from "office-ui-fabric-react";
import { initializeIcons } from "@uifabric/icons";
import PropTypes from "prop-types";

export const ActionBar = ({
  items,
  overFlowItems,
  overflowButtonProps,
  farItems,
}) => {
    initializeIcons();
  return (
    <CommandBar
      items={items}
      overflowItems={overFlowItems}
      overflowButtonProps={overflowButtonProps}
      farItems={farItems}
      ariaLabel="Use left and right arrow keys to navigate between commands"
    />
  );
};
// let subMenuPropShape = {
//       items: PropTypes.shape(itemPropShape),
//     };
// let iconPropShape = {iconName: PropTypes.string};
// let itemPropShape = [
//   {
//     key: PropTypes.string,
//     text: PropTypes.string,
//     cacheKey: PropTypes.string,
//     iconProps: PropTypes.shape(iconPropShape),
//     subMenuProps: PropTypes.shape(subMenuPropShape)
//   },
// ];

// ActionBar.propTypes = {
//   items: PropTypes.shape(itemPropShape)
// }