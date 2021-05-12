import React from 'react';
import KegList from './KegList';
import NewKeg from './NewKeg'
import KegDetail from './KegDetail'

class NewKegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null
    };
  }

  handleClick = () => {
    if(this.state.selectedKeg === null) {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    } else {
      this.setState(() => ({
        formVisibleOnPage: false,
        selectedKeg: null
      }));
    }
  }

  handleAddingNewKegs = (newKeg) => {
    const newKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newKegList,
      formVisibleOnPage: false
    })
  }

  handleSelectKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(
      (keg) => keg.id === id
    )[0]
    this.setState({ selectedKeg: selectedKeg })
  }

  handleSellClick = () => {
    if(this.state.selectedKeg.quantityLeft >= 1) {
      const updatedQuantity = this.state.selectedKeg.quantityLeft-1
      const updatedKeg = { ...this.state.selectedKeg, quantityLeft: updatedQuantity }
      const updatedKegList = this.state.masterKegList.filter(
        (tap) => tap.id !== this.state.selectedKeg.id)
        .concat(updatedKeg)
      this.setState({
        masterKegList: updatedKegList,
        selectedKeg: updatedKeg
      })
    }
  }

  render() {
    let currentVisibleState = null;
    let buttonText = '';

    if(this.state.selectedKeg != null) {
      currentVisibleState = (
        <KegDetail
          keg = {this.state.selectedKeg}
          onClickSell={this.handleSellClick}
        />
      );
      buttonText = "Go Back"
    }
    else if(this.state.formVisibleOnPage) {
      currentVisibleState = (
        <NewKeg
          onSubmit={this.handleAddingNewKegs}
          buttonText="Submit"
        />
      )
      buttonText = "Go Back"
    } else {
      currentVisibleState = (
        <KegList
          kegList = {this.state.masterKegList}
          onKegSelection = {this.handleSelectKeg}
        />
      )
      buttonText = "Add a Keg"
    }
    return (
      <React.Fragment>
        {currentVisibleState}
        <button onClick={this.handleClick}>
          {buttonText}
        </button>
      </React.Fragment>
    )
  }
}

export default NewKegControl;