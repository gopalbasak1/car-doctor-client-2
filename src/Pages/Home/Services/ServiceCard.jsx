import { MdArrowRightAlt } from "react-icons/md";


const ServiceCard = ({service}) => {

   const {title, img, price} = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl h-[250px]" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    
    <div className="flex justify-between items-center text-xl text-[#FF3811]">
    <p className="">${price}</p>
      <span className=""><MdArrowRightAlt /></span>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;