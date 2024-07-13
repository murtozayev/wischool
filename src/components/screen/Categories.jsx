import { imagesCategory } from "../../data/data"
import { useMap } from "../hooks/arrayHooks"

const Categories = () => {
    return (
        <div id="instructor" className=" px-[70px] phone:p-[1rem] other:px-[140px] other:mt-[200px] mt-[100px] ">
            <div className=" flex justify-between phone:gap-[2rem] items-center ">
                <h1 className=" phone:text-[1rem] phone:w-[15rem] font-bold other:text-[45px] text-[30px] ">Choose favourite course from top cartegories</h1>
                <button className=" other:text-[23px] font-semibold ">See all</button>
            </div>
            <div className=" flex justify-between items-center phone:gap-[20px] phone:overflow-x-scroll other:mt-[100px] mt-[50px] ">
                <button className=" fas phone:hidden fa-arrow-left other:p-[25px] other:text-[25px] ml-[20px] hover:translate-y-[-10%] transition rounded-full p-[10px] absolute text-[green] bg-white " />
                {useMap(imagesCategory, (item) => (
                    <img src={item.image} className=" phone:w-[10rem] phone:h-[12rem] other:w-[400px] other:h-[600px] " alt="Images" key={item.id} />
                ))}
                <button className=" phone:hidden fas fa-arrow-right hover:translate-y-[-10%] other:p-[25px] other:text-[25px] transition rounded-full p-[10px] absolute text-[green] bg-white other:ml-[1650px] ml-[1150px] " />
            </div>
        </div>
    )
}

export default Categories