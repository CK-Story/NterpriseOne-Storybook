// import * as React from "react";
// import { useId, useBoolean } from "@uifabric/react-hooks";
// import {
//   getTheme,
//   mergeStyleSets,
//   FontWeights,
//   ContextualMenu,
//   Toggle,
//   DefaultButton,
//   Modal,
//   IDragOptions,
//   IconButton,
//   IIconProps,
//   TextField,
//   CommandBar,
//   MessageBar,
//   MessageBarType,
// } from "office-ui-fabric-react";

// const dragOptions = {
//   moveMenuItemText: "Move",
//   closeMenuItemText: "Close",
//   menu: ContextualMenu,
// };
// const cancelIcon = { iconName: "Cancel" };

// export default class ModalBasicExample extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isSuccess: false,
//       item: [
//         {
//           createUser: "CK",
//           uomDesc: "",
//           uomId: "",
//           uomSeq: 0,
//         },
//       ],
//     };
//   }

//   // Use useId() to ensure that the IDs are unique on the page.
//   // (It's also okay to use plain strings and manually ensure uniqueness.)

//   componentWillReceiveProps(nextProps) {
//     // You don't have to do this check first, but it can help prevent an unneeded render
//     if (nextProps.selectedItem !== this.state.item) {
//       this.setState({ item: nextProps.selectedItem });
//     }
//   }

//   onSave = () => {
//     let requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(this.state.item[0]),
//     };
//     const uomSeq = this.state.item[0].uomSeq;

//     if (!this.props.editMode) {
//       console.log("Saving", JSON.stringify(this.state.item[0]));

//       return fetch(
//         `https://stalwart-qa.azurewebsites.net/erp/uom/v1/save`,
//         requestOptions
//       )
//         .then((res) => res.json())
//         .then((result) => {
//           console.log("saved result", result);
//           this.setState({ item: [result], isSuccess: true });
//           this.props.updateGrid();
//         });
//     }

//     if (this.props.editMode) {
//       let requestOptions = {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...this.state.item[0],
//           updateDate: "",
//           createDate: "",
//         }),
//       };
//       console.log("Updating...", requestOptions, uomSeq);
//       fetch(
//         `https://stalwart-qa.azurewebsites.net/erp/uom/v1/update/${uomSeq}`,
//         requestOptions
//       )
//         .then((res) => res.json())
//         .then((result) => {
//           console.log("saved result", result);
//           let temp = [];
//           temp.push(result);
//           this.setState({ item: temp, isSuccess: true });
//           this.props.updateGrid();
//         });
//     }
//   };

//   render() {
//     const { editMode, selectedItem } = this.props;
//     const pageTitle = editMode ? "Edit UOM" : "Create UOM";

//     const _items = [
//       {
//         key: "newItem",
//         text: editMode ? "Update" : "Save",
//         cacheKey: "myCacheKey", // changing this key will invalidate this item's cache
//         iconProps: { iconName: "Save" },
//         onClick: () => this.onSave(),
//       },
//     ];
//     return (
//       <div>
//         <Modal
//           titleAriaId={"titleId"}
//           isOpen={this.props.isModalOpen}
//           onDismiss={this.props.hideModal}
//           isBlocking={false}
//           containerClassName={contentStyles.container}
//         >
//           {this.state.isSuccess && (
//             <MessageBar
//               messageBarType={MessageBarType.success}
//               isMultiline={false}
//             >
//               Saved SuccessFully!
//             </MessageBar>
//           )}
//           <div className={contentStyles.header}>
//             <span id={"titleId"}>{pageTitle}</span>
//             <IconButton
//               styles={iconButtonStyles}
//               iconProps={cancelIcon}
//               ariaLabel="Close popup modal"
//               onClick={this.props.hideModal}
//             />
//           </div>
//           <div className={contentStyles.body}>
//             <CommandBar
//               farItems={_items}
//               ariaLabel="Use left and right arrow keys to navigate between commands"
//             />
//             <TextField
//               label="UOM ID"
//               placeholder={"KGS"}
//               autoFocus
//               value={this.state.item[0].uomId}
//               onChange={(e, text) =>
//                 this.setState({
//                   item: [{ ...this.state.item[0], uomId: text }],
//                 })
//               }
//             />
//             <TextField
//               label="UOM Description"
//               placeholder={"Kilograms"}
//               value={this.state.item[0].uomDesc}
//               onChange={(e, text) =>
//                 this.setState({
//                   item: [{ ...this.state.item[0], uomDesc: text }],
//                 })
//               }
//             />
//           </div>
//         </Modal>
//       </div>
//     );
//   }
// }

