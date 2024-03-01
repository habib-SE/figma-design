const HeaderFrame = () => {
  return (
    <div className="w-[737px] flex flex-col items-start justify-start gap-[172px_0px] min-w-[737px] max-w-full text-left text-80xl text-white font-poppins mq800:gap-[172px_0px] mq1125:min-w-full mq450:gap-[172px_0px] mq1350:flex-1">
      <header className="w-[378px] flex flex-row items-start justify-start pt-0 px-0 pb-[76px] box-border max-w-full text-left text-3xl text-white font-poppins">
        <div className="flex-1 flex flex-row items-end justify-start gap-[0px_12px] max-w-full">
          <img
            className="h-10 w-10 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/carbonfinance.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border max-w-full">
            <h3 className="m-0 self-stretch h-8 relative text-inherit tracking-[0.5px] inline-block shrink-0 font-inherit">
              <span className="font-medium">Rise</span>
              <b>Finance</b>
            </h3>
          </div>
        </div>
      </header>
      <div className="w-[695px] flex flex-col items-start justify-start gap-[38px_0px] max-w-full z-[1] mq800:gap-[38px_0px]">
        <div className="self-stretch flex flex-col items-end justify-start gap-[26px_0px]">
          <div className="self-stretch h-[185px] relative tracking-[-4px] leading-[100%] font-semibold inline-block shrink-0 mq800:text-26xl mq800:leading-[59px] mq450:text-8xl mq450:leading-[40px]">
            <p className="m-0">
              <span>
                <span className=" text-blue-900">
                  Scale Fintech
                </span>
              </span>
              <span>
                <span>{` `}</span>
              </span>
            </p>
            <p className="m-0 text-71xl">
              <span>
                <span>Safe And Secure</span>
              </span>
            </p>
          </div>
          <h3 className="m-0 w-[686px] relative text-3xl tracking-[0.04em] leading-[130%] inline-block font-inherit mq450:text-lg mq450:leading-[23px]">
            <span className="font-medium">{`Ship your fintech products to your customers with fast and reliable processes. `}</span>
            <span className="font-semibold">
              Secure and highly customizable
            </span>
            <span className="font-medium">
              . Rise Finance is the best partner for you if you want to scale
              your finance products worldwide.
            </span>
          </h3>
        </div>
        <div className="w-[292px] flex flex-row items-start justify-start py-0 px-[9px] box-border text-lg">
          <div className="flex-1 bg-midnightblue-200 flex flex-row items-center justify-center p-7 border-[4px] border-solid border-stroke-gradient">
            <div className="relative leading-[100%] uppercase font-semibold">
              consultation
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end">
        <img
          className="h-[51px] w-[100px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
      </div>
    </div>
  );
};

export default HeaderFrame;
