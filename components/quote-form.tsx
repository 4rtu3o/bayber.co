import PackageTickSVG from '@/public/package-tick.svg';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { Turnstile } from '@marsidev/react-turnstile';
import { useRef, useState } from 'react';

type Status = 'error' | 'expired' | 'solved';

const siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY!;

function QuoteForm() {
  const { t } = useTranslation('common');

  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // stop browser from refreshing when form is submitted
    const formData = new FormData(formRef.current!); // grab the form data

    const token = formData.get('cf-turnstile-response');
    const res = await fetch('/api/verify', {
      method: 'POST',
      headers: { 'content-type': 'text/plain' },
      body: token,
    });

    const verifyData = await res.json();

    if (verifyData.success) {
      formData.delete('cf-turnstile-response');
      const data = JSON.stringify(Object.fromEntries(formData));
      await fetch('/api/form-submit', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: data,
      });
    }

    formRef.current?.reset;
  }

  const [status, setStatus] = useState<Status | null>(null);

  return (
    <>
      <div className="container z-10 flex flex-col items-center justify-center max-w-5xl mx-auto mb-20 -mt-20 bg-white shadow-lg">
        <div className="w-full h-20 bg-[#014458] flex items-center px-20 py-12">
          <div className="flex items-center gap-4 font-bold text-white">
            <Image src={PackageTickSVG} alt="Package tick icon" width={50} />
            <span>{t('quoteForm.title')}</span>
          </div>
        </div>
        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="flex flex-col justify-center px-20 py-16 border-none"
        >
          <div className="flex gap-12">
            {/* NAME */}
            <div className="flex flex-col grow">
              <label
                htmlFor="name"
                className="pl-2 text-base font-bold leading-5 "
              >
                {t('quoteForm.nameLabel')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                minLength={4}
                placeholder={t('quoteForm.namePlaceholder') satisfies string}
                required
                className="w-full h-12 px-4 mt-2 mb-4 rounded-sm bg-white/80 order-solid drop-shadow-md outline-0"
              />
            </div>
            {/* END NAME */}

            {/* EMAIL */}
            <div className="flex flex-col grow">
              <label
                htmlFor="email"
                className="pl-2 text-base font-bold leading-5 "
              >
                {t('quoteForm.emailLabel')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t('quoteForm.emailPlaceholder') satisfies string}
                required
                className="w-full h-12 px-4 mt-2 mb-4 rounded-sm bg-white/80 drop-shadow-md outline-0"
              />
            </div>
            {/* END EMAIL */}

            {/* PHONE */}
            <div className="flex flex-col grow">
              <label
                htmlFor="tel"
                className="pl-2 text-base font-bold leading-5 "
              >
                {t('quoteForm.phoneLabel')}
              </label>
              <input
                id="tel"
                type="tel"
                name="tel"
                placeholder={t('quoteForm.phonePlaceholder') satisfies string}
                required
                className="w-full h-12 px-4 mt-2 mb-4 rounded-sm bg-white/80 drop-shadow-md outline-0"
              />
            </div>
            {/* END PHONE */}
          </div>
          {/* MESSAGE */}
          <label
            htmlFor="message"
            className="pl-2 mb-2 text-base font-bold leading-5 "
          >
            {t('quoteForm.messageLabel')}
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            maxLength={1000}
            required
            placeholder={t('quoteForm.messagePlaceholder') satisfies string}
            className="w-full px-4 py-2 mt-2 mb-4 rounded-sm bg-white/80 drop-shadow-md outline-0"
          ></textarea>
          {/* END MESSAGE */}
          <Turnstile
            siteKey={siteKey}
            onError={() => setStatus('error')}
            onExpire={() => setStatus('expired')}
            onSuccess={() => setStatus('solved')}
          />
          <button
            disabled={status !== 'solved'}
            type="submit"
            className={`w-full h-12 mt-4 font-bold text-white rounded-sm transition-colors bg-[#014458] ${
              status !== 'solved' ? 'bg-gray-400 text-gray-700' : ''
            }`}
          >
            {t('common.requestQuoteButton')}
          </button>
        </form>
      </div>
    </>
  );
}

export default QuoteForm;
