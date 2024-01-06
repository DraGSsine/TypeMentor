import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return (
      <div className="container min-h-full flex flex-col">{children}</div>
  );
}

export default Container;
