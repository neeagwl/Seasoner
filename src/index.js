import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';



class App extends React.Component{
    state={lat:null,errorMsg:""};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}),
            err=> this.setState({errorMsg:err.message})
        );
    }
    contentRender(){
        if(this.state.lat && !this.state.errorMsg){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        if(!this.state.lat && this.state.errorMsg){
            return <div> Error : {this.state.errorMsg}</div>
        }
        return <Loader message="Please allow me to get you Location."/>;
    }

    render(){
        return <div>{this.contentRender()}</div>;
    };
    
}

ReactDOM.render(<App />, document.querySelector('#root'));