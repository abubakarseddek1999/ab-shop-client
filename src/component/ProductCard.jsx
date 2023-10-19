/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Swal from "sweetalert2";



const ProductCard = ({ product }) => {
    console.log(product);
    const { name, price, rating, type, details, brand, _id, photo } = product;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('delete Confirm');
                //   Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                //   )
                fetch(`http://localhost:5000/product/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="my-5">
            <div className="relative overflow-hidden shadow-lg transition-transform transform hover:scale-105  flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl" >

                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img className="h-[200px] w-full object-contain"
                        src={photo}
                        alt="ui/ux review check"
                    />

                </div>
                <div className="p-6">
                    <h4 className="block font-sans text-center my-2 text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {type}
                    </h4>
                    <h4 className="block font-sans text-center my-2 text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">Brand name:
                        {brand}
                    </h4>


                    <div>
                        <div className="btn-group my-3 space-x-4 rounded-lg ml-3 ">
                            <button className="btn shadow-md ">Details</button>
                            <button className="btn shadow-md">Edit</button>
                            <button onClick={() => handleDelete(_id)} className="btn shadow-md">Delete</button>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default ProductCard;