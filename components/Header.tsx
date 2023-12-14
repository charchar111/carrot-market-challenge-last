export default function Header({ title }: any) {
  return (
    <header className="p-3 flex justify-center">
      {title ? (
        <h2 className="font-semibold text-2xl text-gray-600  ">{title}</h2>
      ) : null}
    </header>
  );
}
