import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import responsive from "./CarouselHelper";
import ImageContainerSmall from "./ImageContainerSmall";
import TableRow from "./TableRow";


function InputDisplayer(props)
{

  function createDef() {

    return(

      <ImageContainerSmall src={"/images/upload.jpg"}/>

    )
    
  }

  function createImage(data) {
    
    if(props.checkIn===false)
    {
      return(<ImageContainerSmall src={"/images/upload.jpg"}/>)
    }
    else if(props.checkIn===true)
    {
      return(<ImageContainerSmall key={data} src={data}/>)
    }
   
  }

  function createOutputImage(data,index)
  {
    
    if(props.checkOut===true)
    {
      return(<ImageContainerSmall key={props.outputArray.outputArray[index]} src={props.outputArray.outputArray[index]}/>)
    }
  }

  function createTable(value,id)
  {
    if(props.checkOut===true)
    {
      return(
       
<TableRow parentProps={props} key={id} id={id}/>

        
      )
    }
  }

    return(

    <div className="mb-4">

          <div className="card my-3 shadow rounded">
            <h5 className="card-header d-flex align-items-center justify-content-between">
              <span>Input image </span>
            </h5>

            <div className="card-body" >
              <div className="row">

              <Carousel responsive={responsive}>

              {(props.checkIn===false)&&(props.checkOut===false)?createDef():(props.imageArray.inputArray.map((data,index)=>createImage(data,index)))}
          
              </Carousel>

              <hr/>

              <Carousel responsive={responsive}>

              {(props.checkIn===false)&&(props.checkOut===false)?null:(props.imageArray.inputArray.map((data,index)=>createOutputImage(data,index)))}
          
              </Carousel>
              
  <div>
                 

<table className="table shadow-sm">


{
(props.checkOut===false)?null:

<thead className="thead-dark">
<tr>
<th scope="col">#</th>
<th scope="col">Name</th>
<th scope="col">Algorithm</th>
<th scope="col">Input Size</th>
<th scope="col">Output Size</th>
<th scope="col">Compression %</th>
</tr>
</thead>

}

<tbody>

  {(props.checkOut===false)?null:(props.imageArray.inputArray.map((value,id)=>createTable(value,id)))}

 </tbody>

</table>
         
                
                </div>
              </div>
            </div>
          </div>

          </div>
)
}


export default InputDisplayer;