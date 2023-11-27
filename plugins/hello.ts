import {
  Plugin,
} from "$fresh/server.ts";
import { Hello } from "../components/Hello.tsx";

export default function helloPlugin(): Plugin {
  return {
    name: "helloPlugin",
    routes: [
      {
        path: "/hello",
        component: Hello,
        async handler(_req, ctx) {
          return await ctx.render("Hello");
        }
      },
    ],
    islands: {
      baseLocation: "https://raw.githubusercontent.com/hashrock/fresh-components-beta/main/components/Map.tsx",
      paths: [
        "Map.tsx",
      ]
    }
  };
}