import { inputDataType } from "../types/InputDataType";

export default function sortAmount(arr: inputDataType[]) {

    return { list: arr.sort((a, b) => b.amount - a.amount) };
}