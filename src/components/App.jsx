import React from 'react';
import { Button } from './button/Button';
import { Modal } from './modal/Modal';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from 'components/imagegallery/ImageGallery';
import { ApiByPhoto } from 'servise/api';
import { Loader } from './loader/Loader';

export class App extends React.Component {
  state = {
    items: [],
    page: 1,
    quary: '',
    loading: false,
    error: null,
    totalItems: 0,
  };

  // async componentDidMount() {
  //   // const { quary } = this.state;
  //   const { hits } = await ApiByPhoto({});
  //   this.setState({ items: hits });
  // }

  async componentDidUpdate(_, prevState) {
    const { page, quary } = this.state;
    if (prevState.page !== page || prevState.quary !== quary) {
      try {
        this.setState({ loading: true, error: null });
        const { hits, total } = await ApiByPhoto({ quary, page });
        this.setState(prev => ({
          items: [...prev.items, ...hits],
          totalItems: total,
        }));
        console.log(this.state.loading);
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handlerSearch = quary => {
    this.setState({ quary, items: [], page: 1 });
  };

  handlerLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { items, loading, totalItems } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar search={this.handlerSearch} />
        {loading ? <Loader /> : <ImageGallery hits={items} />}
        {items && items.length < totalItems && (
          <Button loadMore={this.handlerLoadMore} />
        )}
        <Modal />
      </div>
    );
  }
}
