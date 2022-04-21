
import styles from '../styles/product.module.scss'
import img from '../public/images/watch.png'
import {FaProduct, FaCalendar, FaPhone, FaEnvelope, FaMapMarker, FaUpload} from 'react-icons/fa'
import Link from 'next/link'
import {productChartData} from '../components/DummyData'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const EditProduct = (props) => { 
  
  return ( 
      <section className={styles.product}>
       <div className={styles.container}>
        <div className={styles.heading_wrapper}>
          <p className={styles.heading}>Product Details</p>
          <Link href="/create-product">
            <a className={styles.create_btn}>Create Product </a>
          </Link>
        </div>
        <div class={styles.wrapper}>
          <div class={styles.row}>
            <div class={styles.performance}>
              <p className={styles.subheading}>Sales Performance</p>
              <div className={styles.chart_wrapper}>
                <LineChart className={styles.chart} width={400} height={300} data={productChartData} margin={{ top: 5, left: 20, bottom: 5, right: 20 }}>
                    <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <Tooltip />
                 </LineChart>
              </div>
            </div>
            <div className={styles.details_wrapper}>
              <p className={styles.subheading}>Product Details </p>
              <div className={styles.detail}>
                <img src={img.src} height="100" width="90" alt={props.name} />
                <p className={styles.name}> {props.name} </p>
              </div>
              <div className={styles.detail}>
                <p className={styles.key}>id:</p>
                <p className={styles.value}>{props.id}</p>
              </div>
              <div className={styles.detail}>
                <p className={styles.key}>Price:</p>
                <p className={styles.value}>{props.price} </p>
              </div>
              <div className={styles.detail}>
                <p className={styles.key}>Sales:</p>
                <p className={styles.value}>2280</p>
              </div>
              <div className={styles.detail}>
                <p className={styles.key}>Id:</p>
                <p className={styles.value}>{props.id}</p>
              </div>
              <div className={styles.detail}>
                <p className={styles.key}>Status:</p>
                <p className={styles.value}>{props.status}</p>
              </div>
              <div className={styles.detail}>
                <p className={styles.key}>Active:</p>
                <p className={styles.value}>Yes</p>
              </div>
            </div>
          </div>
          <div className={styles.edit}>
            <p className={styles.subheading}>Edit Product</p>
            <form className={styles.product_edit_form}>
              <div className={styles.form_group}>
                <label htmlFor="price">Price:</label>
                <input type="text" placeholder={props.price} />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="name">Title:</label>
                <input type="text" placeholder={props.name} />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="name">Status:</label>
                <select>
                  <option>In Stock </option>
                  <option>Out of Stock </option>
                </select>
              </div>
              <div className={styles.form_group}>
                <label htmlFor="name">Active:</label>
                <select>
                  <option>Yes </option>
                  <option>No</option>
                </select>
              </div>
              <button className={styles.submit_btn}>Submit </button>
            </form>
          </div>
        </div>
       </div>
      </section>
    ); 
  }; 
  
export default EditProduct

export async function getServerSideProps(context) {
  return {
    props: {
      id: context.query.id,
      name: context.query.name,
      stock: context.query.stock,
      status: context.query.status,
      price: context.query.price,
    },
  };
}
