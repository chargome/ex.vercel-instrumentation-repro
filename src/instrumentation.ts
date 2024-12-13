import { Instrumentation } from "next";

console.log("evaluating instrumentation");
export async function register() {
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
