import React, { useCallback, useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import { findLinksByKeyword, getAllLinks } from "../database/links";
import { FLink } from "../types";
import LinkCard from "../components/LinkCard";
import { boolToInt, loadFavorites, normalizeString } from "../utils";

export default function Index(): React.ReactElement {
  const [links, setLinks] = useState<FLink[]>([]);
  const [fetchStatus, setFetchStatus] = useState<
    "pending" | "finished" | "failed"
  >("pending");

  const fetchLinks = () => {
    getAllLinks()
      .then((data) => {
        const favoriteIds = loadFavorites().map((l) => l.id);
        setLinks(
          data.sort((a, b) => {
            return (
              boolToInt(favoriteIds.includes(b.id)) -
              boolToInt(favoriteIds.includes(a.id))
            );
          })
        );
        setFetchStatus("finished");
      })
      .catch(() => setFetchStatus("failed"));
  };
  window.addEventListener("newLinkCreated", fetchLinks);

  useEffect(fetchLinks, []);

  const onChange = useCallback((searchString: string) => {
    setLinks([]);
    setFetchStatus("pending");

    (searchString == ""
      ? getAllLinks()
      : findLinksByKeyword(normalizeString(searchString))
    )
      .then((data) => {
        setLinks(data);
        setFetchStatus("finished");
      })
      .catch(() => setFetchStatus("failed"));
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center md:block md:mx-2">
        <div className="w-full m-2 md:mx-0 md:w-2/3">
          <SearchForm onChange={onChange} />
        </div>
      </div>
      <div>
        <div className="text-gray-500">
          {fetchStatus === "pending" && "読み込み中…"}
          {fetchStatus === "finished" &&
            links.length === 0 &&
            "リンクは見つかりませんでした。"}
          {fetchStatus === "failed" && "読み込みに失敗しました。"}
        </div>
        {links.map((l) => (
          <div key={l.id} className="mb-2">
            <LinkCard link={l} />
          </div>
        ))}
      </div>
    </div>
  );
}
