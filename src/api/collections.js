import { getAll } from "./api.js";

export async function getAllAsCitizen() {
    return getAll('registerAsCitizen')

}