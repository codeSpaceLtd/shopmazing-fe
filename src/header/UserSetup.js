import React, {Component} from 'react'


class UserSetup extends Component {

  componentDidMount() {
    this.props.setupUser();
  }

  render() {
    return (
      <></>
    )
  }
}

export default UserSetup;
