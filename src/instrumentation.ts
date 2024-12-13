import { Instrumentation } from "next";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
globalThis.instrumentationStatus = "evaluated";

console.log("evaluating instrumentation");
export async function register() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  globalThis.instrumentationStatus = "registered";
  console.log("registering instrumentation");
  if (process.env.NEXT_RUNTIME === "nodejs") {
    console.log("instrumenting node");
  }
  if (process.env.NEXT_RUNTIME === "edge") {
    console.log("instrumenting edge");
  }
}

export const onRequestError: Instrumentation.onRequestError = async (
  err,
  request,
  context
) => {
  console.log("onRequestError", err, request, context);
};
