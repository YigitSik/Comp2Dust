import React from 'react'
import {Card,Accordion,Button} from 'react-bootstrap'
import $ from 'jquery'
import Info from './Info'

function SelectBox (){

    function handleChange(e)
    {

        // console.log($(e.target).val())
        
    }
    

        return(
            <div>
                <div >   

                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Info & Custom Configurations
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                        
                        <Info/>

                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Options
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        
                        <div className="alert alert-info  text-center my-1">

                    Commands are for advanced users. You can check the Info button above too see manuals or you can leave it empty for default values.

                    </div>
                
                    <div className="col-md-6 offset-md-1" id="optionBox">
                                        

                           <div className="form-row d-flex">

                                <div className="form-group col-6 mb-3">
                                    <label><h6>JPG Engine</h6></label>
                                    <select className="form-control" name="JPG" onChange={handleChange} >
                                        <option defaultValue="mozjpeg">mozjpeg</option>
                                        <option value="jpegtran">jpegtran</option>
                                        <option value="webp">webp</option>
                                        <option value="guetzli">guetzli</option>
                                        <option value="jpegRecompress">jpegRecompress</option>
                                        <option value="jpegoptim">jpegoptim</option>
                                    </select>
                                </div>

                                <div className="form-group col-12 mb-3 mx-3" >
                                    <label><h6>Command</h6></label>
                                    <input className="form-control" type="text" name="commandJPG" id="commandJPG" onKeyUp={handleChange} />
                                </div>

                            </div>

                            <div className="form-row d-flex">
                                <div className="form-group col-6 mb-3">
                                    <label><h6>PNG Engine</h6></label>
                                    <select className="form-control" name="PNG" onChange={handleChange}>
                                        <option defaultValue>pngquant</option>
                                        <option value="optipng">optipng</option>
                                        <option value="pngout">pngout</option>
                                        <option value="webp">webp</option>
                                        <option value="pngcrush">pngcrush</option>
                                    </select>
                                </div>

                                <div className="form-group col-12 mb-3 mx-3" >
                                    <label><h6>Command</h6></label>
                                    <input className="form-control" type="text" name="commandPNG" id="commandPNG" onKeyUp={handleChange} />
                                </div>

                            </div>

                            <div className="form-row d-flex">
                                <div className="form-group col-6 mb-3">
                                    <label><h6>SVG Engine</h6></label>
                                    <select className="form-control" name="SVG" >
                                        <option defaultValue>svgo</option>
                                    </select>
                                </div>

                                <div className="form-group col-12 mb-3 mx-3" >
                                    <label><h6>Command</h6></label>
                                    <input className="form-control" type="text" name="commandSVG" id="commandSVG" onKeyUp={handleChange} />
                                </div>

                            </div>

                            <div className="form-row d-flex">
                                <div className="form-group col-6 mb-3">
                                    <label><h6>GIF Engine</h6></label>
                                    <select className="form-control" name="GIF" >
                                        <option defaultValue>gifsicle</option>
                                        <option value="giflossy">giflossy</option>
                                        <option value="gif2webp">gif2webp</option>
                                    </select>
                                </div>

                                <div className="form-group col-12 mb-3 mx-3" >
                                    <label><h6>Command</h6></label>
                                    <input className="form-control" type="text" name="commandGIF" id="commandGIF" onKeyUp={handleChange} />
                                </div>

                            </div>
                        
                    </div>
                        
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>

                    
                </div>
            </div>
        )  
    
}

export default SelectBox;