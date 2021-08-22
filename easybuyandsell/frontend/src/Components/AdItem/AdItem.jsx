import React, {useState} from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, Button} from '@material-ui/core';
import useStyles from './styles';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function AdItem(props) {
    const classes = useStyles();
    const [open, setopen] = useState(false);

    const handleDialogOpen = () => {
        setopen(true)
    }

    const handleDialogClose = () => {
        setopen(false)
    }

    return (
        <>   
            <div className={classes.toolbar}/>
            <Card className={classes.root}>
                <CardMedia component="img" src={"http://localhost:8080/"+props.product.image[0]} title={props.product.title} className={classes.media}/>
                <CardContent>
                    <div className={classes.cardcontent}>
                        <Typography variant="h5" gutterBottom className={classes.title}>
                            {props.product.title}
                        </Typography>
                        <Typography variant="h6" className={classes.price}>
                            ₹ {props.product.price}
                        </Typography>
                    </div>
                    <Typography variant="subtitle1">{props.product.description}</Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.cardactions}>
                    <div className={classes.cardactionitem2}>
                        <Button className={classes.removebtn} endIcon={<RemoveShoppingCartIcon />} onClick={handleDialogOpen}>Remove from cart</Button>
                    </div>
                    <Dialog
                        open={open}
                        onClose={handleDialogClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description">

                        <DialogTitle id="alert-dialog-title">{"Do you want to remove this Ad?"}</DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            By clicking YES your Ad will be permanently deleted from our database
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button color= "secondary" onClick={handleDialogClose}>
                            No
                        </Button>
                        <Button color= "secondary" onClick={handleDialogClose} autoFocus>
                            Yes
                        </Button>
                        </DialogActions>
                    </Dialog>
                </CardActions>
            </Card>
        </>
    )
}

export default AdItem
