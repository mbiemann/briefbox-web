import { Component } from 'react';

import { Header } from '../components/header';
import { BoxList } from '../components/box_list';
import { Footer } from '../components/footer';

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <BoxList />
        <Footer />
      </div>
    )
  }

}
