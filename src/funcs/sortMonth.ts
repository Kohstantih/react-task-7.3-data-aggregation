import { inputDataType } from "../types/InputDataType";
import { ItemsListType } from "../types/ItemsListType";

export default function sortMonth(arr: inputDataType[]) {
    const result: ItemsListType[] = [];

    const filteredArr = arr
        .filter((el) => (new Date(el.date)).getFullYear() === 2018)
        .sort((a, b) => (new Date(a.date).getMonth()) - (new Date(b.date).getMonth()));

    filteredArr.forEach((i) => {
        const date = new Date(i.date);
        const month = date.toLocaleString('eng', { month: 'short' });
        const amount = i.amount;

        const findItem = result.find((el) => el.month ===  month);
        
        if (findItem) findItem.amount += amount;
        else result.push({ month, amount });     
        
    })

    return { list: result };
}