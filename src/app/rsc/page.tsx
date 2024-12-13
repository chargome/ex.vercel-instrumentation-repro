const load = async () => {
  console.log("rsc loading function started ");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("rsc loading function finished");
  return {
    message: "Hello, world!",
  };
};

export const dynamic = "force-dynamic";

export default async function RscPage() {
  const data = await load();
  return <div>{data.message}</div>;
}
