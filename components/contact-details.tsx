import { HomeIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

function ContactDetails() {
  return (
    <div className="container flex flex-col items-center gap-3 mx-auto my-20 text-center">
      <h2 className="font-bold uppercase">Contact us</h2>
      <h1>Get in Touch With Our Experts</h1>
      <p className="w-3/5 mt-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
        tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim
        veniam quis nostrud exercitation ullamco
      </p>
      <ul className="flex flex-col gap-6 my-8">
        <li className="flex flex-col items-center gap-2">
          <HomeIcon width={30} color="#014458"/>
          <span className="max-w-sm text-center text-gray-600">
            Rasimpaşa Mah. Halitağa Cad. Özlem İş Hanı Apt. No:32 31 Kadıköy
            İstanbul / Türkiye / 34716
          </span>
        </li>
        <li className="flex flex-col items-center gap-2">
          <EnvelopeIcon width={30} color="#014458"/>
          <span className="max-w-sm text-center text-gray-600">
            <a href="mailto:contact@bayber.co">contact@bayber.co</a>
          </span>
        </li>
        <li className="flex flex-col items-center gap-2">
          <PhoneIcon width={30} color="#014458"/>
          <span className="max-w-sm text-center text-gray-600">
            <a href="tel:+905343581590">+905343581590</a>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default ContactDetails;
