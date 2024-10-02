import React from "react";

type Props = {
  heading?: string;
  children: React.ReactNode;
  variant?: "one" | "two";
  className?: string;
};

const Section = ({ heading, children, variant, className }: Props) => {
  return (
    <section
      className={`${className ? className : ""} ${
        variant === "two" ? "" : "bg-[#D9D9D940]"
      } rounded-2xl mb-5`}
    >
      {heading && (
        <h2
          className={`${
            variant === "two" ? "bg-[#D9D9D940]" : ""
          } text-center  px-3 py-2`}
        >
          {heading}
        </h2>
      )}

      {children}
    </section>
  );
};

export default Section;
