import React from "react";
import {DataGrid} from "./DataGrid";

export default {
  title: "Data Grid",
  component: DataGrid,
};
 const _columns = [
   {
     key: "column1",
     name: "Name",
     fieldName: "name",
     minWidth: 100,
     maxWidth: 200,
     isResizable: true,
   },
   {
     key: "column2",
     name: "Value",
     fieldName: "value",
     minWidth: 100,
     maxWidth: 200,
     isResizable: true,
   },
 ];
 let _allItems = []
  for (let i = 0; i < 20; i++) {
    _allItems.push({
      key: i,
      name: "Item " + i,
      value: i,
    });
  }
export const Standard = () => (
    <DataGrid 
    data={_allItems}
    columns={_columns}
    />
);
