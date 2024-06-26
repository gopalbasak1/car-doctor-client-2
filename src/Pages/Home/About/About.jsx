import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div>
            <div className="hero bg-base-200 my-10">
            <div className="hero-content flex-col lg:flex-row">
               <div className="lg:w-1/2 relative">
               <img src={person} className="w-3/4  rounded-lg shadow-2xl" />
               <img src={parts} className="w-1/2  rounded-lg shadow-2xl absolute right-10 top-1/2 border-8 border-white" />
               </div>
                <div className="lg:w-1/2 space-y-5 p-4">
                <h3 className="text-xl font-bold text-[#FF3811]">About Us</h3>
                <h1 className="py-6 text-3xl font-bold">We are qualified & of experience in this field</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <p className="py-10">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <button className="btn bg-[#FF3811] text-white">Get more info</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;