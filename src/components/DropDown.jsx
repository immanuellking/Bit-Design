import React, { useState } from "react";

function DropDown({ businessProfiles, setModalOpen, setOpenDropDown }) {
  const [main, setMain] = useState(localStorage.getItem("main") || "");

  const switchBusiness = (id) => {
    console.log("first");
    localStorage.setItem("main", id);
    setMain(id);
    setOpenDropDown(false);
  };

  return (
    <div
      className="bg-white absolute top-24 left-0 sm:left-5 lg:left-0 sm:top-20 w-full sm:w-[375px] px-4 py-2 rounded-3xl"
      style={{ boxShadow: "0px 6px 24px -1px #00000057" }}
    >
      <div>
        {businessProfiles.length >= 1 &&
          businessProfiles.map((profile) => (
            <div
              className="flex items-center gap-x-6 py-4 border-b border-[#6060604D] cursor-pointer"
              key={profile.id}
              onClick={() => switchBusiness(profile.id)}
            >
              <div className="w-[60px] h-[53px] bg-yellow-400 rounded-full overflow-hidden">
                <img
                  src={profile.image}
                  alt="account"
                  className="w-full h-full"
                />
              </div>
              <div className="flex items-center">
                <div className="space-y-2">
                  <h4 className="text-[19px] font-bold p-0 m-0 leading-none capitalize">
                    {profile?.businessName}
                  </h4>
                  <p className="text-[13px] p-0 m-0 leading-none line-clamp-1 capitalize">
                    {profile?.businessAddress}
                  </p>
                </div>
                <div className="w-[30px] mx-2 h-full">
                  {main === profile.id && (
                    <img
                      src="/header/check.svg"
                      alt="check"
                      className="w-[25px] h-[25px]"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}

        {/* <div className="flex items-center gap-x-8 py-4 border-b border-[#6060604D]">
          <img src="/test.png" alt="account" className="w-[53px]" />
          <div className="flex items-center">
            <div className="space-y-2">
              <h4 className="text-[19px] font-bold p-0 m-0 leading-none">
                James & Sons
              </h4>
              <p className="text-[13px] p-0 m-0 leading-none line-clamp-1">
                12, Ikeja street, off Allen, Lagos Island, Lagos,
              </p>
            </div>
            <div className="w-[25px] mx-2 h-full">
              <img
                src="/header/check.svg"
                alt="check"
                className="w-[25px] h-[25px]"
              />
            </div>
          </div>
        </div> */}

        <div
          className="flex items-center gap-x-8 py-4 cursor-pointer"
          onClick={() => {
            setModalOpen(true);
            setOpenDropDown(false);
          }}
        >
          <img src="/header/create.svg" alt="account" className="w-[53px]" />
          <div className="flex items-center">
            <h4 className="text-[19px] font-bold p-0 m-0 leading-none">
              Create New Business
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
