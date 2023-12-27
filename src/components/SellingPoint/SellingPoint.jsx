import bannerImg from "../../assets/vlada.jpg";

const sellingPoint = () => {
  return (
    <div className='bg-gray-200 pt-40'>
      <div className='container mx-auto pt-20 pb-10 flex items-center justify-between gap-32 p-14 mb-20'>
        <div className='ml-4 w-2/5'>
          <img src={bannerImg} alt='banner' className='rounded-3xl' />
        </div>
        <div className='w-2/4'>
          <h2 className='font-krona text-3xl mb-4'>
            Elegance what you deserves.
          </h2>
          <p className='text-sm mb-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quaerat
            provident. Vero, similique tenetur corporis sit cum veniam, possimus
            ut fuga voluptatibus, dolorem a ducimus impedit illo harum commodi
            est.
          </p>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odit
            architecto, explicabo nobis sunt obcaecati.
          </p>
        </div>
      </div>
    </div>
  );
};
export default sellingPoint;
