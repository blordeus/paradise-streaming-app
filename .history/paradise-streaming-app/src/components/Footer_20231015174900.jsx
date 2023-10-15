import { CheckCircleIcon, s } from '@heroicons/react/20/solid'

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
            Pre-Save Paradise
          </button>
      </a>
    </div>
  );
};
