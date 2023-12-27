const benefits = [
  {
    title: "Delivery",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae dolor, nesciunt harum voluptatum",
  },
  {
    title: "Products",
    text: "corporis cumque consequatur nulla architecto minus molestiae incidunt, hic quidem nisi mollitia quaerat?",
  },
  {
    title: "Payments",
    text: "Lorem corporis cumque consequatur nulla architecto minus molestiae incidunt, hic quidem nisi mollitia",
  },
];
const Benefits = () => {
  return (
    <div className='flex gap-10 container mx-auto px-10 mb-20'>
      {benefits.map((benefit, index) => {
        const { title, text } = benefit;
        return (
          <div key={index} className='flex flex-1'>
            <div className='mr-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>
            </div>

            <div>
              <h3 className='text-sm font-krona'>{title}</h3>
              <p className='text-xs'>{text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Benefits;
