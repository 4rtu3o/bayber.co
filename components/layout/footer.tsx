import BayberLogoSVG from '@/public/bayber-logo.svg';
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="w-full h-full bg-white shadow-lg shadow-black">
        <div className="container flex items-center justify-between p-12 mx-auto">
          <div className="w-96">
            <h1 className="mb-2 text-[#014458]">Bayber</h1>
            <p>
              is a representative logistics operator providing full range of
              service in the sphere of customs cargo and transportation
              worldwide.
            </p>
          </div>
          <div className="flex gap-12">
            <div className="w-[23rem]">
              <h2 className="font-bold text-[#014458]">Our location</h2>
              <p>
                Rasimpaşa Mah. Halitağa Cad. Özlem İş Hanı Apt. No:32 31 Kadıköy
                İstanbul / Türkiye / 34716
              </p>
            </div>
            <div className="w-40">
              <h2 className="font-bold text-[#014458]">How can we help?</h2>
              <p>
                <a href="mailto:contact@bayber.co">contact@bayber.co</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-white shadow-lg shadow-black">
        <div className="container flex items-center justify-between px-12 py-4 mx-auto text-sm font-light text-gray-400">
          <Image src={BayberLogoSVG} alt="Bayber logo" width={100}/>
          <span>© 2023 Bayber Lojistik Ve Ticaret Limited Şirketi - All Rights Reserved</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
