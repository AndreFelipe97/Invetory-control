import { ReactNode } from "react";

type contentProps = {
  children: ReactNode;
};

export function Content({ children }: contentProps) {
  return <div className="d-flex flex-column mt-4">{children}</div>;
}
