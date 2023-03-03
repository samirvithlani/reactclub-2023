import React from "react";
import { useForm } from "react-hook-form";

export const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data)=>{
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div class="form-group">
          <label for="exampleInputEmail1">Product Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Product Name"
            {...register('pname')}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Product PRICE</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Product Price"
            {...register('pprice')}
          />
        </div>
        <div>
            <label for="exampleInputEmail1">Delivery City</label>
            <select {...register('city')}>
                    <option value="AHMEDABAD">AHMEDABAD</option>
                    <option value="PUNE">PUNE</option>
                    <option value="Mumbai">Mumbai</option>
            </select>
        </div>
        <div>
            <label for="exampleInputEmail1">COLOR</label>
            <input type="color" {...register('color')}></input>
        </div>
        <div>
            <label for="exampleInputEmail1">DATE</label>
            <input type="date" {...register('date')}></input>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Product Quantity</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Product Qty"
            {...register('pqty')}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Product CATEGORY</label>
          FASHION
          <input
            name="cat"
            type="radio"
            class="form-control"
            placeholder="Enter Product Qty"
            {...register('cat')}
            value="fashion"
          />
          ELETRONICS
          <input
            name="cat"
            type="radio"
            class="form-control"
            placeholder="Enter Product Qty"
            {...register('cat')}
            value="eletronics"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">accesories</label>
          CHARGER
          <input
            name="accesories"
            type="checkbox"
            class="form-control"
            placeholder="Enter Product Qty"
            {...register('accersories')}
            value="charger"
          />
          HandSfree
          <input
            name="accesories"
            type="checkbox"
            class="form-control"
            placeholder="Enter Product Qty"
            {...register('accersories')}
            value="handsfree"
          />
          Cable
          <input
            name="accesories"
            type="checkbox"
            class="form-control"
            placeholder="Enter Product Qty"
            {...register('accersories')}
            value="cable"
          />
        </div>
        

        
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
