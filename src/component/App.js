import React from "react";

 
import Search from "./Search"; 
import ImageList from "./imageList";   
// import Pass from "./Pass";
import Unsplash from "../api/Unsplash";

class App extends React.Component{
    state={images:[]};
  onSearch = async (term)=>{
       const res = await Unsplash.get('/search/photos',{
        params:{
            query:term
        },
       });
    //    console.log(res.data.results, this);
       this.setState({images:res.data.results});
    }
    render(){
    return(
        <div className="ui container" style={{marginTop:'10px'}}>
            <Search onSubmit={this.onSearch}/>
            <div>
            <ImageList images={this.state.images}></ImageList>
            </div>
        </div>
    );
    }
}

export default App;