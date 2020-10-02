import calcPreviousTime from "./calcPreviousTime";
import AnimationOrderType from "./AnimationOrderType";

export const showPowerButtonOrder: AnimationOrderType = {
  delay: 400,
  duration: 300,
};

export const fadeInPowerButtonColorOrder: AnimationOrderType = {
  delay: calcPreviousTime(showPowerButtonOrder) + 100,
  duration: 300,
};

export const showIMarkOrder: AnimationOrderType = {
  delay: fadeInPowerButtonColorOrder.delay,
  duration: fadeInPowerButtonColorOrder.duration,
};

export const pushPowerButtonOrder: AnimationOrderType = {
  delay: calcPreviousTime(showIMarkOrder) + 200,
  duration: 400,
};

export const hidePowerButtonCircle: AnimationOrderType = {
  delay: calcPreviousTime(pushPowerButtonOrder) + 200,
  duration: 800,
};

export const loadingOrder: AnimationOrderType = {
  delay: calcPreviousTime(hidePowerButtonCircle) - 200,
  duration: 300,
};

export const loadingSlideOutOrder: AnimationOrderType = {
  delay: calcPreviousTime(loadingOrder) + 200,
  duration: 300,
};

export const showMainPageOrder: AnimationOrderType = {
  delay: calcPreviousTime(loadingSlideOutOrder) + 100,
  duration: 800,
};

export const startPushINIADFESButton: AnimationOrderType = {
  delay: calcPreviousTime(showMainPageOrder) + 100,
  duration: 0, //このdurationは意味を持たず
};
