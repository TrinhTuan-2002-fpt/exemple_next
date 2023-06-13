import React from "react";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h2>about navbar</h2>
      <main>{children}</main>
    </>
  );
};

export default AboutLayout;
