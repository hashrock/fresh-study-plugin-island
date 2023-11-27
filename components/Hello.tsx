import { JSX } from "preact";

export function Hello(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <h1>Hello Component</h1>
    </div>
  );
}