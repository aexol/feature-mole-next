import React from "react";
import { Motto, Title, Worms } from "../atoms";
import Link from "next/link";

export interface HeaderProps {
  title: string;
  motto: string;
  cta: string;
  ctaClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  motto,
  cta,
  ctaClick,
}) => (
  <Link href="/">
    <div className="mb-2 bg-sblue text-white cursor-pointer">
      <div className="container p-5 mx-auto flex flex-row items-center">
        <div>
          <Title>{title}</Title>
          <Motto>{motto}</Motto>
        </div>
        <div className="flex flex-row items-center ml-auto mr-10">
          <Worms>100</Worms>
        </div>
        <button
          onClick={ctaClick}
          className={`
        hover:bg-white
        hsblue
        hover:border-transparent 
        bg-transparent
        text-white
        font-semibold 
        py-2 px-4 
        border border-white 
        transition
        duration-500
        rounded`}
        >
          {cta}
        </button>
      </div>
    </div>
  </Link>
);
