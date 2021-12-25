import React from 'react'
import MaterialTable from 'material-table'

function TableUser() {
    const data = [
        {ID:'01',Name:'Hà Nội',pass:'123456',per:Math.floor(Math.random() * 90 + 10)},
        {ID:'02',Name:'Thái Bình',pass:'123456',per:Math.floor(Math.random() * 90 + 10)},
        {ID:'03',Name:'Lào Cai',pass:'123456',per:Math.floor(Math.random() * 90 + 10)},
        {ID:'04',Name:'Nam Định',pass:'123456',per:Math.floor(Math.random() * 90 + 10)},
        {ID:'05',Name:'Bắc Ninh',pass:'123456',per:Math.floor(Math.random() * 90 + 10)},
        {ID:'06',Name:'Hồ Chí Minh',pass:'123456',per:Math.floor(Math.random() * 90 + 10)},
        {ID:'07',Name:'Hưng Yên',pass:'123456',per:Math.floor(Math.random() * 90 + 10)},
        {ID:'08',Name:'Vũng Tàu',pass:'123456',per:Math.floor(Math.random() * 90 + 10)},
        {ID:'09',Name:'Quảng Ninh',pass:'123456',per:Math.floor(Math.random() * 90 + 10)},
        {ID:'10',Name:'Đà Nẵng',pass:'123456',per:Math.floor(Math.random() * 90 + 10)},
    ];
    const columns =[
        {title:'ID User', field:'ID'},
        {title:'Tỉnh/Thành phố', field:'Name'},
        {title:'Password', field:'pass'},
        {title:'Phần trăm hoàn thành', field:'per'}
    ];
    return (
        <div>
            <h1></h1>
            < MaterialTable
                title={"Bảng quản lý A2"}
                columns={columns}
                data={data}
                actions={[
                    {
                        icon: 'lock',
                        tooltip: 'Disable User',
                        onClick: (event, rowData) => alert("You saved " + rowData.name)
                    },
                    rowData => ({
                        icon: 'delete',
                        tooltip: 'Delete User',
                        onClick: (event, rowData) => alert("You want to delete " + rowData.name),
                        
                })]}
                options={{
                    actionsColumnIndex: -1,
                    filtering: true,
                    search:false,
                    headerStyle:{background:'rgb(58, 199, 241)',color:'#fff'},
                    
                }}
            />
        </div>
    )
}

export default TableUser
