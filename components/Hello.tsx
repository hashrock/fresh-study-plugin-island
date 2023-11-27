import { JSX } from "preact";
import Map from "https://raw.githubusercontent.com/hashrock/fresh-components-beta/main/components/Map.tsx"


export function Hello(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <h1>Hello Component</h1>
      <Map current="" />
    </div>
  );
}