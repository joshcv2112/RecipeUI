import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

// Card example pulled from:
// https://material-ui.com/components/cards/#complex-interaction

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.recipe.title}
        subheader={props.recipe.prepTime}
      />
      <CardMedia
        className={classes.media}
        image='https://assets.bonappetit.com/photos/5f1b04ecda927390827b1c79/3:2/w_2560,c_limit/Basically-SaffronSalmon-RecipeB.jpg'
        title={props.recipe.title}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {props.recipe.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
