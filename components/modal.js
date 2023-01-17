import React from "react";
import style from "./Style.module.css";
import { Flex, Box, Wrap, WrapItem, Center, Text } from "@chakra-ui/react";

function Modal(props) {
  const modalClass = props.visible ? `${style.modalvisible}` : `${style.modal}`;

  return (
    <div className={modalClass}>
      <div className={`${style.modalcontent}`}>{props.children}</div>
    </div>
  );
}

export default Modal;
