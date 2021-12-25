import React from 'react'
import MaterialTable from 'material-table'


function TableSearch() {
    const data = [
        {id:"01",address:'Hà Nội',sum:1000},
        {id:'02',address:'Thái Bình',sum:1000},
        {id:'03',address:'Lào Cai',sum:1000},
        {id:'03',address:'Hà Nội',sum:1000},
        {id:'03',address:'Hà Nội',sum:1000},
        {id:'03',address:'Hà Nội',sum:1000},
        {id:'03',address:'Hà Nội',sum:1000},
    ]
    const columns =[
        {title:'CMND', field:'id'},
        {title:'Địa chỉ', field:'address'},
        {title:'Tổng dân số',field:'sum'}
    ];
    return (
        <div>
            <h1></h1>
            < MaterialTable
                title={"Bảng dân số"}
                columns={columns}
                data={data}
                options={{
                    actionsColumnIndex: -1,
                    filtering: true,
                    
                    headerStyle:{background:'rgb(58, 199, 241)',color:'#fff'}
                }}
            />
        </div>
    )
}

export default TableSearch
