import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid  } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const HomePage = () => {
  const [hasError, setErrors] = useState(false);
  const [airports, setAirports] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226");
      res
        .json()
        .then(res => setAirports(res.states))
        .catch(err => setErrors(err));
    }

    fetchData();
  }, []);

  const classes = useStyles();

  //console.log(airports)
 

  return (
    <>
     { airports.array.forEach(([col1, , col2, , , col3, col4, col5, , col6]) => {
        const cols = [col1, col2, col3, col4, col5, col6];
         <Grid item xs={4}>
          <Card className={classes.root}>
           <CardActionArea>
             <CardMedia
               component="img"
               alt="Airport Images"
               height="140"
               image=""
               title="Airport Images"
             />
             <CardContent>
               {cols.map(c => (
                 <Typography gutterBottom variant="h5" component="h2">
                   {c.col2}
                 </Typography>
               ))}
             </CardContent>
           </CardActionArea>
         </Card>
       </Grid>
      })}
    </> 
  )
}

export default HomePage;
