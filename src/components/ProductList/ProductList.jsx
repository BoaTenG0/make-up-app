import React from "react";
import { Link } from "react-router-dom";
export function ProductList({ product }) {
  const {
    id,
    name,
    api_featured_image,
    price,
    price_sign,
    category,
    brand,
    product_colors,
  } = product;
  const col = product_colors?.[0]?.hex_value;
  const colo = product_colors?.[1]?.hex_value;
  return (
    <Link
      to={`/product/${id}`}
      className='flex flex-col mb-4 mx-14 p-6 space-y-1 backdrop-blur-xl transform hover:scale-105 hover:shadow-2xl hover:rounded-2xl transition delay-75 duration-300 ease-in-out'
      // state={product}
    >
      {/* <p>ID: {product.id}</p> */}
      <img
        width='120'
        src={`https://${api_featured_image}`}
        alt={name}
        className=' mx-auto mb-6'
      />
      <p className='font-krona text-yellow text-sm lowercase'>{name}</p>
      <p>{brand}</p>
      <p>{category}</p>
      <div className='relative'>
        <div
          className='absolute bg-gray-200 h-5 rounded-full top-0 w-7 mt-1'
          style={{ zIndex: "-10" }}
        ></div>
        <p className='font-krona text-xl ml-1.5'>
          {price_sign}
          {price}
        </p>
      </div>
      <div className='flex gap-2'>
        <div
          class='rounded-full h-5 w-5 '
          style={{ backgroundColor: `${col}` }}
        ></div>
        <div
          class='rounded-full h-5 w-5 '
          style={{ backgroundColor: `${colo}` }}
        ></div>
      </div>
    </Link>
  );
}
