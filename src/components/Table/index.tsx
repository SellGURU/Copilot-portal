import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams, } from '@mui/x-data-grid';
import { publish, subscribe } from '@/utils/event';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];


interface DataTableProps {
  applyData:() => Array<PatientListData>
}

export default function DataTable(props:DataTableProps) {
  const [rows,setRows] = React.useState(props.applyData())
  const resolveWith = (par:number) => {
    return window.innerWidth * par /100 >= 80 ? window.innerWidth * par /100 : 80
  }
  const cityColums:GridColDef[] = [
    { field: 'name', headerName: 'City Name', width: resolveWith(13) },
    { field: 'membersLength', headerName: 'Number of Members', width: resolveWith(10),align:'center' },
    { field: 'heartRate', headerName: 'Heart Rate (AVG)', width: resolveWith(10),headerAlign:'center' ,align:'center'},
    { field: 'bloodPressure', headerName: 'Blood Pressure(AVG)', width:resolveWith(12),type:'string',resizable:true,headerAlign:'center',align:'center' },
    { field: 'temperature', headerName: 'Temperature(AVG)', width:resolveWith(12)  ,headerAlign:'center',align:'center'},
    { field: 'respirationRate', headerName: 'Respiration Rate(AVG)', width: resolveWith(12),headerAlign:'center',align:'center' },
    { field: 'spo2', headerName: 'SPO2(AVG)', width:resolveWith(8),align:'center',headerAlign:'center' },
  ]
  const patientColums:GridColDef[] =[
    { field: 'patientName', headerName: 'Patient Name', width: resolveWith(8) },
    { field: 'memberId', headerName: 'Member Id', width: resolveWith(5),align:'center',headerAlign:'center' },    
    { field: 'age', headerName: 'Age', width: resolveWith(3),align:'center',headerAlign:'center' },
    { field: 'sex', headerName: 'Sex', width: resolveWith(1),align:'center',headerAlign:'center' },
    { field: 'weight', headerName: 'Weight', width: resolveWith(2),align:'center',headerAlign:'center' },
    { field: 'enrollDate', headerName: 'Enroll Date', width: resolveWith(6),align:'center',headerAlign:'center' },
    { field: 'lastFollowUp', headerName: 'Last Follow-up', width: resolveWith(5),align:'center',headerAlign:'center' },
    { field: 'status', headerName: 'Status', width: resolveWith(4),align:'center',headerAlign:'center' },
    { field: 'heartRate', headerName: 'Heart Rate', width: resolveWith(3),align:'center',headerAlign:'center' },
    { field: 'bloodPressure', headerName: 'Blood Pressure', width: resolveWith(6),align:'center',headerAlign:'center' },
    { field: 'temperature', headerName: 'Temperature', width: resolveWith(3),align:'center',headerAlign:'center' },
    { field: 'respirationRate', headerName: 'Respiration Rate', width: resolveWith(6),align:'center',headerAlign:'center' },
    { field: 'SPO2', headerName: 'SPO2', width: resolveWith(3),align:'center',headerAlign:'center' }
  ]
  subscribe('mapChange',() => {
    setRows(props.applyData())
  })  
  // React.useEffect(() => {
  //   publish('mapChange',{})
  //   setRows()
  // },[])  
  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={ patientColums }
        sx={{
          border: 0,
        }}
        // getCellClassName={}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 25 },
          },
        }}
        // autoHeight
        density='standard'
        
        pageSizeOptions={[]}
        // checkboxSelection
      >
      </DataGrid>
    </div>
  );
}