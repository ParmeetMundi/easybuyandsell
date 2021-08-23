import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=> ({
    root: {
        maxWidth: '480px',
        margin: theme.spacing(2),
        textDecoration: 'none',
        backgroundColor: '#eeeeee',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        [theme.breakpoints.down('md')]: {
            maxWidth: '100%'
          },
    },
    media: {
        borderBottom: '1px solid #616161',
        minHeight: '260px',
        objectFit: 'cover'
    },
    cardcontent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardactions: {
        display: 'flex',
        alignItems: 'center',
       
    },
    cardactionitem1: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start' 
    },
    cardactionitem2: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end' 
    },
    title: {
        fontWeight: 'bold',
        fontFamily :'sans-serif',
    },
    price: {
        fontSize: '24px',
        fontWeight: 'bolder',
        fontStyle: 'italic',
    },
    removebtn:{
        color: '#ffffff',
        backgroundColor: '#3f51b5',
        textTransform: 'inherit',
        fontSize: '18px',
        fontStyle: 'italic',
        borderTop: '1px solid grey',
        width: '100%',
        "&:hover": {
            color: '#3f51b5',
            backgroundColor: "#ffffff"
        }
    }
}))