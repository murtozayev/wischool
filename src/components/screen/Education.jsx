import education from "../../assets/education.png"
import Container from "../instuctions/Container"

const Education = () => {
    return (
        <div className=" px-[70px] mt-[120px] other:mt-[240px] phone:px-[1rem] other:px-[140px] ">
            <h2 className=" other:text-[45px] phone:text-[1rem] text-[32px] font-bold ">We Bring The Good Education To Life</h2>
            <div className=" flex phone:flex-col items-center mt-[80px] ">
                <img src={education} className=" other:w-[750px] " alt="education" />

                <Container className=" flex flex-col phone:mt-[3rem] other:gap-[40px] gap-[30px] ">
                    <h1 className=" phone:text-[1.5rem] text-[40px] other:text-[70px] font-bold ">Let Your Education Do <br /> The Walking</h1>
                    <div className=" flex  other:gap-[45px] other:text-[23px] items-center gap-[30px] font-semibold ">
                        <i className=" fa-solid bg-green-300 text-[green] p-[10px] rounded-full fa-book-open " />
                        <span>Free E-book, Videos and kits</span>
                    </div>
                    <div className=" flex items-center gap-[30px] other:gap-[45px] other:text-[23px] font-semibold ">
                        <i className=" fa-solid bg-green-300 text-[green] p-[10px] rounded-full fa-clock " />
                        <span>Learn at your own pace</span>
                    </div>
                    <div className=" flex items-center gap-[30px] other:gap-[45px] other:text-[23px] font-semibold ">
                        <i className=" fa-solid bg-green-300 text-[green] p-[10px] rounded-full fa-bag-shopping " />
                        <span>Collaborate with different learners around the globe</span>
                    </div>
                    <div className=" flex items-center gap-[30px] other:gap-[45px] other:text-[23px] font-semibold ">
                        <i className=" fa-solid bg-green-300 text-[green] p-[10px] rounded-full fa-users " />
                        <span>Top instructors around the globe</span>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Education