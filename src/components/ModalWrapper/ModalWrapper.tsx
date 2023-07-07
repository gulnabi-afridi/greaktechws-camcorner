import React from "react";
import { Modal } from "@mantine/core";

interface Props {
  open: boolean;
  setState: (e: any) => void;
  children: React.ReactNode;
  size?: string;
}

const ModalWrapper = ({ open, setState, children, size = "78%" }: Props) => {
  return (
    <Modal
      size={size}
      opened={open}
      onClose={() => setState(false)}
      centered
      styles={() => ({
        body: {
          padding: "0px",
          overflow: "hidden",
        },
        header: {
          display: "none",
        },
      })}
    >
      {children}
    </Modal>
  );
};

export default ModalWrapper;
