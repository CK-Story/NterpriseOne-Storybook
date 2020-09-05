import React from 'react'
import PropTypes from 'prop-types'
import {
  ShimmeredDetailsList,
  DetailsListLayoutMode,
  Selection,
  initializeIcons
} from "office-ui-fabric-react";

export const DataGrid = ({
         withShimmer,
         data,
         columns,
         selection,
         isLoading,
         ondblClick,
       }) => {

        const onSelect = new Selection({
          onSelectionChanged:() => selection(_getSelection())
        })

       const _getSelection = () => {
              let item = onSelect.getSelection();
              return item;
        }

        initializeIcons();

         return (
             <ShimmeredDetailsList
               items={data}
               columns={columns}
               setKey="set"
               layoutMode={DetailsListLayoutMode.justified}
               selection={onSelect}
               selectionMode={1}
               selectionPreservedOnEmptyClick={true}
               ariaLabelForSelectionColumn="Toggle selection"
               ariaLabelForSelectAllCheckbox="Toggle selection for all items"
               checkButtonAriaLabel="Row checkbox"
               onItemInvoked={ondblClick}
               enableShimmer={isLoading}
               listProps={{
                 renderedWindowsAhead: 0,
                 renderedWindowsBehind: 0,
               }}
             />
         );
       };

// DataGrid.propTypes = {

// }
