import { skills } from "../../data/data"
import Container from "../instuctions/Container"
import { useMap } from "../hooks/arrayHooks"

const Skill = () => {
    return (
        <Container id="schedules" className=" phone:px-[1rem] px-[70px] other:px-[140px] mt-[120px] ">
            <h1 className=" font-bold other:text-[45px] phone:text-[1rem] text-[32px] ">Learn a new skill in two hours</h1>

            <div className=" flex mt-[20px] other:mt-[40px] flex-wrap justify-between gap-[19px] ">
                {useMap(skills, (item, index) => {
                    return (
                        <div key={index} className=" other:w-[550px] other:mt-[80px] other:h-[550px] w-[370px] mt-[40px] transition duration-[0.3s] hover:translate-y-[-30px] h-[390px] rounded-[10px] shadow-xl ">
                            <img className=" rounded-t-[10px] other:w-[100%] " src={item.image} alt="Images" />
                            <div className=" other:mt-[40px] other:px-[35px] mt-[24px] px-[20px] flex justify-between ">
                                <h1 className=" other:text-[32px] text-[22px] font-semibold ">{item.title}</h1>
                                <div className=" other:mb-[35px] other:text-[23px] other:gap-[10px] flex items-center mb-[25px] gap-[5px] ">
                                    <i className=" fa-regular fa-star text-[green] " />
                                    <span>{item.rate}</span>
                                </div>
                            </div>
                            <div className=" flex items-center other:px-[35px] justify-between px-[20px] mt-[25px] ">
                                <div className=" gap-[20px] font-semibold flex other:gap-[35px] other:text-[20px] ">
                                    <span>{item.week}</span>
                                    <div className=" flex items-center gap-[10px] ">
                                        <i className="fa-solid fa-users text-[green] " />
                                        <span>{item.students}</span>
                                    </div>
                                </div>
                                <h2 className=" other:text-[34px] text-[24px] font-semibold text-[green] ">{item.price}</h2>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default Skill