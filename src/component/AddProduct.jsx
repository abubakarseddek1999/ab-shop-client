import Swal from "sweetalert2";



const AddProduct = () => {
    const handleAddProduct = e=>{
        e.preventDefault();
        const form =e.target;
        const name =form.name.value;
        const price =form.price.value;
        const brand =form.brand.value;
        const rating =form.rating.value;
        const type =form.type.value;
        const details =form.details.value;
        const photo =form.photo.value;
        const newProduct ={name,price,brand,type,rating,photo,details}
        console.log(newProduct);

        // send data to the server
        fetch('http://localhost:5000/product', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(newProduct)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if (data.acknowledged) {
                Swal.fire({
                    title: 'success!',
                    text: 'Product Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })

            }
        })

    }
    return (
        <div className="p-10 border m-10 bg-stone-400 rounded-lg">

            <h3 className="text-center text-xl md:text-2xl font-bold ">Add New product</h3>

            <form onSubmit={handleAddProduct}>

                <div className="m-5 md:flex gap-5 justify-center">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Product name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" placeholder="Price " className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="m-5 md:flex gap-5 justify-center">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold">Brand Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="brand" placeholder="Supplier name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold"> Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="rating" placeholder="1 to 5" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="m-5 md:flex gap-5 justify-center">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold"> Type</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="type" placeholder="Product Type" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold"> Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <div className="m-5  gap-5 justify-center mb-5">

                    <div className="form-control w-full m-5">
                        <label className="label">
                            <span className="label-text font-bold"> Photo URL</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered mr-5 w-full" />
                        </label>
                    </div>
                    <input type="submit" value="Add To Cart" className="btn btn-block bg-slate-200" />



                </div>

            </form>
        </div>

    );
};

export default AddProduct;