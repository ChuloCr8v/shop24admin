import avatar from '../public/images/avatarr.jpg' 
import img from '../public/images/watch.png' 
export const userRows = [
  { id: 1, name: 'John Snow', avatar: avatar,  email: 'johnsnow@gmail.com', status: 'active', transactions: '$20,800'},
  { id: 2, name: 'Ada Smith', avatar: avatar,  email: 'Ada@gmail.com', status: 'active', transactions: '$120,250'},
  { id: 3, name: 'Moon Zhun', avatar: avatar,  email: 'Moon@gmail.com', status: 'active', transactions: '$10,500'},
  { id: 4, name: 'Rick Chad', avatar: avatar,  email: 'Ricky@gmail.com', status: 'inactive', transactions: '$200,560'},
  { id: 5, name: 'Banny Withow', avatar: avatar,  email: 'Banny@gmail.com', status: 'suspended', transactions: '$189,000'},
]; 

export const productRows = [
  { id: 6, name: 'Richard Mille Wristwatch', img: img,  stock: 25, status: 'in stock', price: '$20,800'},
  { id: 7, name: 'Brown winter jacket', img: img,  stock: 50, status: 'in stock', price: '$500'},
  { id: 8, name: 'Luxury LV Bag', img: img,  stock: 0, status: 'out of stock', price: '$1000'},
  { id: 9, name: 'Adidas Sneakers', img: img,  stock: 5, status: 'in stock', price: '$580'},
  { id: 10, name: 'YSL slides', img: img,  stock: 33, status: 'suspended', price: '$180'},
];


 export const productChartData = [ 
   {
    month: 'Jan',
    sales: 40000
  }, 
  {
    month: 'feb',
    sales: 45000
  }, 
  {
    month: 'March',
    sales: 30000
  }, 
  {
    month: 'April',
    sales: 60000
  }, 
];