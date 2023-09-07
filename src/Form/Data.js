
import React, { Component } from "react";

class Data extends Component{
    constructor(props){
        super(props)
        console.log(this.props.value);
    }

    render(){
        return(
            <>
                <div className="parentdiv">
                    {this.props.value.map((Element,index) =>{
                        return(
                            <div key={index} className="data">
                                <p>Student's Name: {Element.name} || Department:{Element.department} || Rating: {Element.rating}</p>
                            </div>
                        )
                    })}
                </div>
                <button className="btn" onClick={this.props.togFunc}>Goback</button>
            </>
        )
    }
}

export default Data