import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("detalhe", "routes/detalhe.tsx")
] satisfies RouteConfig;

