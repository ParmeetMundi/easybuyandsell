import {auth} from './firebase'
import React,{createContext,useState,useEffect} from 'react';
import axios from 'axios'
export const AuthContext=createContext();



// {!currentUser? <Sign/> :<Login />> }

export const CurrentUser = ({children}) => {
    
    const [currentUser, setcurrentUser] = useState(null)
    const [products, setproducts] = useState([ ])
    const [myProducts,setmyProducts]=useState([])
    const [searchProducts, setsearchProducts] = useState([ ])
    const [fetched, setfetched] = useState(6)

     useEffect(() => {
         auth.onAuthStateChanged((e)=>{setcurrentUser(e)
       });
         
         axios.get("/products", { params: { num: 1 } })
         .then((res) => {
             let items = []
             let x
             for (x in res.data) {
                 items.push({
                     "title": res.data[x].name,
                     "description": res.data[x].description,
                     "image": res.data[x].imageUrl,
                     "price": res.data[x].price,
                     "seller": res.data[x].seller,
                     "phone": res.data[x].phone,
                     "email": res.data[x].email
                 })
             }
             setproducts([...products, ...items])
         })
         .catch((e) => { alert(e) })
     }, [])


    return <AuthContext.Provider value={{"currentUser":currentUser,
                                        "products":products,
                                        "setproducts":setproducts,
                                        "searchProducts":searchProducts,
                                        "setsearchProducts":setsearchProducts,
                                        "myProducts":myProducts,
                                        "setmyProducts":setmyProducts,
                                        "fetched":fetched,
                                        "setfetched":setfetched   
                                        
                                        }}>
         {children}
         </AuthContext.Provider>;
}



