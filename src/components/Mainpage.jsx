import coding from "../assets/coding.png"
import chat from "../assets/chat.png"
import group from "../assets/group.png"
import book from "../assets/book.png"
import hand from "../assets/hand.png"

import React from 'react'
import Container from "./instuctions/Container"
import Header from "./screen/Header"
import Icontext from './instuctions/Icontext'
import Categories from "./screen/Categories"
import Courses from "./screen/Courses"
import Skill from "./screen/Skill"
import Education from "./screen/Education"
import Reviews from "./screen/Reviews"
import Instructors from "./screen/Instructors"
import Staircase from "./screen/Staircase"
import Footer from "./screen/Footer"

const Mainpage = () => {
    return (
        <Container id="home" className=" phone:h-[100vh] phone:w-[100%] other:w-[2020px] w-[1349px] mx-auto ">
            <Header />
            <Container className="px-[70px] phone:relative phone:mt-[8rem] phone:gap-[1rem] phone:flex-wrap phone:px-[1rem] other:mt-[200px] mt-[100px] flex phone:items-center justify-center ">
                <Icontext iconName={coding} text="Problem Solving" />
                <Icontext iconName={chat} text="Live chat" />
                <Icontext iconName={group} text="Group Reading" />
                <Icontext iconName={book} text="10k Courses" />
                <Icontext iconName={hand} text="Hand-on activities" />
            </Container>

            <Categories />

            <Courses />

            <Skill />

            <Education />

            <Reviews />

            <Instructors />

            <Staircase />

            <Footer />
        </Container>

    )
}
export default Mainpage