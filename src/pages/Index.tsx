import React, { useCallback, useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import { findLinksByKeyword, getAllLinks } from "../database/links";
import { Link } from "../types";
import LinkCard from "../components/LinkCard";

export default function Index(): React.ReactElement {
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    getAllLinks().then(setLinks);
  }, []);

  const onChange = useCallback((searchString: string) => {
    if (searchString == "") getAllLinks().then(setLinks);
    else findLinksByKeyword(searchString).then(setLinks);
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center md:block md:mx-2">
        <div className="w-full m-2 md:mx-0 md:w-2/3">
          <SearchForm onChange={onChange} />
        </div>
      </div>
      <div>
        {links.length === 0 && (
          <div className="text-gray-500">リンクは見つかりませんでした。</div>
        )}
        {links.map((l) => (
          <div key={l.id} className="mb-2">
            <LinkCard link={l} />
          </div>
        ))}
      </div>
    </div>
  );
}
