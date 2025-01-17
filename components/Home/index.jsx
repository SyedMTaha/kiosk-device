import React from 'react'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import About from './About'
import Ielts from './Ielts'
import Contact from './Contact'
import SuccessStories from './SuccessStories'
import Subscription from './Subscription'
const Home = () => {
    return (
        <div className="">
            <Screen1 />
            <Screen2 />
            <Ielts/>
            <Subscription/>
            <About/>
            <SuccessStories/>
            <Contact/>
        </div>
    )
}

export default Home