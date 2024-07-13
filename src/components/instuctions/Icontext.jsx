const Icontext = ({ iconName, text }) => {
    return (
        <button className=" flex px-[30px] phone:py-[1rem] phone:px-[1rem] other:gap-[20px] other:px-[70px] other:py-[25px] items-center font-semibold gap-[10px] py-[13px] bg-green-200 ">
            <img className=" other:w-[50px] phone:w-[2rem] " src={iconName} alt="Icon" />
            <span className=" other:text-[23px] phone:text-[0.9rem] ">{text}</span>
        </button>
    )
}

export default Icontext