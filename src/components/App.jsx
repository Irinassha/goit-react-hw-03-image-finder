import React from "react";
import { Button } from "./button/Button";
import { Modal } from "./modal/Modal";
import { Searchbar } from "./searchbar/Searchbar";
import axios from 'axios';
import { ImageGallery } from "imagegallery/ImageGallery";

axios.defaults.baseURL = 'https://pixabay.com';


export class App extends React.Component {
  state = {
    hits: [],
  };

  async componentDidMount() {
  
    const { data } = await axios.get(
      '/api/?key=41261447-8e6e35c805284eb5c4b03f22e&q=cars&image_type=photo'
    );
    console.log(data)
    this.setState({ hits: data.hits});
  }

  render() {
    return (
      <div
        style={{
          // height: '100vh',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar />
       <ImageGallery hits={this.state.hits}/>
        <Button />
        <Modal />
      </div>
    );
  }
};
