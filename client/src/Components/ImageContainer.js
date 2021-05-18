import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {responsiveMain} from "./CarouselHelper";
import ReactCompareImage from 'react-compare-image';





function ImageContainer(props)
{


  function createDef()
  {
    return(<ReactCompareImage id="compare"  leftImage="/images/upload.jpg" rightImage="/images/upload.jpg" />)
  }


  function createImage(data,index) {         
    
    if((props.checkIn===false)&&(props.checkOut===false))
    {
      return(<ReactCompareImage  leftImage="/images/upload.jpg" rightImage="/images/upload.jpg" />)
    }
    else if((props.checkIn===true)&&(props.checkOut===false))
    { 
      return(<ReactCompareImage key={data} leftImage={data} rightImage={"/images/black.jpg"} />)
    }
    else if((props.checkIn)&&(props.checkOut))
    { 
      return(<ReactCompareImage key={data} leftImage={data} rightImage={props.outputArray.outputArray[index]} />)
    }

  }

   return(

        <div className="col-lg-8 mb-4 rounded" >
        <div className="rounded card shadow-lg" id="mainCard">
      <h4 className="card-header">Image Gallery</h4>

      <div className="gallery">
      <Carousel responsive={responsiveMain} swipeable={false} draggable={false}>
      {
       (props.checkIn===false)&&(props.checkOut===false)?createDef():(props.imageArray.inputArray.map((data,index)=>createImage(data,index)))
      }
      </Carousel>

      </div>
      
        </div>
        </div>
        )

  }



export default ImageContainer;