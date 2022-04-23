import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import styles from '../styles/ProductList.module.scss'
import {FaTrash} from 'react-icons/fa'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import {productRows} from './DummyData'
import Heading from './Heading'
import {getProducts} from './apiCalls'
import {useDispatch, useSelector} from 'react-redux'



export default function ProductList() {

const [data, setData] = useState('')

const handleDelete = (id) => {
  setData(data.filter((item) => item.id !== id))
}

const dispatch = useDispatch()

 let products = useSelector(state => state.product.products)
  console.log(products)
useEffect(() => {
  getProducts(dispatch)
  setData(products)
}, [dispatch])


const columns = [
  { field: 'name', headerName: 'Product', width: 250, renderCell: (params) => {
      return(
          <div className={styles.productname}>
            <img src={params.row.img.src} className={styles.product_img} height="40" width="40" />
            <p>
            {params.row.name}
            </p>
          </div>
        )
  }},
  { field: 'stock', headerName: 'Stock', width: 130 },
  { field: 'status', headerName: 'Status', width: 150 },
  { field: 'price', headerName: 'price', width: 130 },
  { field: 'actions', headerName: 'Actions', width: 200, renderCell: (params) => {
    return (
        <div className={styles.actions} >
          <Link 
            href={{
              pathname: "/product",
              query: {
                id: params.row.id,
                name: params.row.name,
                stock: params.row.stock, 
                status: params.row.status, 
                price: params.row.price, 
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
    <section className={styles.product_list}>
      <div className={styles.container} >
        <Heading heading={"Product Details"} />
        <div className={styles.wrapper}>
          <DataGrid rows={products} columns={columns} checkboxSelection disableSelectionOnClick />
        </div>
      </div>
    </section>
  );
}