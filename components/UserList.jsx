import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import styles from '../styles/UserList.module.scss'
import {FaTrash} from 'react-icons/fa'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import {userRows} from './DummyData'
import Heading from './Heading'
import {useDispatch, useSelector} from 'react-redux'
import {getUsers} from './apiCalls'
export default function UserList() {

const [data, setData] = useState(userRows)

const handleDelete = (id) => {
  setData(data.filter((item) => item.id !== id))
}

const dispatch = useDispatch()

useEffect(() => {
  getUsers(dispatch)
}, [])

const users = useSelector(state => state.user.users)

const columns = [
  { field: 'username', headerName: 'Customer', width: 180, renderCell: (params) => {
      return(
          <div className={styles.username}>
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
        <Heading heading={"Users"} />
        <div className={styles.wrapper}>
          <DataGrid rows={users} columns={columns} getRowId={users => users._id} checkboxSelection disableSelectionOnClick />
        </div>
      </div>
    </section>
  );
}