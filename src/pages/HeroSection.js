import HeaderFrame from "../components/HeaderFrame";

const HeroSection = () => {
  return (
    <div className="w-full relative bg-midnightblue-100 overflow-hidden flex flex-row items-end justify-start pt-[30px] pb-[136px] pr-5 pl-[90px] box-border gap-[0px_111px] tracking-[normal] text-left text-sm text-gray-100 font-poppins mq1125:gap-[0px_111px] mq1125:pl-[45px] mq1125:box-border mq450:gap-[0px_111px] mq450:pl-5 mq450:box-border mq1350:flex-wrap">
      <div className="h-[509px] w-[509px] absolute !m-[0] top-[-191px] right-[-168px]">
        <div className="absolute top-[0px] left-[0px] rounded-881xl [background:linear-gradient(177.23deg,_rgba(66,_62,_224,_0.4),_rgba(129,_45,_226,_0.4))] [filter:blur(371px)] w-full h-full z-[3]" />
        <div className="absolute top-[234px] left-[207px] bg-white w-11 h-[3px] z-[4]" />
        <div className="absolute top-[241px] left-[207px] bg-white w-11 h-[3px] z-[4]" />
        <div className="absolute top-[248px] left-[207px] bg-white w-11 h-[3px] z-[4]" />
      </div>
      <HeaderFrame />
      <div className="h-[881px] w-[976px] absolute !m-[0] bottom-[-433px] left-[-440px]">
        <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-881xl [background:linear-gradient(177.23deg,_rgba(66,_62,_224,_0.4),_rgba(129,_45,_226,_0.4))] [filter:blur(300px)] w-[881px]" />
        <img
          className="absolute top-[256px] left-[740px] w-[236px] h-[60px] overflow-hidden z-[1]"
          alt=""
          src="/logo-1.svg"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[97px_0px] min-w-[500px] max-w-full mq800:gap-[97px_0px] mq800:min-w-full mq450:gap-[97px_0px]">
        <div className="self-stretch flex flex-col items-start justify-start min-h-[528px] max-w-full">
          <div className="w-[620px] flex flex-col items-center justify-start pt-0 pb-[9px] pr-[9px] pl-0 box-border relative max-w-full">
            <div className="self-stretch flex flex-col items-center justify-start pt-12 px-[58px] pb-[47px] box-border relative gap-[130px] max-w-full z-[1] mq800:gap-[130px] mq800:pl-[29px] mq800:pr-[29px] mq800:box-border mq450:gap-[130px]">
              <div className="w-full h-full absolute !m-[0] right-[-9px] bottom-[-8.9px] rounded-11xl [background:linear-gradient(177.23deg,_#423ee0,_#812de2)] [filter:blur(90px)]" />
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0.1px] left-[0px]">
                <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-11xl [background:linear-gradient(177.23deg,_#9c2cf3,_#3a49f9)]" />
                <img
                  className="absolute h-full w-full top-[0px] right-[0.4px] bottom-[-0.1px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/card-1-mask.svg"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-between py-0 pr-px pl-0 gap-[20px] mq800:flex-wrap">
                <div className="w-[281px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[17px_0px]">
                    <div className="w-[244px] h-[25px] relative font-medium inline-block shrink-0 z-[2]">
                      Current Balance
                    </div>
                    <div className="self-stretch h-[49px] relative text-[28px] font-medium text-white inline-block shrink-0 whitespace-nowrap z-[2] mq450:text-3xl">
                      $5,750,20
                    </div>
                  </div>
                </div>
                <img
                  className="h-[68.3px] w-[87.1px] relative z-[2]"
                  loading="lazy"
                  alt=""
                  src="/mastercard-logo.svg"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start max-w-full text-gray-200">
                <div className="w-[452px] flex flex-row items-start justify-between gap-[20px] max-w-full mq800:flex-wrap">
                  <div className="h-[25px] w-[319px] relative tracking-[0.5px] font-medium inline-block shrink-0 z-[2]">
                    5282 3456 7890 1289
                  </div>
                  <div className="relative tracking-[0.5px] font-medium text-white text-right z-[2]">
                    09/25
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[223px] !m-[0] absolute right-[-44px] bottom-[-88.4px] flex flex-col items-start justify-start pt-0 pb-6 pr-[9px] pl-0 box-border z-[2] text-[12px] text-gray-300">
              <div className="self-stretch flex flex-col items-start justify-start pt-[29px] pb-[37px] pr-[55px] pl-[25px] relative gap-[52px] z-[1]">
                <div className="w-full h-full absolute !m-[0] right-[-9px] bottom-[-23.6px] rounded-11xl [background:linear-gradient(177.23deg,_#423ee0,_#812de2)] [filter:blur(90px)]" />
                <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0.4px] left-[0px]">
                  <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-11xl [background:linear-gradient(177.23deg,_#9c2cf3,_#3a49f9)]" />
                  <img
                    className="absolute h-full w-full top-[-0.4px] right-[0.5px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                    alt=""
                    src="/card-2-mask.svg"
                  />
                </div>
                <img
                  className="w-[66.3px] h-[40.3px] relative z-[2]"
                  alt=""
                  src="/logo-2.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[28px_0px]">
                  <div className="w-[102px] flex flex-col items-start justify-start gap-[10px_0px]">
                    <div className="self-stretch relative font-medium z-[2]">
                      Credit Card
                    </div>
                    <div className="w-[98px] flex flex-row items-end justify-start gap-[0px_19px] text-[13px] text-white">
                      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
                        <div className="self-stretch h-1.5 relative">
                          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-1.5 h-1.5 z-[2]" />
                          <div className="absolute top-[0px] left-[15px] rounded-[50%] bg-white w-1.5 h-1.5 z-[2]" />
                          <div className="absolute top-[0px] left-[29px] rounded-[50%] bg-white w-1.5 h-1.5 z-[2]" />
                          <div className="absolute top-[0px] left-[44px] rounded-[50%] bg-white w-1.5 h-1.5 z-[2]" />
                        </div>
                      </div>
                      <div className="relative leading-[162.7%] font-medium z-[2]">
                        1289
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-end justify-between gap-[20px] text-right text-[11px] text-white">
                    <img
                      className="h-[31.9px] w-[48.6px] relative z-[2]"
                      loading="lazy"
                      alt=""
                      src="/group.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5">
                      <div className="h-[23px] relative leading-[162.7%] font-medium inline-block shrink-0 z-[2]">
                        09/25
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[570px] flex flex-row items-start justify-start py-0 px-20 box-border max-w-full mq800:pl-10 mq800:pr-10 mq800:box-border">
          <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[20px] mq450:flex-wrap">
            <img
              className="h-[30px] w-[119px] relative overflow-hidden shrink-0"
              alt=""
              src="/logo-3.svg"
            />
            <img
              className="h-[51px] w-[100px] relative overflow-hidden shrink-0"
              alt=""
              src="/logo.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
