import React from 'react';
import { Modal, mergeStyleSets } from "office-ui-fabric-react";

export const FluentModal = ({title, children, isModalOpen, hideModal}) => {
  
  return (
    <Modal
      titleAriaId={title}
      isOpen={isModalOpen}
      onDismiss={hideModal}
      isBlocking={false}
      containerClassName={contentStyles.container}
      // dragOptions={isDraggable ? dragOptions : undefined}
    >
     <div className={contentStyles.header}>
     {children}
     </div>
    </Modal>
  );
}

const contentStyles = mergeStyleSets({
  container: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "stretch",
  },
  header: [
    // theme.fonts.xLargePlus,
    {
      flex: "1 1 auto",
      // borderTop: `4px solid ${theme.palette.themePrimary}`,
      // color: theme.palette.neutralPrimary,
      display: "flex",
      alignItems: "center",
      // fontWeight: FontWeights.semibold,
      padding: "12px 12px 14px 24px",
    },
  ],
  // body: {
  //   flex: "4 4 auto",
  //   padding: "0 24px 24px 24px",
  //   overflowY: "hidden",
  //   selectors: {
  //     p: { margin: "14px 0" },
  //     "p:first-child": { marginTop: 0 },
  //     "p:last-child": { marginBottom: 0 },
  //   },
  // },
});
