import React from "react";

class userClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      userInfo: {
        name: "unknown",
        location: "xyz",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    console.log(this.state.userInfo);
    const { name, location } = this.state.userInfo;

    return (
      <>
        <h3>name: {name}</h3>
        <h3>location: {location}</h3>
      </>
    );
  }
}

export default userClass;
