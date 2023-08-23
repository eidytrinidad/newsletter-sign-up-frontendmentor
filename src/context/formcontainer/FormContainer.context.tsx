import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {
  ProductListModel,
  ProductListModelDetails,
} from "../models/ProductListAssets.model";

import { ProductListAssets } from "./mock/ProductlistAssets";

export const FormContext = createContext<ProductListModelDetails | undefined>(
  undefined
);

type FormContainerProviderProps = { children: ReactNode };

type ActionsType = {
  type: "productDetails" | "Product";
  payload: ProductListModel[] | undefined;
};

const reducer = (
  state: ProductListModelDetails,
  action: ActionsType
): ProductListModelDetails => {
  switch (action.type) {
    case "productDetails":
      return {
        ...state,
        ListSection: action.payload,
      };

    default:
      return { ...state };
  }
};

const FormContainerProvider = ({ children }: FormContainerProviderProps) => {
  const [state, dispatch] = useReducer(reducer, {} as ProductListModelDetails);

  useEffect(() => {
    dispatch({
      type: "productDetails",
      payload: ProductListAssets,
    });
  }, []);

  return <FormContext.Provider value={state}>{children}</FormContext.Provider>;
};

const useGlobalContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
};

export { useGlobalContext, FormContainerProvider };
