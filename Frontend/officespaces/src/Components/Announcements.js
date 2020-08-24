import React ,{Component}from 'react';
import Card from './Card';
import { makeStyles } from '@material-ui/core/styles';


class Announcements extends Component{
    state={
        "Announcements":[],
        "modal":false
    }
    

componentDidMount(){
    const word = 'Token ';
    const token = word.concat(`${localStorage.getItem('Token')}`);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-type","application/json")

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  
 
  redirect: 'follow'
};
      fetch("http://localhost:8000/operations/AllAnnouncements", requestOptions)
      .then(res=>{
         
         return res.json()
      })
      .then(data=>{
          
          this.setState({
              "Announcements":data
          })
          console.log(this.state)
          
        
      }).catch(e=>{
          console.log(e)
      })

    
     
      
      
}

HandleClick = ()=>{
    this.props.history.push('/add_announcement')
    

}

    render(){

        
        return(

            <div>
                 
                <div className="row">
                    <div className="col s12 m7 l7">
                            
                    </div>
                    <div className="col s12  m3 l3">
                        <button class="btn waves-effect waves-light" type="submit" name="action" onClick={this.HandleClick}>Add Announcement
                                <i class="material-icons right">add</i>
                        </button>
                        

                    </div>

                
                </div>
                <div className="row">
            <Card data={this.state.Announcements}/>
            </div>
           
            </div>

        );
    }

}


export default Announcements;