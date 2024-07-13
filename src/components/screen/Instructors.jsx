import { instructorsArr } from "../../data/data"
import { useMap } from "../hooks/arrayHooks"

const Instructors = () => {
    return (
        <div className=" px-[70px] phone:px-[1rem] other:px-[140px] other:mt-[200px] mt-[120px] ">
            <h1 className=" font-bold other:text-[45px] phone:text-[1rem] text-[32px] ">Meet our instructors</h1>
            <div className=" mt-[80px] other:mt-[140px] phone:items-center flex phone:flex-col justify-between ">
                {useMap(instructorsArr, (item, index) => (
                    <div className=" w-[370px] phone:w-[20rem] other:w-[550px] other:p-[80px] flex flex-col shadow-2xl hover:scale-[1.03] transition rounded-[10px] items-center p-[50px] text-center " key={index}>
                        <img src={item.image} className=" other:w-[150px] " alt="Image" />

                        <span className=" mt-[15px] other:mt-[30px] other:text-[23px] font-bold ">{item.name}</span>
                        <span className=" font-semibold text-[green] other:text-[22px] ">{item.skill}</span>
                        <br />
                        <span className=" font-semibold other:text-[23px] ">{item.desc}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Instructors