import React from "react";
import "./Header.css";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
import { ActionButton, HighContrastSelector } from "office-ui-fabric-react";
import "office-ui-fabric-react/dist/css/fabric.css";
import {initializeIcons} from '@uifabric/icons'

export default function Header() {
  initializeIcons();

  const customSplitButtonStyles = {
    splitButtonMenuButton: {
      backgroundColor: "white",
      width: 28,
      border: "none",
    },
    splitButtonMenuIcon: { fontSize: "7px" },
    splitButtonDivider: {
      backgroundColor: "#c8c8c8",
      width: 1,
      right: 26,
      position: "absolute",
      top: 4,
      bottom: 4,
    },
    splitButtonContainer: {
      selectors: {
        [HighContrastSelector]: { border: "none" },
      },
    },
  };

  return (
    <header>
      <nav class="navbar navbar-light bg-light">
        <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
              <a class="navbar-brand" href="#">
                NterpriseOne
              </a>
            </div>
            <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg6">
              <SearchBox
                placeholder="Search"
                underlined={true}
                className={"searchBox"}
              />
            </div>
            <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4">
              {/*<ActionButton
                iconProps={{ iconName: "AddFriend" }}
                allowDisabledFocus
              >
                Create account
              </ActionButton>*/}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
