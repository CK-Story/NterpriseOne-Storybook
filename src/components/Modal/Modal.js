import React from 'react';
import { Modal } from "office-ui-fabric-react";

export const FluentModal = ({title, children, isModalOpen, hideModal}) => {
  
  return (
    <Modal
      titleAriaId={title}
      isOpen={isModalOpen}
      onDismiss={hideModal}
      isBlocking={false}
    >
     {children}
    </Modal>
  );
}