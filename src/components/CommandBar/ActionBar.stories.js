import React from "react";
import {ActionBar} from "./ActionBar";
import { action } from "@storybook/addon-actions";


export default {
  title: "Action Bar",
  component: ActionBar,
};


export const Standard = () => {
    const items = [
      {
        key: "newItem",
        text: "New",
        cacheKey: "myCacheKey", // changing this key will invalidate this item's cache
        iconProps: { iconName: "Add" },
        subMenuProps: {
          items: [
            {
              key: "emailMessage",
              text: "Email message",
              iconProps: { iconName: "Mail" },
              ["data-automation-id"]: "newEmailButton", // optional
            },
            {
              key: "calendarEvent",
              text: "Calendar event",
              iconProps: { iconName: "Calendar" },
            },
          ],
        },
      },
      {
        key: "upload",
        text: "Upload",
        iconProps: { iconName: "Upload" },
        href: "https://developer.microsoft.com/en-us/fluentui",
        split: true,
        subMenuProps: {
          items: [
            {
              key: "emailMessage",
              text: "Email message",
              iconProps: { iconName: "Mail" },
            },
            {
              key: "calendarEvent",
              text: "Calendar event",
              iconProps: { iconName: "Calendar" },
            },
          ],
        },
      },
      {
        key: "share",
        text: "Share",
        iconProps: { iconName: "Share" },
        disabled: true,
        onClick: () => console.log("Share"),
      },
      {
        key: "download",
        text: "Download",
        iconProps: { iconName: "Download" },
        onClick: action("Download Clicked"),
      },
    ];
    
    const _overflowItems = [
      {
        key: "move",
        text: "Move to...",
        onClick: () => console.log("Move to"),
        iconProps: { iconName: "MoveToFolder" },
      },
      {
        key: "copy",
        text: "Copy to...",
        onClick: () => console.log("Copy to"),
        iconProps: { iconName: "Copy" },
      },
      {
        key: "rename",
        text: "Rename...",
        onClick: () => console.log("Rename"),
        iconProps: { iconName: "Edit" },
      },
    ];
    
    const _farItems = [
      {
        key: "tile",
        text: "Grid view",
        // This needs an ariaLabel since it's icon-only
        ariaLabel: "Grid view",
        iconOnly: true,
        iconProps: { iconName: "Tiles" },
        onClick: () => console.log("Tiles"),
      },
      {
        key: "info",
        text: "Info",
        // This needs an ariaLabel since it's icon-only
        ariaLabel: "Info",
        iconOnly: true,
        iconProps: { iconName: "Info" },
        onClick: () => console.log("Info"),
      },
    ];
    
    const overflowProps = { ariaLabel: "More commands", iconOnly: true };
    
    return (
  <ActionBar 
  items={items}
  overFlowItems={_overflowItems}
  farItems={_farItems}
  overflowButtonProps={overflowProps}
  />
)};
