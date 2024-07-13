import { useState } from "react"
import frame from "../../assets/frame.png"
import logo from "../../assets/logo.png"
import Button from "../instuctions/Button"
import Container from "../instuctions/Container"
import Links from "../instuctions/Links"
import Navbar from "./Navbar"

const Header = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <Navbar className=" other:w-[2019px] phone:py-[2rem] phone:w-[100%] phone:px-[1rem] other:px-[140px] px-[70px] fixed w-[1349px] top-0 py-[20px] other:py-[40px] z-[100] bg-[white] flex justify-between items-center ">
                <button onClick={() => setShow(true)} className=" hidden phone:block text-[1rem] fas fa-bars relative text-[black] " />
                <img src={logo} className=" phone:w-[6.5rem] other:w-[230px] w-[130px] " alt="Logo" />
                <Container className=" other:text-[23px] other:gap-[45px] flex phone:hidden font-semibold gap-[30px] ">
                    <Links href="#home">Home</Links>
                    <Links href="#courses">Courses</Links>
                    <Links href="#instructor">Instructors</Links>
                    <Links href="#schedules">Scedules</Links>
                    <Links href="#contact">Contact US</Links>
                </Container>

                <Container className=" phone:hidden flex items-center gap-[30px] other:gap-[60px] ">
                    <button className=" fa-solid text-[20px] other:text-[30px] fa-magnifying-glass text-red-900 " />
                    <Links href="#" className=" other:text-[23px] text-[green] font-semibold ">
                        Login
                    </Links>
                    <Button className=" font-semibold other:rounded-[10px] other:text-[23px] px-[40px] other:px-[80px] other:py-[20px] py-[10px] rounded-[5px] ">
                        Register
                    </Button>
                </Container>

                {/* For responsive */}

                <div className={` hidden transition ${show ? "translate-x-0" : "translate-x-[-100%]"} text-[1.2rem] font-semibold phone:flex py-[3.3rem] flex-col gap-[30px] absolute top-0 left-0 items-start bg-[white] border p-[10px] `}>
                    <button onClick={() => setShow(false)} className=" fas fa-xmark absolute ml-[8rem] top-[1rem] " />
                    <Links href="#home">Home</Links>
                    <Links href="#courses">Courses</Links>
                    <Links href="#instructor">Instructors</Links>
                    <Links href="#schedules">Scedules</Links>
                    <Links href="#contact">Contact US</Links>
                    <button className=" fa-solid text-[20px] other:text-[30px] fa-magnifying-glass text-red-900 " />
                    <Links href="#" className=" other:text-[23px] text-[green] font-semibold ">
                        Login
                    </Links>
                    <Button className=" font-semibold other:rounded-[10px] other:text-[23px] px-[40px] other:px-[80px] other:py-[20px] py-[10px] rounded-[5px] ">
                        Register
                    </Button>
                </div>

                {/* For resposive end */}

            </Navbar>

            <Container className=" bg-slate-50 phone:px-[1rem] other:py-[40px] phone:flex-col other:mt-[160px] other:px-[140px] py-[20px] rounded-[40px] mt-[80px] px-[80px] flex phone:w-[100%] items-center justify-between ">
                <div className=" flex flex-col other:gap-[80px] gap-[50px] items-start ">
                    <h1 className=" relative z-[1] font-bold phone:text-[32px] other:text-[75px] text-[55px] ">
                        Quality <span className="text-[green]">Education</span> <br /> By Any Means Necessary.
                    </h1>
                    <Button className=" px-[40px] other:px-[80px] other:py-[30px] other:text-[23px] py-[15px] rounded-[5px] font-semibold ">Get Started</Button>
                </div>
                <img className=" w-[550px] phone:w-[40rem] phone:mt-[5rem] other:w-[850px] relative z-10 " src={frame} alt="Frame" />
                <div className=" phone:w-[5rem] phone:ml-[18rem] phone:h-[51rem] h-[450px] other:w-[150px] other:h-[750px] other:ml-[1600px] absolute w-[100px] rounded-tr-[50px] rounded-br-[50px] bg-blue-100 ml-[975px] " />
            </Container>

        </div>
    )
}

export default Header