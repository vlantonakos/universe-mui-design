import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img1 from '../img/image1.jpeg'
import img2 from '../img/img2.png'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const UniImgList = () => {
  return (
    <Box sx={{display:'grid',width:'100%',height:'100vh',backgroundColor:'#5c258d',background:'-webkit-linear-gradient(to right, #5c258d, #4389a2);background:linear-gradient(to right, #5c258d, #4389a2)'}}>
        <Typography variant="h1" sx={{color:'white'}} gutterBottom>
      Images
    </Typography>
    <Box sx={{display:'flex'}}>
    <Card sx={{ maxWidth: 500,mr:'20px' }}>
      <CardMedia
        sx={{ height: 200 }}
        image={img1}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={img2}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
    </Box>
    <ImageList sx={{ width: '100%', height: '100vh' }} cols={3} rowHeight={164}>

    <ImageListItem >
          <img
            src={`${img2}`}
            alt={'img2'}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem >
          <img
            src={`${img1}`}
            alt={'img1'}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem >
          <img
            src={`${img1}`}
            alt={'img1'}
            loading="lazy"
          />
        </ImageListItem>
        

    </ImageList>
  </Box>
  )
}

export default UniImgList