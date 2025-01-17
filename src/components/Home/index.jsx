import React from 'react'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import About from './About'
import Ielts from './Ielts'
import Contact from './Contact'
import SuccessStories from './SuccessStories'
import Subscription from './Subscription'
import Navbar from '../Navbar'
import Footer from '../Footer'
const Home = () => {
    return (
        <div className="">
            <Navbar/>
            <Screen1 />
            <Screen2 />
            <Ielts/>
            <Subscription/>
            <About/>
            <SuccessStories/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home