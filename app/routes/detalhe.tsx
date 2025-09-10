import type { Route } from "./+types/home";
import { Detalhe } from "../detalhe/detalhe";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Página de Detalhes" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Detalhe />;
}

