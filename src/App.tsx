import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiGithub, mdiOpenInNew, mdiPlus } from "@mdi/js";
import Index from "./pages/Index";
import Modal from "./components/Modal";
import CreateLinkForm from "./components/CreateLinkForm";

function App(): JSX.Element {
  const [addLinkModal, setAddLinkModal] = useState(false);
  const closeModal = () => {
    setAddLinkModal(false);
  };

  return (
    <div className="container mx-auto ">
      <div className="bg-gray-200 h-16 md:h-20 flex items-center">
        <a
          className="block text-3xl md:text-5xl font-bold ml-3"
          href={location.href}
        >
          UEC Links
        </a>
        <div className="flex-grow flex justify-end items-center px-2">
          <a
            href="https://github.com/Yz4230/ueclinks"
            target="_blank"
            rel="noreferrer"
            className="mr-2.5 md:mr-2"
          >
            <div className="items-center hidden md:flex">
              <div className="underline mr-0.5">GitHub</div>
              <Icon path={mdiOpenInNew} size="0.9em" />
            </div>
            <div className="bg-gray-800 rounded-md shadow md:hidden">
              <Icon path={mdiGithub} size="1.5em" color="white" />
            </div>
          </a>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-md px-2 py-1 shadow flex items-center"
            onClick={() => setAddLinkModal(true)}
          >
            <Icon path={mdiPlus} size="1em" />
            リンクを追加
          </button>
        </div>
      </div>

      <Modal show={addLinkModal} onClose={closeModal}>
        <CreateLinkForm onClose={closeModal} />
      </Modal>

      <div className="px-2 pt-2">
        <Router>
          <div className="h-6 grid gap-1 grid-cols-2 grid-rows-1">
            <Link to="/" className="block flex justify-center bg-gray-50">
              URL
            </Link>
            <Link to="/remote" className="block flex justify-center bg-gray-50">
              リモート
            </Link>
          </div>

          <Route path="/" exact component={Index} />
        </Router>
      </div>
    </div>
  );
}

export default App;
