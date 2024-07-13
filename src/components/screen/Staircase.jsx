import girl from "../../assets/girl.png"
import Button from "../instuctions/Button"

const Staircase = () => {
    return (
        <div id="back" className=" px-[70px] phone:px-[1rem] other:px-[140px] other:mt-[400px] other:p-[35px] other:gap-[130px] p-[20px] flex gap-[70px] mt-[250px] ">
            <img className=" phone:hidden relative other:w-[850px] phone:p-[1rem] other:bottom-[150px] bottom-[100px] " src={girl} alt="Girl" />
            <div className=" p-[40px] other:p-[70px] phone:p-[1rem] text-[white] ">
                <h1 className=" text-[42px] other:text-[60px] phone:text-center phone:text-[1.5rem] font-bold ">You don’t have to see the whole staircase just take the first step</h1>
                <br />
                <h4 className=" mt-[20px] phone:text-[0.8rem] phone:text-center other:mt-[30px] other:text-[23px] ">Amet in a suspendisse convallis eget, Amet in a suspendisse <br /> convallis egetAmet in a </h4>
                <div className=" flex mt-[90px] justify-center gap-[30px] ">
                    <Button className=" other:px-[70px] phone:px-[2rem] phone:py-[1rem] phone:text-[0.8rem] other:py-[30px] other:text-[23px] px-[40px] py-[15px] rounded-[5px] font-semibold ">Get Started</Button>
                    <button className=" other:px-[70px] phone:px-[2rem] phone:py-[1rem] phone:text-[0.8rem] other:py-[30px] other:text-[23px] px-[40px] py-[15px] rounded-[5px] bg-[white] text-[green] hover:bg-[green] hover:text-[white] transition font-semibold ">Place a call</button>
                </div>
            </div>
        </div>
    )
}

export default Staircase