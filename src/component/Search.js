import React from "react";

class Search extends React.Component{
    state = {term:''};
    onInputChange(e){
        this.setState({term:e.target.value});
        console.log("hello");
    }
    onFormSubmit=(event)=>{
       event.preventDefault();
       this.props.onSubmit(this.state.term);
    }

    render(){
    return(
        <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Search</label>
                <input type="text" value={this.state.term} onChange={e =>this.setState({term:e.target.value})}></input>
                </div>
            </form>
        </div>
    );
    }
}

export default Search;