import { courses } from "../../data/data"
import Button from "../instuctions/Button"
import Container from "../instuctions/Container"
import { useMap } from "../hooks/arrayHooks"

const Courses = () => {
    return (
        <div id="courses" className=" px-[70px] other:px-[140px] phone:px-[1rem] other:mt-[200px] mt-[100px] ">
            <Container className=" flex justify-between ">
                <h1 className=" phone:text-[1rem] font-bold other:text-[45px] text-[30px] ">Most Popular Courses</h1>
                <Button className=" phone:px-[1rem] phone:text-[0.5rem] other:px-[50px] other:py-[10px] other:text-[23px] px-[30px] py-[5px] flex justify-center items-center gap-[10px] font-semibold rounded-[20px] ">
                    <i className=" fas fa-arrow-down " />
                    <span>Sort by</span>
                </Button>
            </Container>

            <div className=" flex mt-[20px] other:mt-[40px] justify-between flex-wrap gap-[17px] ">
                {useMap(courses, (item, index) => (
                    <div className=" w-[370px] other:w-[550px] other:mt-[80px] other:h-[550px] mt-[40px] transition duration-[0.3s] hover:translate-y-[-30px] h-[390px] rounded-[10px] shadow-xl " key={index}>
                        <img className=" other:w-[100%] rounded-t-[10px] " src={item.image} alt="Images" />
                        <div className=" other:mt-[40px] other:px-[35px] gap-[10px] other:gap-[20px] items-center mt-[24px] px-[20px] flex justify-between ">
                            <h1 className=" text-[22px] other:text-[32px] font-semibold ">{item.title}</h1>
                            <div className=" flex other:mb-[40px] other:text-[23px] items-center mb-[25px] gap-[5px] ">
                                <i className=" fa-regular fa-star text-[green] " />
                                <span>{item.rate}</span>
                            </div>
                        </div>
                        <div className=" flex justify-between other:px-[35px] other:mt-[35px] px-[20px] mt-[25px] ">
                            <div className=" gap-[20px] other:gap-[35px] other:text-[20px] items-center font-semibold flex ">
                                <span>{item.week}</span>
                                <div className=" flex items-center other:gap-[15px] gap-[10px] ">
                                    <i className="fa-solid fa-users text-[green] " />
                                    <span>{item.students}</span>
                                </div>
                            </div>
                            <h2 className=" text-[24px] other:text-[34px] font-semibold text-[green] ">{item.price}</h2>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Courses