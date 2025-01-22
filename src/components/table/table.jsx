import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { database } from '../../assets/fitebase';
import { ref, onValue, update, remove } from 'firebase/database';
import './Admin.css';

const AdminTable = () => {
  const [requests, setRequests] = useState([]);

  // Стили для DataTable
  const tableCustomStyles = {
    header: {
      style: {
        minHeight: '56px',
              backgroundColor: '#000000',
              color: '#FFFFFF'
      },
    },
    headRow: {
      style: {
        backgroundColor: '#121212',
              color: '#FFFFFF'
        
      },
    },
      rows: {
          style: {
            color: 'white',
            backgroundColor: '#121212',
            '&:hover': {
              backgroundColor: '#525252'
            }
          },
          stripedStyle: {
            color: 'black',
            backgroundColor: '#F2F2F2'
          }
        },
      pagination: {
          style: {
              backgroundColor: '#121212',
              color: 'white',
              fill: 'white'
          },
          pageButtonsStyle: {
        color: 'white',
        fill: 'white',
        backgroundColor: 'transparent',
        '&:disabled': {
          cursor: 'unset',
          color: '',
          fill: '#919191',
        },
        '&:hover:not(:disabled)': {
          backgroundColor: '#525252',
        },
        '&:focus': {
          outline: 'none',
          backgroundColor: '#919191',
        },
      },
      }
    
    
  };

 

  // Получение данных из Firebase
  useEffect(() => {
    const requestsRef = ref(database, 'заявки');
    onValue(requestsRef, (snapshot) => {
      const data = snapshot.val() ?? {};
      const requestsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key]
      }));
      setRequests(requestsArray);
    });
  }, []);

  // Обработчики изменения статуса и удаления заявки
  const handleStatusChange = (id, status) => {
    const statusRef = ref(database, `заявки/${id}`);
    update(statusRef, { статус: status });
  };

  const handleDeleteRequest = (id) => {
    const requestRef = ref(database, `заявки/${id}`);
    remove(requestRef);
  };

  // Колонки для DataTable
  const columns = [
    { name: 'Название', selector: row => row.название, sortable: true },
    { name: 'Автор', selector: row => row.автор, sortable: true },
    { name: 'Состояние', selector: row => row.состояние, sortable: true },
    { name: 'Дата', selector: row => row.дата, sortable: true },
    { name: 'Категория', selector: row => row.категория, sortable: true },
    { name: 'Статус', selector: row => row.статус, sortable: true, cell: row => (
      <select className='select-container' value={row.статус} onChange={(e) => handleStatusChange(row.id, e.target.value)}>
        <option value="новая">Новая</option>
        <option value="отклонена">Отклонена</option>
        <option value="в обработке">В обработке</option>
        <option value="выполнена">Выполнена</option>
      </select>)},
    { name: 'Действия', cell: row => (
      <>
        <button className='button-delete' onClick={() => handleDeleteRequest(row.id)}>Удалить</button>
      </>
    )}
  ];

  return (
    <div className="admin-table-container">
        <DataTable
            title="Заявки Пользователей"
            columns={columns}
            data={requests}
            defaultSortField="дата"
            defaultSortAsc={false}
            pagination
            paginationPerPage={10}
            paginationRowsPerPageOptions={[5, 10, 15]}
            customStyles={tableCustomStyles}
        />
    </div>
);
};

export default AdminTable;