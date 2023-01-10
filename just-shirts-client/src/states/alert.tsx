import { atom } from "recoil";
import { Color } from "theme";

export const alertIsOpenState = atom({
  key: "alertIsOpenState",
  default: true as boolean,
});

export const alertColorState = atom({
  key: "alertColorState",
  default: Color.primary as Color,
});

export const alertTitleState = atom({
  key: "alertTitleState",
  default: "Add Title here" as string,
});

export const alertTextState = atom({
  key: "alertTextState",
  default: "Add Text here" as string,
});

export const alertShowIconState = atom({
  key: "alertShowIconState",
  default: true as boolean,
});
