import { Component} from "react";

class Profile extends Component {
    constructor(props) {
        super(props);
      this.state={count: 0}
    }
    
    componentDidMount() {
        const intervalId = setInterval(() => {
          this.setState(prevState => {
            return {
              count: this.state.count + 1,
            };
          });
        }, 1000);
      }
    
      componentWillUnmount(){
        clearInterval(this.intervalId);
      }
    
    render() {
       
        return (
            <div>
                
                    <h2>{this.props.element.fullName}</h2>
                    <h3>{this.props.element.bio}</h3>
                    <img src={this.props.element.imgSrc} alt="404" />
                    <p>{this.props.element.profession}</p>
                    <p>The component has been rendered for {this.state.count} seconds</p>
                
            </div>
        );
    }
}

export default Profile;