// const theme = getTheme();
// const contentStyles = mergeStyleSets({
//   container: {
//     display: "flex",
//     flexFlow: "column nowrap",
//     alignItems: "stretch",
//     width: 600,
//     height: 400,
//   },
//   header: [
//     theme.fonts.xLargePlus,
//     {
//       flex: "1 1 auto",
//       borderTop: `4px solid ${theme.palette.themePrimary}`,
//       color: theme.palette.neutralPrimary,
//       display: "flex",
//       alignItems: "center",
//       fontWeight: FontWeights.semibold,
//       padding: "12px 12px 14px 24px",
//     },
//   ],
//   body: {
//     flex: "4 4 auto",
//     padding: "0 24px 24px 24px",
//     overflowY: "hidden",
//     selectors: {
//       p: { margin: "14px 0" },
//       "p:first-child": { marginTop: 0 },
//       "p:last-child": { marginBottom: 0 },
//     },
//   },
// });
// const toggleStyles = { root: { marginBottom: "20px" } };
// const iconButtonStyles = {
//   root: {
//     color: theme.palette.neutralPrimary,
//     marginLeft: "auto",
//     marginTop: "4px",
//     marginRight: "2px",
//   },
//   rootHovered: {
//     color: theme.palette.neutralDark,
//   },
// };




// **************************************************** //

import * as React from "react";
import { Announced } from "office-ui-fabric-react/lib/Announced";
import {
  TextField,
  ITextFieldStyles,
} from "office-ui-fabric-react/lib/TextField";
import {
  ShimmeredDetailsList,
  DetailsListLayoutMode,
  Selection,
  IColumn,
} from "office-ui-fabric-react";
import {
  MarqueeSelection,
  CommandBar,
  ICommandBarItemProps,
} from "office-ui-fabric-react";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
// import ModalBasicExample from "../Modal/MyModal";
import { FluentModal } from "../Modal/Modal";
import { TextInput } from "../TextInput/TextInput";
import Button from "../Button/Button";

const textFieldStyles = { root: { maxWidth: "300px" } };

export class GridList extends React.Component {
  _columns = [
    {
      key: "column1",
      name: "ID",
      fieldName: "uomId",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "column2",
      name: "Description",
      fieldName: "uomDesc",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      items: this._allItems,
      // selectionDetails: this._getSelectionDetails(),
      data: [],
      isModalOpen: false,
      editMode: false,
      selectedItem: [{}],
      isLoading: false,
    };
  }

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  _selection = new Selection({
    onSelectionChanged: () =>
      this.setState({
        selectionDetails: this._getSelectionDetails(),
        editMode: true,
      }),
  });
  componentDidMount() {
    this.fetchUOMList();
  }

  fetchUOMList = () => {
    this.setState({ isLoading: true });
    fetch(
      "https://stalwart-qa.azurewebsites.net/erp/uom/v1/getAll?sortBy=uomSeq"
    )
      .then((data) => data.json())
      .then((items) => {
        console.log(items);
        this.setState({ data: items.content, isLoading: false });
      });
  };

