import React, { useEffect } from "react";
import DropDown from "./DropDown";
import { useState } from "react";
import CreateModal from "./CreateModal";

function Business() {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [businessProfiles, setBuisnessProfiles] = useState([]);
  const [mainAddress, setMainAddress] = useState({});

  useEffect(() => {
    const main = localStorage.getItem("main") || "";
    const updated = businessProfiles?.find((profile) => profile.id === main);
    setMainAddress(updated);
  }, [businessProfiles, openDropDown, createModalOpen]);

  useEffect(() => {
    setBuisnessProfiles(JSON.parse(localStorage.getItem("businesses") || "[]"));
  }, [
    createModalOpen,
    openDropDown,
    JSON.parse(localStorage.getItem("businesses") || "[]"),
  ]);

  return (
    <>
      <div className="relative">
        {mainAddress ? (
          <div
            className="flex items-center justify-between px-3 py-4 sm:p-2.5 rounded-2xl w-full lg:max-w-[332px] hover:bg-[rgba(245,245,245,1)] cursor-pointer transition-all duration-150 ease-in"
            onClick={() => setOpenDropDown(!openDropDown)}
          >
            <div className="flex items-center gap-x-6">
              <div className="w-[55px] h-[55px] bg-yellow-400 rounded-full overflow-hidden">
                <img
                  src={mainAddress.image}
                  alt="account"
                  className="w-full h-full"
                />
              </div>
              <div>
                <h4 className="text-[19px] font-bold p-0 m-0 leading-none capitalize">
                  {mainAddress.businessName}
                </h4>
                <span className="text-[rgba(231,165,0,1)] text-[13px] p-0 m-0 leading-none">
                  Switch business
                </span>
              </div>
            </div>
            <div className="px-4">
              <svg
                width="17"
                height="10"
                viewBox="0 0 17 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 1L8.5 8.5L1 1"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        ) : (
          <>
            <div
              className="flex items-center gap-x-8 px-3 py-4 sm:p-2.5 rounded-2xl hover:bg-[rgba(245,245,245,1)] cursor-pointer transition-all duration-150 ease-in"
              onClick={() => {
                setCreateModalOpen(true);
              }}
            >
              <img
                src="/header/create.svg"
                alt="account"
                className="w-[53px]"
              />
              <div className="flex items-center">
                <h4 className="text-[19px] font-bold p-0 m-0 leading-none">
                  Create New Business
                </h4>
              </div>
            </div>
          </>
        )}

        {openDropDown && (
          <DropDown
            setModalOpen={setCreateModalOpen}
            modalOpen={createModalOpen}
            setOpenDropDown={setOpenDropDown}
            businessProfiles={businessProfiles}
          />
        )}
      </div>
      {createModalOpen && <CreateModal setModalOpen={setCreateModalOpen} />}
    </>
  );
}

export default Business;
