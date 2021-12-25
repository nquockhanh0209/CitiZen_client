import React from 'react';
import PieChart, {
  Legend,
  Export,
  Series,
  Label,
  Font,
  Connector,
} from 'devextreme-react/pie-chart';
import { dataSource } from './PieChart_data.js';

class App extends React.Component {
  render() {
    return (
      <PieChart id="pie"
        palette="Bright"
        dataSource={dataSource}
       
      >
        <Legend
          orientation="horizontal"
          itemTextPosition="right"
          horizontalAlignment="center"
          verticalAlignment="bottom"
          columnCount={4} />
        <Export enabled={true} />
        <Series argumentField="country" valueField="medals">
          <Label
            visible={true}
            position="columns"
            customizeText={customizeText}>
            <Font size={16} />
            <Connector visible={true} width={0.5} />
          </Label>
        </Series>
      </PieChart>
    );
  }
}

function customizeText(arg) {
  return `${arg.valueText} (${arg.percentText})`;
}

export default PieChart;
