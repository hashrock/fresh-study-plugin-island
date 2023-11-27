import {
  Plugin,
} from "$fresh/server.ts";
// import { Hello } from "../components/Hello.tsx";
import Home from "https://raw.githubusercontent.com/hashrock/fresh-badminton-site/main/routes/member.tsx"

export default function helloPlugin(): Plugin {
  return {
    name: "helloPlugin",
    routes: [
      {
        path: "/hello",
        component: Home,
        async handler(_req, ctx) {
          return await ctx.render("Hello");
        },
      },
    ],
  };
}