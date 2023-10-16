import { CheckCircleIcon } from '@heroicons/react/20/solid'

export const Footer = () => {
  return (
    <div className='mt-12'>
      <p>
        Hope you enjoyed your stay here at Paradise. Looking forward to seeing
        you again. Click the button below to grab a souvenir on your way out
      </p>
      <a href="https://distrokid.com/hyperfollow/bryanlordeus/paradise">
          <button
            type="button"
            className="mt-12 inline-flex items-center gap-x-2 rounded-md bg-sky-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
</svg>

            Pre-Save Paradise
          </button>
      </a>
    </div>
  );
};
