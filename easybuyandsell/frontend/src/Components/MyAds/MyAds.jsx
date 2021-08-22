import React, {useContext} from 'react'
import './MyAds.css'
import AdItem from '../AdItem/AdItem'
import { Button, Grid } from '@material-ui/core'
import axios from 'axios'
import { AuthContext } from '../Firebase/currentUser'


function MyAds() {
    const { products } = useContext(AuthContext)
    return (
        <div className="myads_container">
            <div className="ads_grid">
                <h1 className="ads_grid_title">Your Ads</h1>
                <Grid container justify="center" spacing={4}>
                    {
                        products.length > 0 ?
                        products.map((product, id)=>(
                            <Grid item key={product.id} lg={12}>
                                <AdItem product={product}/>
                            </Grid>
                        ))
                        :
                        <h1>No Ads</h1>
                    }
                </Grid>
            </div>
            <div className="bill_container">
                <h1>Your total Ad amount is: 56000</h1>
            </div>
        </div>
    )
}

export default MyAds
