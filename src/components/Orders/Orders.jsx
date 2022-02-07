import React,{ useState,useEffect } from 'react';
import { db } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import Order from '../Order/Order';
import "./orders.scss"


function Orders() {


const [{cart, user}, dispatch] = useStateValue();
const [orders, setOrders] = useState([]);

useEffect (() =>{
    if(user) {  //check if user exist
        db
        .collection('users')               //in databse , find the user
        .doc(user?.uid)                    //specific the user by userid
        .collection('orders')              //get all orders under the user id
        .orderBy('created', 'desc')        //order by time desc, newest on the top
        .onSnapshot(snapshot => (               //create snapshot  for each time 
            setOrders(snapshot.docs.map(doc => ({          //maping through all orders and put order info into the data()/.
                id: doc.id,
                data: doc.data()
            })))
        ))
    } else{
        setOrders ([])
    }

}, [user] )


  return (
  <div className='orders'>
      <h1>Your Orders</h1>


    <div className="orderContainer">
        {orders?.map(order => (
            <Order order={order}/>
        ))}

    </div>
  </div>
  
  );
}

export default Orders;
