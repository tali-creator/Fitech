export default function Premium() {
  return (
    <div>
      <section className=" text-white  py-10 px-5 md:px-20 lg:px-20">
        <div className="max-w-7xl mx-auto lg:gap-8 flex flex-col lg:flex-row items-center">
          {/* Left: Image */}
          <div className="flex-1 relative mb-10 lg:mb-0 ">
            <div className=" flex justify-center">
              <div className="w-fit  rounded-4xl shadow-[10px 10px 10px 10px] shadow-blue-400">
                <img
                  src="/iPhone.png"
                  alt="phone image"
                  className="relative z-10 rounded-xl shadow-lg"
                />
              </div>
              {/* ellipse borders */}
              
              {/* <div className="">
                <div
                  className="w-[340px] h-[550px]  -top-16 -left-10 rotate-130 border-[2px] transform translate-x-[50%]
                border-[hsla(0,0%,100,1)] rounded-[50%] absolute"
                ></div>

                <div className="w-[340px] h-[550px] -top-8  -left-12 rotate-130 transform translate-x-[50%] border-[2px] border-[hsla(0,0%,100,1)]  rounded-[50%] absolute"></div>

                <div className="w-[30px] h-[550px] top-4 -left-18 rotate-130 transform translate-x-[50%] border-[2px] border-[hsla(0,0%,100,1)]  rounded-[50%] absolute"></div>
              </div> */}
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex-1">
            <h2 className="text-pink-500 text-sm font-semibold tracking-wide">
              FEATURES
            </h2>
            <h1 className="text-4xl font-bold mt-2 mb-5">Crypto Premium</h1>

            {/* Features */}
            <div className="space-y-5">
              {/* Feature 1 */}
              <div className="flex items-start space-x-3">
                <span className="text-pink-500 text-lg mt-1">✦</span>
                <div>
                  <h3 className="text-lg font-semibold">Budgeting Intervals</h3>
                  <p className="text-sm text-gray-400">
                    Take control of your crypto investments with customizable
                    budgeting intervals. Whether you prefer daily, weekly, or
                    monthly planning, our intuitive tools help you track
                    spending, set limits, and stay on top of your portfolio.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-3">
                <span className="text-pink-500 text-lg mt-1">✦</span>
                <div>
                  <h3 className="text-lg font-semibold">
                    Real-Time Market Updates
                  </h3>
                  <p className="text-sm text-gray-400">
                    Stay ahead of the market with live updates on cryptocurrency
                    prices and trends. Receive instant notifications for
                    significant price changes, ensuring you never miss a trading
                    opportunity. Our platform keeps you informed with accurate,
                    real-time data to empower your investments.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-3">
                <span className="text-pink-500 text-lg mt-1">✦</span>
                <div>
                  <h3 className="text-lg font-semibold">
                    Enhanced Security Features
                  </h3>
                  <p className="text-sm text-gray-400">
                    Your security is our priority. We offer advanced security
                    tools like two-factor authentication, biometric login, and
                    encrypted wallets to safeguard your investments. With
                    real-time fraud alerts and cold storage integration, you can
                    trade and store assets worry-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
