import axios from "axios";
import { Category, CreateCategory } from "./apiTypes";

export class ApiService {

    private static client = axios.create({
        baseURL: import.meta.env.VITE_API_URL,

    })

    static async createCategory(createCategoryData: CreateCategory,): Promise<Category> {
        const { data } = await ApiService.client.post<Category>('/categories', createCategoryData)

        return data
    }

    static async getCategory(): Promise<Category[]> {

        const { data } = await ApiService.client.get<Category[]>('/categories')

        return data
    }

}