  render() {
    const { items, selectionDetails, data, isLoading } = this.state;
    const shimmeredDetailsListProps = {
      renderedWindowsAhead: 0,
      renderedWindowsBehind: 0,
    };
    const _items = [
      {
        key: "newItem",
        text: "New",
        cacheKey: "myCacheKey", // changing this key will invalidate this item's cache
        iconProps: { iconName: "Add" },
        onClick: () => {
          this.setState({
            editMode: false,
            selectedItem: [{ ...this.uomObject }],
          });
          this.toggleModal();
        },
        // subMenuProps: {
        //   items: [
        //     {
        //       key: "emailMessage",
        //       text: "Email message",
        //       iconProps: { iconName: "Mail" },
        //       ["data-automation-id"]: "newEmailButton", // optional
        //     },
        //     {
        //       key: "calendarEvent",
        //       text: "Calendar event",
        //       iconProps: { iconName: "Calendar" },
        //     },
        //   ],
        // },
      },
      {
        key: "edit",
        text: "Edit",
        iconProps: { iconName: "Edit" },
        disabled: !this.state.editMode,
        onClick: () => {
          this.setState({
            editMode: true,
            selectedItem: this._selection.getSelection(),
          });
          this.toggleModal();
        },
        // href: "https://developer.microsoft.com/en-us/fluentui",
      },
      {
        key: "delete",
        text: "Delete",
        iconProps: { iconName: "Delete" },
        onClick: () => console.log("Share"),
      },
      // {
      //   key: "download",
      //   text: "Download",
      //   iconProps: { iconName: "Download" },
      //   onClick: () => console.log("Download"),
      // },
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

    return (
      <Fabric>
        {/*<div className={exampleChildClass}>{selectionDetails}</div>
        <Announced message={selectionDetails} />
        <TextField
          className={exampleChildClass}
          label="Filter by name:"
          onChange={this._onFilter}
          styles={textFieldStyles}
        />
        <Announced
          message={`Number of items after filter applied: ${data.length}.`}
    />*/}
        <CommandBar
          items={_items}
          // overflowItems={_overflowItems}
          // overflowButtonProps={this.overflowProps}
          farItems={_farItems}
          ariaLabel="Use left and right arrow keys to navigate between commands"
        />
        <MarqueeSelection selection={this._selection}>
          <ShimmeredDetailsList
            items={data}
            columns={this._columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.justified}
            selection={this._selection}
            selectionMode={1}
            selectionPreservedOnEmptyClick={true}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            checkButtonAriaLabel="Row checkbox"
            onItemInvoked={this._onItemInvoked}
            enableShimmer={isLoading}
            listProps={shimmeredDetailsListProps}
          />
        </MarqueeSelection>

        {/*<ModalBasicExample
          isModalOpen={this.state.isModalOpen}
          hideModal={this.toggleModal}
          editMode={this.state.editMode}
          selectedItem={this.state.selectedItem}
          updateGrid={this.fetchUOMList}
        />*/}
        <FluentModal
          title={"OK"}
          isModalOpen={this.state.isModalOpen}
          hideModal={() => this.toggleModal()}
        >
          <div>
            <TextInput label={"UOM ID"} required />
            <TextInput label={"UOM Description"} required />
            <Button>Submit</Button>
          </div>
        </FluentModal>
      </Fabric>
    );
  }

  _getSelectionDetails() {
    const selectionCount = this._selection.getSelectedCount();
    console.log(this._selection.getSelection());
    this.setState({ selectedItem: this._selection.getSelection() });

    if (this.state.data.length !== 0) {
      switch (selectionCount) {
        case 0:
          this.setState({ editMode: false });
          return "No items selected";
        case 1:
          this.setState({ editMode: true });
          return (
            "1 item selected: " + this._selection.getSelection()[0].uomDesc
          );
        default:
          this.setState({ editMode: false });
          return `${selectionCount} items selected`;
      }
    }
  }

  _onFilter = (ev, text) => {
    this.setState({
      data: text
        ? this.state.data.filter(
            (i) => i.uomDesc.toLowerCase().indexOf(text) > -1
          )
        : this.state.data,
    });
  };

  _onItemInvoked = (item) => {
    alert(`Item invoked: ${item.uomDesc}`);
  };
  overflowProps = { ariaLabel: "More commands" };

  uomObject = {
    createUser: "CK",
    uomDesc: "",
    uomId: "",
    uomSeq: 0,
    updateUser: "CK",
  };
}
