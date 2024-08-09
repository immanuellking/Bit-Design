import React, { useEffect, useState } from "react";
import { getUID } from "../lib/utils";

function CreateModal({ setModalOpen, modalOpen }) {
  const [step, setStep] = useState(1);

  const [businessName, setBusinessName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [businessCategory, setBusinessCategory] = useState("");
  const [businessCurrency, setBusinessCurrency] = useState("");
  const [image, setImage] = useState("");

  const [fileName, setFileName] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result
          .replace("data:", "")
          .replace(/^.+,/, "");
        setFileName(file.name);
        // localStorage.setItem("uploadedImage", base64String);
        setImage(`data:image/png;base64,${base64String}`);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const newBusiness = {
      id: getUID(),
      businessName,
      businessEmail,
      businessPhone,
      businessAddress,
    };

    const storedBusinesses =
      JSON.parse(localStorage.getItem("businesses")) || [];

    storedBusinesses.push(newBusiness);

    localStorage.setItem("businesses", JSON.stringify(storedBusinesses));

    localStorage.setItem("main", newBusiness.id);

    return newBusiness.id;
  };

  const handleBrandingSubmit = (e) => {
    e.preventDefault();

    // Ensure handleSubmit returns the correct ID
    const newBusinessId = handleSubmit();

    const brand = {
      image: image,
      category: businessCategory,
      currency: businessCurrency,
    };

    const storedBusinesses =
      JSON.parse(localStorage.getItem("businesses")) || [];

    const updatedBusinesses = storedBusinesses.map((business) =>
      business.id === newBusinessId
        ? {
            ...business,
            ...brand,
          }
        : business
    );

    localStorage.setItem("businesses", JSON.stringify(updatedBusinesses));
    setModalOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div
      id="modelConfirm"
      class="fixed z-50 inset-0 bg-[rgba(13,13,13,0.54)] bg-opacity-60 overflow-y-auto h-full w-full sm:px-4 "
    >
      <div className="w-full h-full flex justify-center items-center sm:my-28">
        <div className=" bg-white w-full sm:w-[580px] pt-10 pb-28 sm:rounded-2xl relative">
          <div className="flex justify-center gap-x-1 mb-8">
            <div
              className={`h-[3px] w-[33px] ${
                step === 1 ? "bg-black" : "bg-[#D9D9D9]"
              }`}
            ></div>
            <div
              className={`h-[3px] w-[33px] ${
                step === 2 ? "bg-black" : "bg-[#D9D9D9]"
              }`}
            ></div>
          </div>

          <div
            className={`${
              step === 2 ? "flex" : "hidden"
            } items-center sm:gap-x-2 sm:px-4 sm:py-2 sm:bg-[#F5F5F5] rounded-lg absolute top-8 sm:top-6 left-5 cursor-pointer`}
            onClick={() => setStep(step - 1)}
          >
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7071 0.29289C8.0976 0.68342 8.0976 1.31658 7.7071 1.70711L3.41421 6H15C15.5523 6 16 6.4477 16 7C16 7.5523 15.5523 8 15 8H3.41421L7.7071 12.2929C8.0976 12.6834 8.0976 13.3166 7.7071 13.7071C7.3166 14.0976 6.6834 14.0976 6.2929 13.7071L0.29289 7.7071C0.10536 7.5196 0 7.2652 0 7C0 6.7348 0.10536 6.4804 0.29289 6.2929L6.2929 0.29289C6.6834 -0.09763 7.3166 -0.09763 7.7071 0.29289Z"
                fill="#606060"
              />
            </svg>
            <span className="hidden sm:block text-xl text-[#606060]">Back</span>
          </div>
          <form onSubmit={handleBrandingSubmit}>
            {step === 1 && (
              <div className="space-y-4">
                <div className="flex flex-col items-center gap-y-8 ">
                  <h4 className="text-2xl font-semibold">
                    Create New Business
                  </h4>
                  <img
                    src="/edit.svg"
                    alt="edit-icon"
                    className="w-[107px] h-[107px] sm:w-[166px] sm:h-[166px]"
                  />
                </div>
                <div className="flex flex-col items-center gap-y-6">
                  <div className="w-full text-center">
                    <h2 className="text-xl sm:text-[28px] font-semibold">
                      Business Information.
                    </h2>
                    <div>
                      <p className="text-lg sm:text-xl m-0">
                        Create your business profile.
                      </p>
                      <p className="m-0 text-xs sm:text-base">
                        (All fields are required)
                      </p>
                    </div>
                  </div>

                  <div className="w-[90%] mx-auto sm:mx-0 sm:w-full flex flex-col items-center gap-y-3 sm:gap-y-2.5">
                    <input
                      type="text"
                      id="business_name"
                      className="bg-[#F5F5F5] border text-gray-900 text-sm rounded-full block h-[46px] sm:h-[56px] w-full sm:w-[419px] placeholder-gray-400 px-8"
                      placeholder="Business name"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      required
                    />

                    <input
                      type="email"
                      id="business_email"
                      className="bg-[#F5F5F5] border text-gray-900 text-sm rounded-full block h-[46px] sm:h-[56px] w-full sm:w-[419px] placeholder-gray-400 px-8"
                      placeholder="Business email address"
                      value={businessEmail}
                      onChange={(e) => setBusinessEmail(e.target.value)}
                      required
                    />

                    <input
                      type="text"
                      id="business_phone"
                      className="bg-[#F5F5F5] border text-gray-900 text-sm rounded-full block h-[46px] sm:h-[56px] w-full sm:w-[419px] placeholder-gray-400 px-8"
                      placeholder="Business phone"
                      value={businessPhone}
                      onChange={(e) => setBusinessPhone(e.target.value)}
                      required
                    />

                    <input
                      type="text"
                      id="business_address"
                      className="bg-[#F5F5F5] border text-gray-900 text-sm rounded-full focus:border-gray-300 block h-[46px] sm:h-[56px] w-full sm:w-[419px] placeholder-gray-400 px-8"
                      placeholder="Business address"
                      value={businessAddress}
                      onChange={(e) => setBusinessAddress(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        if (
                          !businessEmail ||
                          !businessEmail ||
                          !businessPhone ||
                          !businessAddress
                        ) {
                          alert("fill out all fields");
                          return;
                        }
                        setStep(step + 1);
                      }}
                      className="bg-[#FFB600] w-[163px] h-[40px] font-semibold mt-4 sm:mt-8"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <>
                <div className="flex flex-col items-center gap-y-8 ">
                  <h4 className="text-2xl font-semibold">
                    Create New Business
                  </h4>
                  <img
                    src="/branding.svg"
                    alt="brand-icon"
                    className="w-[107px] h-[107px] sm:w-[166px] sm:h-[166px]"
                  />
                </div>
                <div className="flex flex-col items-center gap-y-6">
                  <div className="w-full text-center">
                    <h2 className="text-xl sm:text-[28px] font-semibold">
                      Business Branding.
                    </h2>
                    <div>
                      <p className="text-lg sm:text-xl m-0">
                        Manage your business’s branding
                      </p>
                      <p className="m-0 text-xs sm:text-base">
                        (All fields are optional)
                      </p>
                    </div>
                  </div>

                  <div className="w-[90%] mx-auto sm:w-full flex flex-col items-center gap-y-3 sm:gap-y-2.5">
                    <div className="relative w-full sm:w-[419px]">
                      <input
                        type="file"
                        id="fileInput"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                      <div
                        className="flex items-center justify-between bg-[#F5F5F5] border rounded-full h-[46px] sm:h-[56px] text-sm w-full cursor-pointer px-8"
                        onClick={() =>
                          document.getElementById("fileInput").click()
                        }
                      >
                        <span className="text-gray-400">
                          {fileName || "Upload Your Logo "}
                        </span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 4C8.79082 4 7 5.79085 7 8C7 8.03242 7.00047 8.06627 7.00131 8.10224C7.01219 8.56727 6.70099 8.97839 6.25047 9.09416C4.95577 9.42685 4 10.6031 4 12C4 13.6569 5.34317 15 7 15H8C8.55228 15 9 15.4477 9 16C9 16.5523 8.55228 17 8 17H7C4.23861 17 2 14.7614 2 12C2 9.93746 3.2482 8.16845 5.02926 7.40373C5.32856 4.36995 7.88746 2 11 2C13.2236 2 15.1629 3.20934 16.199 5.00324C19.4207 5.10823 22 7.75289 22 11C22 14.3137 19.3138 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C18.2092 15 20 13.2091 20 11C20 8.79085 18.2092 7 16 7C15.8893 7 15.78 7.00447 15.6718 7.01322C15.2449 7.04776 14.8434 6.8066 14.6734 6.4135C14.0584 4.99174 12.6439 4 11 4ZM11.2929 9.29289C11.6834 8.90237 12.3166 8.90237 12.7071 9.29289L14.7071 11.2929C15.0976 11.6834 15.0976 12.3166 14.7071 12.7071C14.3166 13.0976 13.6834 13.0976 13.2929 12.7071L13 12.4142V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V12.4142L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071C8.90237 12.3166 8.90237 11.6834 9.29289 11.2929L11.2929 9.29289Z"
                            fill="#A6A6A6"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="relative w-full sm:w-[419px]">
                      <input
                        type="text"
                        id="business_category"
                        placeholder="Business Category"
                        className="w-full bg-[#F5F5F5] h-[46px] sm:h-[56px] pl-8 text-sm rounded-full border text-gray-900 placeholder-gray-400"
                        value={businessCategory}
                        onChange={(e) => setBusinessCategory(e.target.value)}
                        required
                      />

                      <span className="absolute inset-y-0 right-8 flex items-center text-gray-400">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_60_2564)">
                            <path
                              d="M20.25 16.606V13.5C20.25 13.1022 20.092 12.7206 19.8107 12.4393C19.5294 12.158 19.1478 12 18.75 12H12.75V9H14.25C14.6477 8.99954 15.029 8.84136 15.3102 8.56016C15.5914 8.27895 15.7496 7.89768 15.75 7.5V3C15.7496 2.60232 15.5914 2.22105 15.3102 1.93984C15.029 1.65864 14.6477 1.50046 14.25 1.5H9.75001C9.3523 1.5004 8.971 1.65856 8.68979 1.93978C8.40857 2.221 8.2504 2.6023 8.25001 3V7.5C8.2504 7.8977 8.40857 8.279 8.68979 8.56022C8.971 8.84144 9.3523 8.9996 9.75001 9H11.25V12H5.25001C4.85218 12 4.47065 12.158 4.18935 12.4393C3.90804 12.7206 3.75001 13.1022 3.75001 13.5V16.6066C3.04301 16.7891 2.42687 17.2232 2.01706 17.8276C1.60725 18.4319 1.43191 19.165 1.52392 19.8893C1.61592 20.6137 1.96895 21.2796 2.51683 21.7623C3.06471 22.245 3.76983 22.5113 4.50001 22.5113C5.23019 22.5113 5.9353 22.245 6.48318 21.7623C7.03106 21.2796 7.38409 20.6137 7.4761 19.8893C7.5681 19.165 7.39277 18.4319 6.98296 17.8276C6.57315 17.2232 5.957 16.7891 5.25001 16.6066V13.5H11.25V16.6065C10.543 16.789 9.92687 17.2232 9.51706 17.8275C9.10725 18.4318 8.93191 19.1649 9.02392 19.8893C9.11592 20.6136 9.46895 21.2795 10.0168 21.7622C10.5647 22.2449 11.2698 22.5112 12 22.5112C12.7302 22.5112 13.4353 22.2449 13.9832 21.7622C14.5311 21.2795 14.8841 20.6136 14.9761 19.8893C15.0681 19.1649 14.8928 18.4318 14.483 17.8275C14.0732 17.2232 13.457 16.789 12.75 16.6065V13.5H18.75V16.606C18.043 16.7886 17.4269 17.2227 17.0171 17.8271C16.6072 18.4314 16.4319 19.1644 16.5239 19.8888C16.6159 20.6132 16.969 21.2791 17.5168 21.7618C18.0647 22.2445 18.7698 22.5108 19.5 22.5108C20.2302 22.5108 20.9353 22.2445 21.4832 21.7618C22.0311 21.2791 22.3841 20.6132 22.4761 19.8888C22.5681 19.1644 22.3928 18.4314 21.983 17.8271C21.5732 17.2227 20.957 16.7886 20.25 16.606ZM9.75001 3H14.25L14.2508 7.5H9.75001V3ZM6.00001 19.5C6.00001 19.7967 5.91203 20.0867 5.74721 20.3334C5.58239 20.58 5.34812 20.7723 5.07403 20.8858C4.79994 20.9994 4.49834 21.0291 4.20737 20.9712C3.9164 20.9133 3.64913 20.7704 3.43935 20.5607C3.22957 20.3509 3.08671 20.0836 3.02883 19.7926C2.97095 19.5017 3.00066 19.2001 3.11419 18.926C3.22772 18.6519 3.41998 18.4176 3.66665 18.2528C3.91333 18.088 4.20334 18 4.50001 18C4.89769 18.0005 5.27896 18.1586 5.56016 18.4398C5.84137 18.7211 5.99955 19.1023 6.00001 19.5ZM13.5 19.5C13.5 19.7967 13.412 20.0867 13.2472 20.3334C13.0824 20.58 12.8481 20.7723 12.574 20.8858C12.2999 20.9994 11.9983 21.0291 11.7074 20.9712C11.4164 20.9133 11.1491 20.7704 10.9393 20.5607C10.7296 20.3509 10.5867 20.0836 10.5288 19.7926C10.471 19.5017 10.5007 19.2001 10.6142 18.926C10.7277 18.6519 10.92 18.4176 11.1667 18.2528C11.4133 18.088 11.7033 18 12 18C12.3977 18.0005 12.7789 18.1587 13.0601 18.4399C13.3413 18.7211 13.4995 19.1023 13.5 19.5ZM19.5 21C19.2033 21 18.9133 20.912 18.6667 20.7472C18.42 20.5824 18.2277 20.3481 18.1142 20.074C18.0007 19.7999 17.971 19.4983 18.0288 19.2074C18.0867 18.9164 18.2296 18.6491 18.4393 18.4393C18.6491 18.2296 18.9164 18.0867 19.2074 18.0288C19.4983 17.9709 19.7999 18.0006 20.074 18.1142C20.3481 18.2277 20.5824 18.42 20.7472 18.6666C20.912 18.9133 21 19.2033 21 19.5C20.9996 19.8977 20.8414 20.2789 20.5602 20.5602C20.279 20.8414 19.8977 20.9995 19.5 21Z"
                              fill="#A6A6A6"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_60_2564">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>

                    <div className="relative w-full sm:w-[419px]">
                      <input
                        type="text"
                        id="business_currency"
                        placeholder="NGN - Nigerian Naira (₦)"
                        className="w-full bg-[#F5F5F5] h-[46px] sm:h-[56px] pl-8 text-sm rounded-full border text-gray-900 placeholder-gray-400"
                        value={businessCurrency}
                        onChange={(e) => setBusinessCurrency(e.target.value)}
                        required
                      />
                      <span className="absolute inset-y-0 right-8 flex items-center text-gray-400">
                        <svg
                          width="24"
                          height="17"
                          viewBox="0 0 24 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.5 4H22V3.5C22 2.7 21.3 2 20.5 2H20V1.5C20 0.7 19.3 0 18.5 0H1.5C0.7 0 0 0.7 0 1.5V11.5C0 12.3 0.7 13 1.5 13H2V13.5C2 14.3 2.7 15 3.5 15H4V15.5C4 16.3 4.7 17 5.5 17H22.5C23.3 17 24 16.3 24 15.5V5.5C24 4.7 23.3 4 22.5 4ZM1 11.5V1.5C1 1.2 1.2 1 1.5 1H18.5C18.8 1 19 1.2 19 1.5V11.5C19 11.8 18.8 12 18.5 12H1.5C1.2 12 1 11.8 1 11.5ZM3 13.5V13H18.5C19.3 13 20 12.3 20 11.5V3H20.5C20.8 3 21 3.2 21 3.5V13.5C21 13.8 20.8 14 20.5 14H3.5C3.2 14 3 13.8 3 13.5ZM23 15.5C23 15.8 22.8 16 22.5 16H5.5C5.2 16 5 15.8 5 15.5V15H20.5C21.3 15 22 14.3 22 13.5V5H22.5C22.8 5 23 5.2 23 5.5V15.5Z"
                            fill="#A6A6A6"
                          />
                          <path
                            d="M17.5 4C16.7 4 16 3.3 16 2.5C16 2.2 15.8 2 15.5 2H4.5C4.2 2 4 2.2 4 2.5C4 3.3 3.3 4 2.5 4C2.2 4 2 4.2 2 4.5V8.5C2 8.8 2.2 9 2.5 9C3.3 9 4 9.7 4 10.5C4 10.8 4.2 11 4.5 11H15.5C15.8 11 16 10.8 16 10.5C16 9.7 16.7 9 17.5 9C17.8 9 18 8.8 18 8.5V4.5C18 4.2 17.8 4 17.5 4ZM12 6.5C12 8.4 11.1 10 10 10C8.9 10 8 8.4 8 6.5C8 4.6 8.9 3 10 3C11.1 3 12 4.6 12 6.5ZM3 8.1V4.9C4 4.8 4.8 4 4.9 3H8.1C7.4 3.8 7 5.1 7 6.5C7 7.9 7.4 9.2 8.1 10H4.9C4.8 9 4 8.2 3 8.1ZM17 8.1C16 8.3 15.2 9.1 15 10H11.8C12.5 9.2 12.9 7.9 12.9 6.5C12.9 5.1 12.6 3.8 11.9 3H15C15.2 4 16 4.8 17 4.9V8.1Z"
                            fill="#A6A6A6"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="bg-[#FFB600] w-[207px] h-[40px] font-semibold mt-4 sm:mt-8"
                    >
                      Create Your Invoice
                    </button>
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateModal;
