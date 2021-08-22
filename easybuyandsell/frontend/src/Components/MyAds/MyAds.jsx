import React, {useContext,useEffect} from 'react'
import './MyAds.css'
import AdItem from '../AdItem/AdItem'
import { Button, Grid } from '@material-ui/core'
import axios from 'axios'
import { AuthContext } from '../Firebase/currentUser'
import { auth } from '../Firebase/firebase'


function MyAds() {
    const { myProducts,setmyProducts } = useContext(AuthContext)
  //  const {} =useContext(AuthContext)

    useEffect(() => {
        //return  () => {
            //console.log(auth.currentUser.uid)
            if(auth.currentUser!=undefined)
            { axios.get('http://localhost:8080/Myadds',{
                params:{id:auth.currentUser.uid,
                college:"Thapar University"}
            }).then((result)=>{
               if(result.data==="Error") 
               throw 'Error'
               //console.log(result.data)
               setmyProducts([...(result.data)])
               console.log(myProducts)        
            }).catch((e)=>alert(e))
        }      //  };
    },[auth.currentUser])


    return ( 
        <div className="myads_container">
            <div className="ads_grid">
                <h1 className="ads_grid_title">Your Ads</h1>
                <Grid container justify="center" spacing={4}>
                    {   
                        myProducts.length > 0 ?
                       ( myProducts.map((product, id)=>(
                            <Grid item key={product.id} lg={12}>
                                <AdItem product={product}/>
                            </Grid>
                        )))
                        :
                        <h1>No Ads</h1>
                    }
                </Grid>
            </div>
            {/* <div className="bill_container">
                <h1>Your total Ad amount is: 56000</h1>
            </div> */}
        </div>
    )
}

export default MyAds
