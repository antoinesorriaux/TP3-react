import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Antoine from './PP.jpg';
import Mathieu from './PP_Mathieu.jpg'
import Thomas from './Thomas.jpg'

class Fiche extends Component {

  constructor() {
    super();

    this.state = {
      isBackgroundBlue: true,
      avis: 0,
      count1 : 0,
      count2 : 0,
      count3: 0,
      profilPicture: Antoine,
      firstname: "Antoine",
      lastname: "SORRIAUX",
      birthdate: "06/04/1997"

    }

  }

  changeFiche2(event) {
    this.setState({

      profilPicture: Mathieu,
      avis: this.state.count2 ,
      firstname: "Mathieu",
      lastname: "QUINIOU",
      birthdate: "04/07/1997"

    });
  }

  changeFiche1(event) {
    this.setState({

      profilPicture: Antoine,
      avis: this.state.count1 ,
      firstname: "Antoine",
      lastname: "SORRIAUX",
      birthdate: "06/04/1997"

    });
  }

  changeFiche3(event) {
    this.setState({

      profilPicture: Thomas,
      avis: this.state.count3 ,
      firstname: "Thomas",
      lastname: "BERNARD",
      birthdate: "31/03/1998"

    });
  }

  changeAvis(event){

    if(this.state.firstname == "Antoine"){
      this.setState({

        count1 : this.state.count1 + 1,
        avis : this.state.count1 + 1,

      });
    }
    if(this.state.firstname == "Mathieu"){
      this.setState({

        count2 : this.state.count2 + 1,
        avis : this.state.count2 + 1,

      });
    }
    if(this.state.firstname == "Thomas"){
      this.setState({

      count3 : this.state.count3 + 1,
      avis : this.state.count3 + 1,

      });
    }


  }

  changeColor(event) {

    this.setState({

      isBackgroundBlue: !this.state.isBackgroundBlue,

    });


  }

  render(){

    return(

<div  className="card text-center">

 <div className="card-header">
    <div class="btn-group nav nav-tabs " role="group" aria-label="Basic example">
     <button onClick={this.changeFiche1.bind(this)}  type="button" class="btn btn-secondary">Antoine</button>
     <button onClick={this.changeFiche2.bind(this)} type="button" class="btn btn-secondary">Mathieu</button>
     <button onClick={this.changeFiche3.bind(this)} type="button" class="btn btn-secondary">Thomas</button>
    </div>
 </div>

  <div style={{
    backgroundColor: this.state.isBackgroundBlue ? 'white' : '#3C9BEC' ,
  }} className="card-body">
   <div className="text-center">
   <img src={this.state.profilPicture} className="rounded" alt="Photo de profil"/>
   </div>
   <br/>
  <button onClick={this.changeColor.bind(this)} className="btn btn-primary">Change style</button>


<form>
  <div className="form-group row">
    <label for="staticEmail" className="col-sm-2 col-form-label"><strong>Prénom</strong></label>
    <div className="col-sm-10">
      <input style={{
        color: this.state.isBackgroundBlue ? 'black' : 'white' ,
      }} type="text" readonly className="form-control-plaintext" id="staticEmail" value={this.state.firstname}/>
    </div>
  </div>
  <div className="form-group row">
    <label for="staticEmail" className="col-sm-2 col-form-label"><strong>Nom</strong></label>
    <div className="col-sm-10">
      <input style={{
        color: this.state.isBackgroundBlue ? 'black' : 'white' ,
      }} type="text" readonly className="form-control-plaintext" id="staticEmail" value={this.state.lastname}/>
    </div>
  </div>
  <div className="form-group row">
      <label for="staticEmail" className="col-sm-2 col-form-label"><strong>Date de naissance</strong></label>
      <div className="col-sm-10">
        <input style={{
          color: this.state.isBackgroundBlue ? 'black' : 'white' ,
        }} type="text" readonly className="form-control-plaintext" id="staticEmail" value={this.state.birthdate}/>
      </div>
  </div>
</form>


</div>
  <button onClick={this.changeAvis.bind(this)}  type="button" className="btn btn-success btn-lg btn-block">C'est Super ! Avis : <strong> {this.state.avis} </strong> </button>
</div>

    )

  }
}

export default Fiche;
