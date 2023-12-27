import { ProductList } from "../ProductList/ProductList";
import { useEffect } from "react";
import useGetProducts from "../../hooks/useGetProducts";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import SecondaryBanner from "../secondaryBanner/SecondaryBanner";

const TopProducts = () => {
  const { products, getTopProducts } = useGetProducts();

  //get data from the getTopProducts() inside de custom hook
  useEffect(() => {
    getTopProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className='container mx-auto mb-20  mt-5'>
        <div className='flex items-center justify-between px-20'>
          <h3 className='font-bold font-krona text-xl'>Clean Beauty</h3>
          <ButtonLink path={"/about"} text={"see more"} isMain />
        </div>
        <div className='flex flex-wrap items-center justify-center my-10'>
          {products.map((product) => (
            <>
              <ProductList product={product} />
              {/* <ProductList product={product} /> */}
            </>
          ))}
        </div>
      </div>
      <SecondaryBanner />
    </div>
  );
};
export default TopProducts;
