import { inputDataType } from "../types/InputDataType";
import { ItemYearType } from "../types/ItemYearType";

export default function sortYear(arr: inputDataType[]) {
    const result: ItemYearType[] = [];

    arr.forEach((i) => {
        const year = new Date(i.date).getFullYear();
        const finedItem = result.find((el) => el.year === year);

        if (finedItem) finedItem.amount += i.amount;
        else result.push({year, amount: i.amount});
    })
    result.sort((a, b) => b.year - a.year);

    return { list: result };
}