import { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useUser } from "../../contexts/UserContext";
import { useFetchExpenseStats } from "../../hooks/useFetchData";
import Loading from "../common/Loading";

export default function ExpenseStats() {
  const { user } = useUser();
  const { expenseStats, error, isLoading } = useFetchExpenseStats(
    user?.id || ""
  );
  
  const chartOptions = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
      style: {
        fontFamily: 'inherit'
      }
    },
    title: {
      text: undefined
    },
    tooltip: {  
      pointFormat: '{series.name}: <b>{point.y}%</b>',  
    },  
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          distance: -35,
          format: '{point.y}%<br>{point.name}',
          style: {
            fontSize: '10px',
            fontWeight: 'normal',
            color: 'white',
            textOutline: 'none'
          },
          connectorWidth: 0,
          alignTo: 'center',
          crop: false,
          overflow: 'none'
        },
        showInLegend: false,
        startAngle: 45,
        endAngle: -315,
        center: ['50%', '50%'],
        size: '100%'
      }
    },
    series: [{
      innerSize: '0%',
      name: 'Expenses',
      data: expenseStats.map(stat => ({
        name: stat.name,
        y: stat.value,
        color: stat.color
      }))
    }]
  };

  return (
    <div className="w-full lg:w-1/3 h-full">
      <h2 className="text-xl font-semibold mb-4">Expense Statistics</h2>
      <div className="card h-[300px] p-4">
        {isLoading && <Loading />}
        {error && <div>{error.message}</div>}
        {!isLoading && !error && (
          <div className="w-full h-full flex items-center justify-center">
            <HighchartsReact
              highcharts={Highcharts}
              options={chartOptions}
              containerProps={{ style: { height: '220px', width: '100%' } }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
