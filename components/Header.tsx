export default function Header({ title }: any) {
  return (
    <header className="top-0 pt-8 border-2 backdrop-blur-sm p-3 flex justify-center fixed w-full max-w-2xl left-0 right-0 mx-auto bg-[rgba(255,255,255,0.8)]">
      <div>
        {title ? (
          <h2 className="font-semibold text-2xl text-gray-600  ">{title}</h2>
        ) : null}
      </div>
    </header>
  );
}
