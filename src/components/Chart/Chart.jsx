import React from 'react';
import { LineChart,Line, XAxis, YAxis, BarChart, Bar, Tooltip} from 'recharts';

const Chart = () => {
 const mathChart=[
  { "id": 1, "name": "Alice", "math_marks": 85, "english_marks": 78, "bangla_marks": 88 },
  { "id": 2, "name": "Bob", "math_marks": 78, "english_marks": 82, "bangla_marks": 75 },
  { "id": 3, "name": "Charlie", "math_marks": 92, "english_marks": 89, "bangla_marks": 90 },
  { "id": 4, "name": "David", "math_marks": 67, "english_marks": 74, "bangla_marks": 65 },
  { "id": 5, "name": "Ella", "math_marks": 74, "english_marks": 85, "bangla_marks": 80 },
  { "id": 6, "name": "Fiona", "math_marks": 88, "english_marks": 90, "bangla_marks": 87 },
  { "id": 7, "name": "George", "math_marks": 90, "english_marks": 88, "bangla_marks": 92 },
  { "id": 8, "name": "Hannah", "math_marks": 82, "english_marks": 76, "bangla_marks": 81 },
  { "id": 9, "name": "Ivy", "math_marks": 76, "english_marks": 79, "bangla_marks": 73 },
  { "id": 10, "name": "Jack", "math_marks": 95, "english_marks": 92, "bangla_marks": 94 }
]


 return (
  <div>
   {/* <LineChart width={500} height={400} data={mathChart}>
    <XAxis dataKey="name"></XAxis>
    <YAxis></YAxis>
     <Line  dataKey="math_marks" stroke='red'></Line>
     <Line  dataKey="english_marks" stroke='green'></Line>
     <Line  dataKey="bangla_marks" stroke='blue'></Line>
   </LineChart> */}
   <BarChart width={500} height={400} data={mathChart}>
   <XAxis dataKey="name"></XAxis>
   <YAxis></YAxis>
   <Bar dataKey="math_marks" fill="#8884d8" barSize={30}></Bar>
   <Tooltip></Tooltip>
   </BarChart>
  </div>
 );
};

export default Chart;
