import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lab02: 1014-9" },
    { name: "Wirawat Luesap", content: "Welcome to React Lab02 1014-9!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
