import React from "react";
import { FLink } from "../types";

type Props = {
  link: FLink;
};

const LinkCard: React.FC<Props> = ({ link }) => {
  return (
    <div className="rounded-md shadow p-2">
      <h2 className="font-semibold text-xl text-gray-800">{link.title}</h2>
      <div className="ml-3">
        <div className="text-gray-500">{link.description}</div>
      </div>
      <a
        className="text-indigo-500 underline block"
        href={link.href}
        target="_blank"
        rel="noreferrer"
      >
        {link.href}
      </a>
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
