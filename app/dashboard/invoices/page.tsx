import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "发票",
};

export default async function Page() {
  // throw Error("This file is not used anymore. Please remove it.");
  await new Promise((res) => setTimeout(res, 3000));
  return <p>Invoices Page</p>;
}
