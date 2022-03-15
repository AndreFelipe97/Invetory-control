import { ReactNode } from "react";

type CardProps = {
  header: string;
  children: ReactNode;
};

export function Card({ header, children }: CardProps) {
  return (
    <>
      <div className="card bg-white mb-3">
        <div className="card-header">{header}</div>
        <div className="card-body">{children}</div>
      </div>
    </>
  );
}
