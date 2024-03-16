import { ItemsListType } from "../types/ItemsListType";

export default function SortTable({ list }: { list: ItemsListType[] }) {
    return (
        <div>
            <h2>Sort Table</h2>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
                {list.map((item, index) => (
                    <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
