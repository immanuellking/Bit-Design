import { act, createContext, useContext, useReducer } from "react";

const initialState = {
  businessProfiles: [],
  mainId: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_BUSINESS_PROFILES": {
      const profiles = JSON.parse(localStorage.getItem("businesses")) || [];
      const mainId = localStorage.getItem("mainId") || "";
      return { ...state, businessProfiles: profiles, mainId };
    }

    case "ADD_BUSINESS_PROFILES": {
      const profilesExist =
        JSON.parse(localStorage.getItem("businesses") || "[]") || [];

      // Otherwise, update the profiles array and localStorage
      const updatedProfiles = [...profilesExist, action.payload];
      localStorage.setItem("businesses", JSON.stringify(updatedProfiles));
      localStorage.setItem("mainId", action.payload.id);
      console.log(" chech")
      return {
        ...state,
        businessProfiles: updatedProfiles,
        mainId: action.payload.id,
      };
    }

    default:
      return state;
  }
};

const BusinessContext = createContext();

export const BusinessProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getBusinessProfiles = () => {
    dispatch({ type: "GET_BUSINESS_PROFILES" });
  };

  const getMain = () => {
    dispatch({ type: "GET_MAIN_ID" });
  };

  const addBusinessProfile = (profile) => {
    dispatch({ type: "ADD_BUSINESS_PROFILES", payload: profile });
  };

  const setMain = (id) => {
    dispatch({ type: "ADD_BUSINESS_PROFILES", payload: id });
  };

  return (
    <BusinessContext.Provider
      value={{ state, getBusinessProfiles, addBusinessProfile, setMain }}
    >
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusiness = () => {
  const context = useContext(BusinessContext);
  if (context === undefined) {
    throw new Error("useBusiness must be used within a CartProvider");
  }

  return context;
};






















<div className="absolute top-0 right-0 left-0 bottom-0 bg-black/30 flex items-center justify-center overflow-y-auto">
      
    </div>