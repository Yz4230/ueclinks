import React from "react";
import { FLink } from "../types";

type Props = {
  link: FLink;
};

const LinkCard: React.FC<Props> = ({ link }) => {
  return (
    <div className="rounded-md md:rounded-none shadow md:shadow-none p-2">
      <a
        className="flex flex-col cursor-default"
        href={link.href}
        target="_blank"
        rel="noreferrer"
      >
        <div className="text-sm text-green-700">{link.href}</div>
        <div className="flex">
          <h3 className="font-semibold text-xl text-indigo-600 hover:underline cursor-pointer">
            {link.title}
          </h3>
        </div>
      </a>
      <div className="ml-1">
        <div className="text-gray-500">{link.description}</div>
      </div>
      <div>
        <span className="text-sm text-gray-700">キーワード: </span>
        {link.keywords.map((k) => (
          <div
            key={k}
            className="rounded-full inline-block text-sm bg-gray-200 px-1.5 mr-1"
          >
            {k}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkCard;
