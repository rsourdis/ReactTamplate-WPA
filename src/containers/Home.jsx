import React from 'react'
import { connect } from 'react-redux'
import '../assets/styles/Home.scss';

const Home = (props) => {
  return (
    <div >
      <h1 className='titulo_1'>React Template with Redux - Firebase - WPA</h1>
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
