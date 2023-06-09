import React, {useContext} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { ThemeContext } from '../../context/ThemeContext';

import { useTheme } from '@emotion/react'

export default function SearchCard({image_src, originName, originAddress}) {
    //const {currentTheme} = useContext(ThemeContext)
    const theme = useTheme()
  return (
    <Card sx={{ minWidth: 70, maxHeight: 120, maxWidth: 120, position: "absolute", bottom:24, left:10, zIndex:"tooltip", opacity: .85,}}>
    {/* <Card sx={{ minWidth: 70, maxHeight: 120, maxWidth: 120, position: "absolute", zIndex:"tooltip", lat:"48.84937095098954", lng:"2.3436817464965713",opacity: .85,}}> */}
      <CardActionArea>
        <CardMedia
          component="img"
          height="70px"
          image={image_src}
          alt="image of location"
        />
        <CardContent sx={{padding:0}}>
          <Typography gutterBottom sx={{whiteSpace: "pre-line", fontSize:'8px', color:'text.primary', padding: '1px 3px', textAlign:'center'}}>
          {originName}<br/>{originAddress}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}