import React from 'react';
import Dropdown from 'react-dropdown';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            user:{},
            repos:[],
            gists:[]
        }

        
        this.getUser()
        this.getRepos()
    }

    getUser=()=>{

        fetch('https://api.github.com/users/adujic')
            .then(response => response.json())
            .then(
                data => this.setState({ user: data})
              )
            .catch(
                //console.log("err")
            );
    }

    getRepos=()=>{
        fetch('https://api.github.com/users/adujic/repos')
            .then(response => response.json())
            .then(
                data => this.setState({ repos: this.toDropdown(data)})
              )
            .catch(
                //console.log("err")
            );

            
    }

    getGists=()=>{
        fetch('https://api.github.com/users/adujic/gists')
            .then(response => response.json())
            .then(
                data => this.setState({ repos: this.toDropdown(data)})
              )
            .catch(
                //console.log("err")
            );

            
    }

    toDropdown(data){
        var dt =[]
        for(var i=0; i<data.length; i++){
            dt.push(data[i].name)
        }
        return dt;
    }

    render(){
    return(
        <div>
            <div className="page-title">Home</div>
            <div className="w3-card-2  w3-margin w3-half w3-middle">
                <img className ="w3-half w3-margin" src ={this.state.user.avatar_url} width="225px"></img>
                
                <div className="w3-margin">
                    <h3 className="w3-border-bottom w3-bolder">{this.state.user.login}</h3>
                    <p className="w3-left-align w3-text-grey"> Bio </p>
                    <table>
                        <tbody>
                        <tr>
                            <td className=" w3-padding w3-left-align">Name:</td>
                            <td className=" w3-padding">{this.state.user.name}</td>
                        </tr>
                        <tr>
                            <td className=" w3-padding w3-left-align">Bio:</td>
                            <td className=" w3-padding">{this.state.user.bio}</td>
                        </tr>
                        </tbody>
                    </table>
                    <p className="w3-left-align">Repo list</p>
                    <Dropdown options={this.state.repos} placeholder="Select"></Dropdown>
                    
                    <p className="w3-left-align">Gist list</p>
                    <Dropdown options={this.state.gists} placeholder="Select"></Dropdown>
                </div>
                
            </div>
        </div>
    );
    }
}

// function getData(){
//     var x;
//     fetch('https://api.github.com/users/adujic')
//               .then(response => response.json())
//               .then(
//                   data => user = data
//                 )
//               .catch(
//                   //this.setState({ userFound:false})
//                   //console.log("err")
//               );
// }
export default Home;