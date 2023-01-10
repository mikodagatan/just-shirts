import * as React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import {
  alertIsOpenState,
  alertColorState,
  alertTitleState,
  alertTextState,
  alertShowIconState,
} from "states";

import { AlertIcon } from "components/icons/AlertIcon";
import { AlertContainer, AlertTitle, AlertClose } from "./styles";

export const Alert = () => {
  const [isOpen, setIsOpen] = useRecoilState(alertIsOpenState);
  const showIcon = useRecoilValue(alertShowIconState);
  const color = useRecoilValue(alertColorState);
  const title = useRecoilValue(alertTitleState);
  const text = useRecoilValue(alertTextState);

  const handleOnClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <AlertContainer $color={color}>
          {showIcon && <AlertIcon />}
          <div className="flex-1">
            <AlertTitle>{title}</AlertTitle>
            {text}
          </div>
          <AlertClose onClick={handleOnClose}>
            <FontAwesomeIcon icon={faX} />
          </AlertClose>
        </AlertContainer>
      )}
    </>
  );
};
