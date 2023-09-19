import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='text-center'>
        <Header></Header>
      <h2 className=" text-3xl">This is a home copmonent</h2>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

Home.propTypes = {

}

export default Home
