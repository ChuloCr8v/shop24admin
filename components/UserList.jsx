import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import styles from '../styles/UserList.module.scss'
import {FaTrash} from 'react-icons/fa'
import Link from 'next/link'
import {useState} from 'react'
import {rows} from './DummyData'

export default function UserList() {

const [data, setData] = useState(rows)

const handleDelete = (id) => {
  setData(data.filter((item) => item.id !== id))
}


const columns = [
  { field: 'username', headerName: 'Customer', width: 180, renderCell: (params) => {
      return(
          <div className={styles.username}>
            <img src={params.row.avatar.src} className={styles.user_img} height="40" width="40" />
            <p>
            {params.row.username}
            </p>
          </div>
        )
  }},
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'status', headerName: 'Status', width: 90 },
  { field: 'transactions', headerName: 'Transactions', width: 150 },
  { field: 'actions', headerName: 'Actions', width: 130, renderCell: (params) => {
    return (
        <div className={styles.actions} >
          <Link 
            href={{
              pathname: "/[edit]",
              query: {
                edit: params.row.id,
                name: params.row.name,
                email: params.row.email
              },
            }} 
          >
            <a className={styles.edit}>Edit</a>
          </Link>
          <FaTrash className={styles.icon}
            onClick={() => handleDelete(params.row.id)} 
          />
        </div>
      )
  }},
];

  return (
    <section className={styles.user_list}>
      <div className={styles.container} >
        <h2 className={styles.heading}> Users </h2>
        <div className={styles.wrapper}>
          <DataGrid rows={data} columns={columns} checkboxSelection disableSelectionOnClick />
        </div>
      </div>
    </section>
  );
}