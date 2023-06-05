import React from "react";
import { DataGrid, GridRowsProp, GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";
export const MuiTable = () => {

    function CutomeToolBar (){
        return(
        <GridToolbarContainer>
            <GridToolbarExport
            csvOptions={{
                fileName: 'ok',
                delimiter: ';',
                utf8WithBom: true,
              }}
              printOptions={{
                hideFooter: true,
                hideToolbar: true,
              }}
            ></GridToolbarExport>
        </GridToolbarContainer>
        )
    }
  const cols = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
      editable: true,
    },
  ];
  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 42,
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      age: 45,
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Arya",
      age: 16,
    },
    {
      id: 6,
      lastName: "Stark",
      firstName: "Arya",
      age: 18,
    },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      age: null,
    },
  ];
  return (
    <div>
      <DataGrid
        rows={rows}
        columns={cols}
        checkboxSelection
        
        
        slots={{
            toolbar: CutomeToolBar,

            
            
        }}
        
        
        

        initialState={{
            pagination:{
              paginationModel:{
                pageSize: 5,
                page: 0,
              }  
            },
           
          sorting: {
            sortModel: [
              { field: "firstName", sort: "desc" },
                { field: "lastName", sort: "asc" },
            ],
          },
        }}
        pageSizeOptions={[5, 10, 25]}
      />
    </div>
  );
};
