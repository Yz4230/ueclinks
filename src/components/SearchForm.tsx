import React, { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiClose, mdiMagnify, mdiAlertCircle } from "@mdi/js";

type Props = {
  onChange: (inputString: string) => void;
};

const SearchForm: React.FC<Props> = ({ onChange }) => {
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    onChange(searchString);
  }, [onChange, searchString]);

  return (
    <div>
      <div className="flex shadow hover:shadow-md h-12 md:h-16 rounded-full overflow-hidden">
        <div className="h-full w-12 md:w-16 bg-white flex justify-center items-center">
          <Icon className="opacity-60" path={mdiMagnify} size="2rem" />
        </div>
        <input
          className="h-full text-xl flex-grow focus:outline-none z-10"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <div className="h-full w-12 md:w-16 bg-white flex justify-center items-center">
          <div
            className="cursor-pointer opacity-40 hover:opacity-60"
            onClick={() => setSearchString("")}
          >
            <Icon path={mdiClose} size="1.8em" />
          </div>
        </div>
      </div>
      <div className="text-red-500 flex items-center justify-center mt-1">
        <Icon path={mdiAlertCircle} size="1.5em" className="inline mr-0.5" />
        <span>現在、入力できるキーワードはひとつまでです。</span>
      </div>
    </div>
  );
};

export default SearchForm;
