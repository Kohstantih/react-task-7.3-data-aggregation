import { inputDataType } from "../types/InputDataType";
import { ItemsListType } from "../types/ItemsListType";
import { sorterType } from "../types/sorterType";

const SorterDataTables = (
    Component: ({ list }: {
        list: ItemsListType[];
    }) => JSX.Element,
    sorter: sorterType) => (props: { list: inputDataType[] }) => {
    return <Component {...props} {...sorter(props.list)}/>
}

export default SorterDataTables;
