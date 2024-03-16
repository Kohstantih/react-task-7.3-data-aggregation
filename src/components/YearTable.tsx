import { ItemsListType } from "../types/ItemsListType";

export default function YearTable({ list }: { list: ItemsListType[] }) {
    return (
        <div>
            <h2>Year Table</h2>
            <table>
                <tr>
                    <th>Year</th>
                    <th>Amount</th>
                </tr>
                {list.map((item, index) => (
                    <tr key={index}>
                        <td>{item.year}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
