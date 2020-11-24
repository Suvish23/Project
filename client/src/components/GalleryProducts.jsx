import React ,{useState,useEffect} from 'react';
import ProductsCard from './ProductsCard';
import { Grid } from '@material-ui/core';
import axios from 'axios';


function GalleryProducts() {
  const [allmobiles,setMobiles]=useState([])
useEffect(()=>{
  
  axios
  .get('http://localhost:5000/getProducts')
  .then(res=>{
  console.log(res.data)
  setMobiles(res.data.data)
  }) 
  
},[]);
return (
  <Grid container spacing={4}>
    {
    allmobiles.map((mobile) => {
      return (
        <Grid item xs={12} sm={4} key={mobile.id}>
          <ProductsCard
            title={mobile.title}
            subtitle={mobile.subtitle}
            imgSrc={mobile.imgsrc}
            description={mobile.description}
            id={mobile.id}
          />
        </Grid>
      );
    })}
  </Grid>
);
};
               
export default GalleryProducts;
























// const GalleryProducts = () => {
  //     const allmobiles = [
  //     {
  //         id:'1',
  //         title:"Samsung Galaxy S9 ",
  //         subtitle:"₹31606.00",
  //         imgSrc:"//images.samsung.com/is/image/samsung/in-galaxy-s9-sm-g960-sm-g960fzbdins-frontblue-94068044?$PD_GALLERY_L_SHOP_JPG$ height:",
  //         description:"Key feature may different from Key SpecProduct images, specifications are for representational purpose only",
  //     },
  //     {
  //         id:'2',
  //         title:"Samsung Galaxy S9 plus",
  //         subtitle:"₹48400.00",
  //         imgSrc:"//images.samsung.com/is/image/samsung/in-galaxy-s9plus-sm-g965-sm-g965fzkdins-rblack-109697129?$PD_GALLERY_L_SHOP_JPG$ ",
  //         description:"Key feature may different from Key SpecProduct images, specifications are for representational purpose only",
  //     },
  //     {    
  //         id:'3',  
  //         title:"Samsung Galaxy S10 ",
  //         subtitle:"₹57800.00",
  //         imgSrc:"//images.samsung.com/is/image/samsung/in-galaxy-s10-sm-g973-sm-g973fzkdins-prismblack-207758876?$PD_GALLERY_L_SHOP_JPG$",
  //         description:"Key feature may different from Key SpecProduct images, specifications are for representational purpose only",
  //     },
  //     {
  //         id:'4',
  //         title:"Samsung Galaxy S10 plus",
  //         subtitle:"₹65200.00",
  //         imgSrc:"//images.samsung.com/is/image/samsung/in-galaxy-s10-sm-g975-sm-g975fzwdins-prismwhite-207759188?$PD_GALLERY_L_SHOP_JPG$",
  //         description:"Key feature may different from Key Spec   Product images, specifications are for representational purpose only",
  //     },
  //     {   
  //         id:'5',
  //         title:"Samsung Galaxy S20",
  //         subtitle:"₹70499.00",
  //         imgSrc:"//images.samsung.com/is/image/samsung/in-galaxy-s20-plus-sm-g985-sm-g985fzpdinu-frontbpurple-261486035",
  //         description:"Key feature may different from Key SpecProduct images, specifications are for representational purpose only"
  //     },
  //     {
  //         id:'6',
  //         title:"Samsung Galaxy S20",
  //         subtitle:"₹70499.00",
  //         imgSrc:"//images.samsung.com/is/image/samsung/in-galaxy-s20-plus-sm-g985-sm-g985fzpdinu-frontbpurple-261486035",
  //         description:"Key feature may different from Key SpecProduct images, specifications are for representational purpose only",
  //     },
  //   ];
//   