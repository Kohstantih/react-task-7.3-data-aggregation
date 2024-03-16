import React from 'react';
import MonthTable from './components/MonthTable';
import YearTable from './components/YearTable';
import SortTable from './components/SortTable';
import SorterDataTables from './components/SorterDataTables';
import sortMonth from './funcs/sortMonth';
import sortYear from './funcs/sortYear';
import sortAmount from './funcs/sortAmount';

const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json';

// TODO:
// 1. Загрузите данные с помощью fetch: https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json
// 2. Не забудьте вынести URL в переменные окружения (не хардкодьте их здесь)
// 3. Положите их в state

export default class App extends React.Component {
    state = {
        list: []
    };

    componentDidMount(): void {
      fetch(url).then((response) => response.json()).then((data) => {
          this.setState(data);
        });
    }

    componentWillUnmount(): void {
        this.setState([]);
    }

    render() {
        const { list } = this.state;

        const SortMonth = SorterDataTables(MonthTable, sortMonth);
        const SortYear = SorterDataTables(YearTable, sortYear);
        const SortAmount = SorterDataTables(SortTable, sortAmount);
        
        return (
            <div id="app">
                <SortMonth list={list} />        
                <SortYear list={list} />
                <SortAmount list={list} />
            </div>
        );
    }
}
