import { useEffect, useRef, useState } from 'react';
import PackageTickSVG from '@/public/package-tick.svg';
import Image from "next/image";

function QuoteForm() {
  type FormData = {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  };
  const [data, setData] = useState<FormData>();

  const onSubmitData = async () => {
    console.log(data);
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        console.log('Response succeeded!');
      }
    });
  };
  return (
    <div className="container z-10 flex flex-col items-center justify-center max-w-5xl mx-auto mb-20 -mt-20 bg-white shadow-lg">
      <div className="w-full h-20 bg-[#014458] flex items-center px-20 py-12">
        <div className="flex items-center gap-4 font-bold text-white">
          <Image src={PackageTickSVG} alt="Package tick icon" width={50}/>
          <span>Request a Quote</span>
        </div>
      </div>
      <form className="flex flex-col justify-center px-20 py-16 border-none">
        <div className="flex gap-12">
          <div className="flex flex-col grow">
            <label className="pl-2 text-base font-bold leading-5 ">Name</label>
            <input
              type="text"
              name="name"
              minLength={4}
              placeholder="Name"
              required
              className="w-full h-12 px-4 mt-2 mb-4 rounded-sm bg-white/80 order-solid drop-shadow-md outline-0"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="flex flex-col grow">
            <label className="pl-2 text-base font-bold leading-5 ">Email</label>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full h-12 px-4 mt-2 mb-4 rounded-sm bg-white/80 drop-shadow-md outline-0"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col grow">
            <label className="pl-2 text-base font-bold leading-5 ">
              Phone number
            </label>
            <input
              type="tel"
              placeholder="Phone number"
              required
              className="w-full h-12 px-4 mt-2 mb-4 rounded-sm bg-white/80 drop-shadow-md outline-0"
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
          </div>
        </div>
        <label className="pl-2 mb-2 text-base font-bold leading-5 ">
          Message
        </label>
        <textarea
          rows={5}
          maxLength={1000}
          placeholder="Message"
          onChange={(e) => setData({ ...data, message: e.target.value })}
          className="w-full px-4 py-2 mt-2 mb-4 rounded-sm bg-white/80 drop-shadow-md outline-0"
        ></textarea>
        <button
          onClick={() => onSubmitData()}
          type="button"
          className="w-full h-12 mt-4 font-bold text-white rounded-sm bg-[#014458]"
        >
          Request a Quote
        </button>
      </form>
    </div>
  );
}

export default QuoteForm;
