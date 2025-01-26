import * as React from "react";
import type { Route } from "./+types/home";
import Home from "../components/home";

// export async function clientLoader(): Promise<Route.ClientLoaderArgs> {
//   return { message: "home" };
// }

export async function clientLoader({params}: Route.ClientLoaderArgs) {
  // const data = await fetch(`/some/api/stuff/${params.id}`);
  return params;
}

// export async function clientAction({
//   request,
// }: Route.ClientActionArgs) {
//   let formData = await request.formData();
//   return await processPayment(formData);
// }


export default function SnippetsRoute() {
  return <Home />;
}
