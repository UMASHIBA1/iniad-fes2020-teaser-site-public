import AnimationOrderType from "./AnimationOrderType";

const calcPreviousTime = (order: AnimationOrderType) => {
  return order.duration + order.delay;
};

export default calcPreviousTime;
