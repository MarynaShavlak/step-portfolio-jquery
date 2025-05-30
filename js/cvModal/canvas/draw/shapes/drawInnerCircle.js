import { centerX, centerY, ctx } from "../../config/canvasConfig.js";

export function drawInnerCircle() {
  const pi = Math.PI;
  ctx.beginPath();
  ctx.lineWidth = "15";
  ctx.strokeStyle = "#FFC2D9";
  ctx.arc(centerX, centerY, 140, 0, 2 * pi, false);
  ctx.stroke();
}
