import { Component } from "react";
import Profile from "./Components/Profile";

class App extends Component {
  constructor() {
    super();
    this.state = { 
      id: 1,
      fullName: "aladin", 
      bio: "biographie", 
      imgSrc: "https://1fid.com/wp-content/uploads/2022/03/photo-de-profil-18-1024x1024.jpg",
      profession: "developpeur web",
      isShow: true
   };
  }
  toggleVisibility=()=>this.setState({isShow:!this.state.isShow})
  render() {
    return (
      <div>
          <button onClick={this.toggleVisibility}>Click</button>
          {this.state.isShow && <Profile  element={this.state}/>}
      </div>
    );
  }
}

export default App;