import React from 'react';

import { Link} from "react-router-dom";
import About from './About';


class Search extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            searchText:'',
            searchRes:{},
            userFound:null
        }
    }

    handleChange=(evt)=>{
        this.setState({searchText:evt.target.value})
      }
      
      search=()=>{
          console.log(this.state.searchText)
          //this.setState({show:this.state.value})

          fetch('https://api.github.com/users/'+this.state.searchText)
              .then(response => response.json())
              .then(
                  data => this.setState({ searchRes: data})
                )
              .catch(
                  this.setState({ userFound:false})
                  //console.log("err")
              );
      }

    render(){
        return(
            <div>
                <div className="page-title">Search profiles</div>
                <div >
                    <input type="text" placeholder="Insert search term ..." className="search-box" value={this.state.searchText} onChange={evt => this.handleChange(evt)}></input>
                    <input type="button" className="my-button" type="submit" value="Search" onClick={this.search} />
                </div>
                <div>
                    {this.state.userFound === false &&this.state.searchRes.login ===null &&
                        <p style={{color:"grey"}}> No users found </p>
                    }

                    {this.state.searchRes.login !=null &&
                        
                        <div style={{cursor:"pointer"}}>           
                            <Link to="/about" params={{userID: "123"}}>
                             User {this.state.searchRes.login} found. Click for more info
                            </Link>
                        </div>
                        
                    }
                </div>
            </div>
        );
    }
}


export default Search;