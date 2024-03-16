import { ItemsListType } from "../types/ItemsListType";

export default function MonthTable({ list }: { list: ItemsListType[] }) {
    return (
        <div>
            <h2>Month Table</h2>
            <table>
                <tr>
                    <th>Month</th>
                    <th>Amount</th>
                </tr>
                {list.map((item, index) => (
                    <tr key={index}>
                        <td>{item.month}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
