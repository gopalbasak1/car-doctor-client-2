import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {

   const {_id, title, img, price} = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl h-[250px]" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    
    <div className="flex justify-between items-center text-xl text-[#FF3811]">
    <p className="">${price}</p>
      <Link to={`/checkout/${_id}`}><span className=""><MdArrowRightAlt /></span></Link>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;