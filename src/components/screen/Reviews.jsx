import person1 from "../../assets/person1.png"
import person2 from "../../assets/person2.png"
import what from "../../assets/what.png"
import Container from "../instuctions/Container"

const Reviews = () => {
    return (
        <div className=" px-[70px] phone:px-[1rem] other:px-[140px] other:mt-[240px] mt-[120px] ">
            <h1 className=" text-[32px] other:text-[45px] text-center phone:text-[1rem] font-bold ">Reviews</h1>
            <Container className=" mt-[100px] phone:mt-[2rem] flex phone:flex-col phone:gap-[70px] other:mt-[180px] items-center justify-between ">
                <div className=" flex flex-col other:gap-[80px] gap-[60px] ">
                    <img src={what} className=" other:w-[550px] " alt="Image" />
                    <div className=" flex other:gap-[60px] gap-[30px] ">
                        <button className=" other:p-[25px] other:text-[23px] fa-solid hover:bg-[green] hover:text-white transition fa-arrow-left p-[15px] bg-white border-[1px] border-[green] rounded-full text-[green] " />
                        <button className=" fa-solid other:p-[25px] other:text-[23px] hover:bg-[green] hover:text-white transition fa-arrow-right p-[15px] bg-white border-[1px] border-[green] rounded-full text-[green] " />
                    </div>
                </div>
                <div className=" w-[300px] other:w-[500px] ">
                    <div className=" flex other:gap-[35px] items-center gap-[20px] ">
                        <img src={person1} className=" other:w-[120px] " alt="Image" />
                        <div>
                            <span className=" font-bold other:text-[35px] text-[20px] ">Mohh Jumah</span>
                            <p className=" font-semibold text-[green] other:text-[23px] ">Senior Developer</p>
                        </div>
                    </div>
                    <br />
                    <span className=" other:text-[23px] ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis
                    </span>
                </div>
                <div className=" w-[300px] other:w-[500px] ">
                    <div className=" flex items-center gap-[20px] ">
                        <img src={person2} className=" other:w-[120px] " alt="Image" />
                        <div>
                            <span className="font-bold other:text-[35px] text-[20px]">John Mark</span>
                            <p className=" other:text-[23px] font-semibold text-[green] ">Analyst</p>
                        </div>
                    </div>
                    <br />
                    <span className=" other:text-[23px] ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis
                    </span>
                </div>
            </Container>
        </div>
    )
}

export default Reviews