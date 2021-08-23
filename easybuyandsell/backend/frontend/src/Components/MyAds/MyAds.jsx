import React, {useContext,useEffect} from 'react'
import './MyAds.css'
import AdItem from '../AdItem/AdItem'
import { Button, Grid } from '@material-ui/core'
import {Link, NavLink} from 'react-router-dom';
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
            { axios.get('/Myadds',{
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
                {
                    myProducts.length > 0 && <h1 className="myads_title">Your Ads</h1>
                }
                <div className="ads_grid">
                    <Grid container justify="center" spacing={4} >
                        {   
                            myProducts.length > 0 
                            ?
                                ( myProducts.map((product, id)=>(
                                    <Grid item key={product.id} xs={12} md={6} lg={4}>
                                        <AdItem product={product}/>
                                    </Grid>
                                )))
                            :
                            <>
                                <div className="no_ad">
                                    <h1>You have not uploaded any Ad</h1>
                                    <p>Start Adding <NavLink exact to="/sell">here</NavLink></p>
                                </div>
                            </>
                        }
                    </Grid>
                </div>
        </div>
    )
}

export default MyAds
