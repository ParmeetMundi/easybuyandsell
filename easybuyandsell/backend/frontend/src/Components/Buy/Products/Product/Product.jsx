import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, Button} from '@material-ui/core';
import useStyles from './styles';
import {Link} from 'react-router-dom';

const Product = (props) => {
    const classes = useStyles();
     
    return (
        <>   
            <div className={classes.toolbar}/>
            <Card className={classes.root}>
                <CardMedia component="img" src={"/"+props.product.image[0]} title={props.product.title} className={classes.media}/>
                <CardContent>
                    <div className={classes.cardcontent}>
                        <Typography variant="h5" gutterBottom className={classes.title}>
                            {props.product.title}
                        </Typography>
                        <Typography variant="h6" className={classes.price}>
                            {props.product.price}
                        </Typography>
                    </div>
                    <Typography variant="subtitle1">{props.product.description}</Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.cardactions}>
                    <div className={classes.cardactionitem2}>
                        <Button 
                        variant="contained"
                        color= "secondary"
                        ><Link to={{pathname:"/checkout",state:{id:props.id} }} className={classes.checkoutBtn}>Checkout</Link></Button>
                    </div>
                </CardActions>
            </Card>
        </>
    )
}

export default Product
