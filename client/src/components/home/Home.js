import React, {Component} from 'react';

import Layout from '../_commons/layout/Layout'
import Loading from '../_commons/loading/Loading'

import './home.scss';
class Home extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  callApi = async (address) => {

	  const response = await fetch(`/location?address=${address}`);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    console.log(body)
    return body;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true })
    let address = e.target[0].value
    let response = await this.callApi(address)
    this.props.history.push({
      pathname: '/product',
      state: { data: response.poc }
    })
  }



  render() {

    const loading = this.state.loading;

    return (
      <Layout>
        <section className='container'>
          <form className='form' onSubmit={this.handleSubmit}>
            <input type='text' className='text' />
            <input type='submit' value='Buscar'/>
          </form>
        </section>
        {loading ? <Loading /> : null}
      </Layout>
    )
  }
}

export default Home;