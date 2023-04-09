import Image from 'next/image';
import AboutImage from '@/public/about.jpeg';
import PackageSVG from '@/public/package.svg';

function About() {
  return (
    <div className="container flex mx-auto my-20">
      <div className="relative w-1/3">
        <Image src={AboutImage} alt="About image" />
        <div className="bg-[#014458] w-56 px-6 py-8 absolute bottom-8 left-8 flex flex-col items-center justify-center gap-3 text-white">
          <Image src={PackageSVG} alt="package icon" width={70} />
          <span className="mt-2 text-sm font-bold text-center uppercase">
            More than
          </span>
          <span className="text-4xl font-bold">250</span>
          <span className="text-sm font-bold text-center uppercase">
            Successful monthly shipments
          </span>
        </div>
      </div>
      <div className="flex flex-col w-2/3 gap-4 px-8">
        <h2 className="font-bold uppercase">
          Providing Full Range Of Transportation Worldwide.
        </h2>
        <h1>Reliable Logistic & Transport Solutions Saves Your Time!</h1>
        <div className="flex flex-col gap-8 mt-5">
          <p>
            Bayber - is a representative logistics operator providing full range
            of service in the sphere of customs clearance transportation
            worldwide for any cargo.
          </p>
          <p>
            We pride ourselves on providing the best transport and shipping
            services available allover the world. Our skilled personnel,
            utilising the latest communications, tracking and combined with
            experience through integrated supply chain solutions!
          </p>
          <div>
            <div className="flex items-center ml-4">
              <div className="h-3 w-3 bg-[#014458] mr-4"></div>
              <h3>We pride ourselves</h3>
            </div>
            <p className="mt-2 ml-11">
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
          <div>
            <div className="flex items-center ml-4">
              <div className="h-3 w-3 bg-[#014458] mr-4"></div>
              <h3>Reliability</h3>
            </div>
            <p className="mt-2 ml-11">
              We provide with cargo safety throughout all the stages of our
              delivery process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
