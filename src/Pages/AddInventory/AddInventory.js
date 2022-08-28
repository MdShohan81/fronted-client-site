import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddInventory = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data,event) => {
        const url = `http://localhost:4000/service`;
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            toast.success('Added new inventory product')
            event.target.reset();
            
          });
      };

    return (
        <div className='my-8 flex justify-center items-center'>   
        <div className="card w-96 bg-base-100 shadow-xl">
            <h1 className='text-center text-3xl font-bold my-4 text-secondary'>Add Inventory</h1>
                <form className='grid grid-rows-6 gap-3 ml-8'  onSubmit={handleSubmit(onSubmit)}>
                <input
              class="input input-bordered input-primary  max-w-xs"
              placeholder="Car Name"
              {...register("carname", )}
            />
            <input
              class="input input-bordered input-primary w-full max-w-xs"
              placeholder="Image Url"
              type="text"
              {...register("img", )}
            />
            <input
              class="input input-bordered input-primary w-full max-w-xs"
              placeholder='Description'
              {...register("description", )}
            />
            <input
              class="input input-bordered input-primary w-full max-w-xs"
              placeholder="Price"
              type="number"
              {...register("price", )}
            />
            <input
              class="input input-bordered input-primary w-full max-w-xs"
              placeholder="Quantity"
              type="number"
              {...register("quantity", )}
            />
            <input
              class="input input-bordered input-primary w-full max-w-xs"
              placeholder="Supplier Name"
              type="text"
              {...register("suppliername", )}
            />
            <input
              className="mb-3 btn btn-secondary w-full max-w-xs"
              type="submit"
              value="Add Product"
            />
                </form>
            </div>
        </div>
    );
};

export default AddInventory;