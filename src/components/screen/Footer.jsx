import Container from "../instuctions/Container"
import Links from "../instuctions/Links"

const Footer = () => {
    return (
        <footer id="contact" className=" px-[70px] phone:px-[1rem] other:px-[140px] text-white bg-black py-6 ">
            <Container className=" mt-[80px] other:mt-[120px] phone:flex-col phone:items-center phone:gap-[2rem] flex justify-between ">
                <div className=" w-[300px] other:w-[400px] px-[35px] flex flex-col gap-[30px] ">
                    <h1 className=" phone:text-center other:text-[45px] text-[32px] font-bold ">WiSchool</h1>
                    <span className=" phone:text-center other:text-[23px] ">
                        We are not here to sell you products, we sell value through our expertise.
                    </span>
                    <div className=" flex phone:justify-center phone:gap-[2rem] gap-[15px] ">
                        <i className=" other:text-[23px] text-[17px] text-[green] rounded-full fa-brands fa-facebook " />
                        <i className=" other:text-[23px] text-[17px] text-[green] rounded-full fa-brands fa-twitter " />
                        <i className=" other:text-[23px] text-[17px] text-[green] rounded-full fa-brands fa-instagram " />
                        <i className=" other:text-[23px] text-[17px] text-[green] rounded-full fa-brands fa-linkedin " />
                    </div>
                </div>
                <div className=" flex other:text-[23px] flex-col phone:text-center gap-[10px] text-[12px] ">
                    <Links href="home">Home</Links>
                    <Links href="home">Services</Links>
                    <Links href="home">Training</Links>
                    <Links href="home">Resources</Links>
                    <Links href="home">About US</Links>
                </div>
                <div className=" other:text-[23px] flex phone:text-center flex-col gap-[10px] text-[12px] ">
                    <Links href="home">SME</Links>
                    <Links href="home">Soulton</Links>
                    <Links href="home">Reviews</Links>
                    <Links href="home">Blog</Links>
                </div>
                <div className=" other:text-[23px] flex phone:text-center flex-col gap-[10px] text-[12px] ">
                    <Links href="home">Contact US</Links>
                    <Links href="home">Place a call</Links>
                    <Links href="home">Email</Links>
                    <Links href="home">Wischool@gmail.com</Links>
                </div>
                <div className=" other:text-[23px] phone:text-center  flex flex-col gap-[10px] text-[12px] ">
                    <Links href="home">Job Opening</Links>
                    <Links href="home">News</Links>
                    <Links href="home">Research</Links>
                </div>
                <div className=" other:text-[23px] phone:text-center flex flex-col gap-[10px] text-[12px] ">
                    <Links href="home">Uk Privacy Policy</Links>
                    <Links href="home">Terms of use</Links>
                </div>
            </Container>
            <h3 className=" phone:text-[1.2rem] other:text-[35px] text-center text-[24px] font-bold mt-[100px] ">Subscribe to get latest updates</h3>
            <form className=" flex other:mt-[35px] justify-center mt-[20px] ">
                <input className=" phone:w-[15rem] phone:h-[3rem] other:w-[850px] other:h-[90px] other:px-[40px] other:text-[23px] w-[542px] text-[green] outline-none h-[52px] border-none placeholder:text-[green] font-semibold px-[20px] " placeholder="Your email" type="text" />
                <button className=" px-[40px] phone:h-[3rem] phone:w-[2rem] phone:text-[0.5rem] other:px-[70px] other:h-[90px] other:text-[23px] font-semibold h-[52px] bg-[#58f358] ">Subscribe</button>
            </form>
        </footer>
    )
}

export default Footer