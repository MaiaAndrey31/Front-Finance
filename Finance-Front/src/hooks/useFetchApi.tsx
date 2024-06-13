import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { Category } from "../Services/apiTypes";
import { CreateCategoryData } from "../validators/types";
import { ApiService } from "../Services/api";

interface FetchAPIProps {
    createCategory: (data: CreateCategoryData) => Promise<void>;
    fetchCategories: () => Promise<void>;
    categories: Category[];
}

const FetchAPIContext = createContext<FetchAPIProps>({} as FetchAPIProps);

type FetchAPIProviderProps = {
    children: ReactNode;
}

export function FetchAPIProvider({ children }: FetchAPIProviderProps) {
    const [categories, setCategories] = useState<Category[]>([])

    const createCategory = useCallback(async (data: CreateCategoryData) => {

        await ApiService.createCategory(data)

    }, [])

    const fetchCategories = useCallback(async () => {

        const data = await ApiService.getCategory()

        setCategories(data)
    }, [])

    return (
        <FetchAPIContext.Provider value= {{ categories, createCategory, fetchCategories }
}>
    { children }
    </FetchAPIContext.Provider>
    )


}

export function useFetchAPI() : FetchAPIProps {
    return useContext(FetchAPIContext)
}