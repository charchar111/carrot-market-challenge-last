import Link from "next/link";

export default function FootLink({ url, text, children }: any) {
  return (
    <div className="cursor-pointer hover:text-orange-500 transition-all ">
      <Link href={url}>
        <a>
          <div className="flex flex-col justify-center">
            {children}
            {text}
          </div>
        </a>
      </Link>
    </div>
  );
}
