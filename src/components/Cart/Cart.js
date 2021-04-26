import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Cart = (props) => {
    const { strTeam, strTeamBadge, idTeam } = props.league;
    const classes = useStyles();

    const history = useHistory()

    const showDetails = et => {
        const url = `/cart/${et}`;
        history.push(url);
    }


    return (
        <div className='col-md-4 mb-3'>
            <Card className={classes.root} >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={strTeamBadge}
                        style={{ width: '150px', margin: 'auto', height: '160px' }}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {strTeam}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Sports type: Football
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button className="button0" variant="contained" color="primary" onClick={() => showDetails(idTeam)}>
                      <span className="button"> Details </span> <FontAwesomeIcon icon={faArrowAltCircleRight}/>
                    </Button> 
                </CardActions>
            </Card>
        </div>
    );
};

export default Cart;