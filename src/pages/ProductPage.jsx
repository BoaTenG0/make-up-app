import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetProducts from "../hooks/useGetProducts";

const ProductPage = () => {
  const { singleProduct, getSingleProduct } = useGetProducts();
  const { id } = useParams();
  useEffect(() => {
    getSingleProduct(id);
  }, []);

  return (
    <div className='container mx-auto mt-20 h-screen'>
      <div className='mb-10'>
        <h5 className='font-krona text-sm'>{singleProduct?.name}</h5>
        <p className='text-grey text-sm'>{singleProduct?.product_type}</p>
      </div>
      <div className='flex gap-2 mb-10'>
        <div className='flex-1  py-3 w-screen'>
          <img
            // width='120'
            src={`https://${singleProduct?.api_featured_image}`}
            alt={singleProduct?.name}
            className='mx-auto shadow-lg hover:scale-125 transition delay-75 duration-300 ease-in-out'
          />
        </div>
        <div className='flex-1 '>
          <p className='text-yellow text-sm font-krona'>
            {singleProduct?.product_type}
          </p>
          <h1 className='font-krona text-base'>{singleProduct?.name}</h1>
          <p>{singleProduct?.category}</p>
          <div className='flex justify-between my-10'>
            <div className='relative'>
              <div
                className='absolute bg-gray-200 h-5 py-3.5 rounded-full top-0 w-8 '
                style={{ zIndex: "-10" }}
              ></div>
              <p className='font-krona text-lg ml-1.5'>
                {singleProduct?.price} &euro;
              </p>
            </div>
            <div>counter</div>
            <button
              className={
                "inline-block font-krona rounded-full text-xs bg-yellow py-3 px-6"
              }
            >
              add to basket
            </button>
          </div>
          {/* <p>{singleProduct?.price} &euro;</p> */}
          <p className='leading-7 text-sm'>
            {singleProduct?.description.replace(/<\/?[^>]+(>|$)/g, "")}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
