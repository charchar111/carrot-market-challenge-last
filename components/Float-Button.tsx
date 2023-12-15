import Link from "next/link";

export default function FloatButton() {
  return (
    <div className="pointer-events-none fixed w-full bottom-36 max-w-2xl mx-auto left-0 right-0">
      <div className="flex justify-end  ">
        <Link href="/tweet/upload">
          <a className="pointer-events-auto opacity-80 hover:opacity-100 transition-all mr-5">
            <div className="flex flex-col justify-center h-14 w-14 p-2 text-white bg-orange-400 rounded-full">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
