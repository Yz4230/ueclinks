import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiAlertCircle, mdiClose, mdiPlus } from "@mdi/js";
import LinkInputForm from "./LinkInputForm";
import { Link } from "../types";
import { createLink } from "../database/links";
import { isURL } from "../utils";

const initialInput: Link = {
  title: "",
  description: "",
  href: "",
  keywords: [],
  onCampusOnly: false,
};

type Props = {
  onClose: () => void;
};

const CreateLinkForm: React.FC<Props> = ({ onClose }) => {
  const [input, setInput] = useState(initialInput);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const validateInput = () => {
    const ret = [];
    const emptyFields = [];

    if (!input.title) emptyFields.push("タイトル");
    if (!input.description) emptyFields.push("詳細");
    if (!input.href) emptyFields.push("URL");
    if (input.keywords.length === 0) emptyFields.push("キーワード");
    if (emptyFields.length > 0)
      ret.push(emptyFields.join(", ") + "を入力してください。");

    if (input.href && !isURL(input.href))
      ret.push("適切なURLを入力してください。");

    return ret;
  };

  const submit = () => {
    const messages = validateInput();

    setErrorMessages(messages);
    if (messages.length === 0) {
      createLink(input).then(() => {
        onClose();
        setInput(initialInput);
        setErrorMessages([]);
      });
    }
  };

  return (
    <div>
      <div className="flex text-2xl">
        リンクを追加
        <div className="flex-grow flex justify-end">
          <div
            className="cursor-pointer text-gray-500 hover:text-gray-600"
            onClick={() => onClose()}
          >
            <Icon path={mdiClose} size="1em" />
          </div>
        </div>
      </div>
      <LinkInputForm value={input} onChange={setInput} />
      {errorMessages.length > 0 && (
        <div className="text-red-500 flex mt-2">
          <Icon path={mdiAlertCircle} size="1.5em" className="mr-1" />
          {errorMessages.join("")}
        </div>
      )}
      <div className="flex justify-end">
        <button
          className="flex items-center bg-indigo-500 hover:bg-indigo-600 shadow-md rounded text-white text-xl px-2 py-1"
          onClick={submit}
        >
          <Icon path={mdiPlus} size="1em" />
          追加
        </button>
      </div>
    </div>
  );
};

export default CreateLinkForm;
