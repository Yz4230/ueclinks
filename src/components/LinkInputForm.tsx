import React, { useEffect, useState } from "react";
import { mdiInformation } from "@mdi/js";
import CheckBox from "./CheckBox";
import InputForm from "./InputForm";
import Icon from "@mdi/react";
import { Link } from "../types";
import { normalizeString } from "../utils";

type Props = {
  value: Link;
  onChange: (newValue: Link) => void;
};

const LinkInputForm: React.FC<Props> = ({ value, onChange }) => {
  const [rawKeywords, setRawKeywords] = useState("");
  const updateKeywords = (raw: string) => {
    setRawKeywords(raw);
    const keywords = raw
      .split(/[\u{20}\u{3000}]+/u)
      .filter((s) => s)
      .map(normalizeString)
      .map((s) => s.toLowerCase());
    onChange({
      ...value,
      keywords: Array.from(new Set(keywords)),
    });
  };

  useEffect(() => {
    if (value.keywords.length === 0) setRawKeywords("");
  }, [value.keywords]);

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <InputForm
          placeholder="タイトル"
          value={value.title}
          onChange={(v) => onChange({ ...value, title: normalizeString(v) })}
        />
        <InputForm
          placeholder="説明"
          value={value.description}
          onChange={(v) =>
            onChange({ ...value, description: normalizeString(v) })
          }
        />
        <InputForm
          placeholder="URL"
          value={value.href}
          onChange={(v) => onChange({ ...value, href: normalizeString(v) })}
        />
        <InputForm
          placeholder="キーワード (例：1年 時間割)"
          value={rawKeywords}
          onChange={updateKeywords}
        />
        <CheckBox
          label="学内のみアクセス可能"
          checked={value.onCampusOnly}
          onChange={(v) => onChange({ ...value, onCampusOnly: v })}
        />
        <div className="text-sm mt-2">
          <div className="text-gray-500 flex">
            <Icon
              path={mdiInformation}
              size="1.5em"
              className="pr-1 flex-none"
            />
            <span>
              全ての項目について、全角英数は半角英数に、さらにキーワードの大文字は小文字に変換されます。
            </span>
          </div>
          <div className="text-gray-500 flex">
            <Icon
              path={mdiInformation}
              size="1.5em"
              className="pr-1 flex-none"
            />
            キーワードは完全一致で検索されます。
          </div>
          <div className="mb-2 text-gray-500 align-middle flex">
            <Icon
              path={mdiInformation}
              size="1.5em"
              className="pr-1 flex-none"
            />
            キーワードはスペースで区切ってください。
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkInputForm;
