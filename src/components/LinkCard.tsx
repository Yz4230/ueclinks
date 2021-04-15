import React, { useState } from "react";
import { FLink } from "../types";
import { analytics } from "../firebase";

type Props = {
  link: FLink;
};

const LinkCard: React.FC<Props> = ({ link }) => {
  const [underlined, setUnderlined] = useState(false);
  const cursorOvered = () => setUnderlined(true);
  const cursorOuted = () => setUnderlined(false);
  const logClick = () => {
    analytics.logEvent("click_link_card", link);
  };

  return (
    <div className="rounded-md md:rounded-none shadow md:shadow-none p-2">
      <div className="relative">
        <a
          className="w-full h-full block absolute md:hidden"
          href={link.href}
          target="_blank"
          rel="noreferrer"
          onClick={logClick}
        />
        <div className="flex">
          <a
            className="truncate"
            href={link.href}
            target="_blank"
            rel="noreferrer"
            onMouseOver={cursorOvered}
            onMouseOut={cursorOuted}
            onClick={logClick}
          >
            <span className="text-sm text-green-700">{link.href}</span>
          </a>
        </div>
        <div className="flex">
          <a
            className="flex items-center"
            href={link.href}
            target="_blank"
            rel="noreferrer"
            onMouseOver={cursorOvered}
            onMouseOut={cursorOuted}
            onClick={logClick}
          >
            <h3 className="font-semibold text-xl text-indigo-600 cursor-pointer">
              <span className={underlined ? "underline" : ""}>
                {link.title}
              </span>
            </h3>
            {link.onCampusOnly && (
              <div className="inline-block">
                <div className="bg-red-500 border-2 border-red-600 text-white font-bold flex items-center rounded-full text-xs px-2 ml-1">
                  学内のみ
                </div>
              </div>
            )}
          </a>
        </div>
        <div className="ml-1">
          <div className="text-gray-500">{link.description}</div>
        </div>
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
