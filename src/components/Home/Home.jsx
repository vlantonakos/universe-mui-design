import { MouseParallax } from "react-just-parallax";
import meteor from '../../img/meteor.png'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import uni from '../../img/uni.jpg'
import './home.css'


const Home = () => {
  return (
    <Box sx={{display:'flex',width:'100%',height:'100vh',backgroundImage:`url(${uni})`}}>
      <Box sx={{display:'grid'}}>
    <Typography variant="h1" component="h1" sx ={{color:'white'}} gutterBottom>
      Exploring the <Typography variant="h1"className="purple">Wonders of the Universe</Typography>
    </Typography>

    <Typography variant="h2" component="h2" sx ={{color:'white'}} gutterBottom>
      Journey into the <Typography variant="h2"className="purple">Vastness of Space and Time</Typography>
    </Typography>
    </Box>

    <Box sx={{width:'50vh',height:'50vh',justifyContent:'center',textAlign:'center'}}>
      <MouseParallax>
        <img src={meteor} alt="meteor"/>
      </MouseParallax>
    </Box>
    <div class='icon-scroll'></div>
    </Box>
  )
}

export default Home