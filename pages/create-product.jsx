
import styles from '../styles/CreateProduct.module.scss'
import {FaUpload} from 'react-icons/fa'
import img from '../public/images/watch.png'
import {useState} from 'react'
import Heading from '../components/Heading'

const CreateProduct = () => { 
  
  const [imgg, setImgg] = useState('')
  
  return ( 
      <section className={styles.create_product}>
        <div className={styles.container}>
          <Heading heading={"Create New Products"} />
          <div className={styles.wrapper}>
          <div className={styles.product_img}>
            <input type="file" id="img" name="img" accept="image/*" onChange={(e) => setImgg(e.target.files[0])} className={styles.img_input} />
           {imgg && <img src={URL.createObjectURL(imgg)} />} 
          </div>
          <form className={styles.create_product_form}>
            <div className={styles.form_group}>
              <label htmlFor="title">Title</label>
              <input type="text" placeholder="Enter Product Title" required />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="price">Price</label>
              <input type="number" placeholder="Enter Product Price" required />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="stock">Stock</label>
              <input type="number" placeholder="Enter Product Quantity" required />
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
              <button className={styles.create_btn}>Create</button>
          </form>
          
          </div>
        </div>
      </section>
    ); 
  }; 
  
export default CreateProduct