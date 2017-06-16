import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const ChartComponent = (props) => {
  const { color, data, units } = props;

  return (
    <div>
      <Sparklines data={data} height={120} width={180}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <div>{`${average(data)} ${units}`}</div>
    </div>
  )
}

function average(array) {
  return Math.round(array.reduce((t, e) => {
    return t += e;
  }, 0)/array.length, 10);
}

export default ChartComponent;
