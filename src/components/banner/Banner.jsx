import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Image=styled(Box)`
background:url(https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80) center/100%  repeat-x #000;
width:100%;
background-repeat: no-repeat;
height:50vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const Heading=styled(Typography)`
font-size:70px;
color:#FFFFFF;
line-height:1;
`

const SubHeading=styled(Typography)`
    font-size:20px;
    background:#FFFFFF;
`
const Banner=()=>{
    return(
    <Image>
       <h2 style={{color:"white",font:"bold"}}>"The Ultimate Resource for Your Blog's: Trends, Strategies, and News"</h2>
       <SubHeading>"Insights & Inspiration"</SubHeading>
    </Image>
    )
}
export default Banner;
