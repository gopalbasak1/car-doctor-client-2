import { useContext, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData();
    const { title, _id, price, img } = service || {};
    const { user } = useContext(AuthContext);

    const [userData, setUserData] = useState({ name: "", email: "" });

    useEffect(() => {
        if (user) {
            setUserData({
                name: user.displayName || "",
                email: user.email || "",
            });
        }
    }, [user]);

    const handleCheckOutService = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const description = form.description.value;
        const email = userData.email;
        const checkout = {
            customerName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            description,
            price: price,
        };

        console.log(checkout);

        fetch("http://localhost:5000/checkout", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(checkout),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    alert("services added successfully");
                }
            });
    };

    return (
        <div className="bg-base-200">
            <h2 className="text-center text-3xl">CheckOut: {title}</h2>
            <form onSubmit={handleCheckOutService} className="card-body">
                <div className="flex gap-5">
                    <div className="w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="name"
                            defaultValue={userData.name}
                            placeholder="name"
                            name="name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="w-1/2">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input
                            type="date"
                            name="date"
                            placeholder="date"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                </div>

                <div className="flex gap-5">
                    <div className="w-1/2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            defaultValue={userData.email}
                            placeholder="email"
                            className="input input-bordered w-full"
                            required
                            readOnly
                        />
                    </div>

                    <div className="w-1/2">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={"$ " + price}
                            placeholder="text"
                            className="input input-bordered w-full"
                            required
                            readOnly
                        />
                    </div>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold"> Short description</span>
                    </label>
                    <textarea
                        type="text"
                        name="description"
                        placeholder="Enter Short description"
                        className="input input-bordered w-full h-40"
                    />
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-[#ff3811] text-white ">Order Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default CheckOut;
