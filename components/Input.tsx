export default function InputLabel({ label, register, ...rest }: any) {
  return (
    <label className="w-full">
      {!label ? null : <p className="ml-1 text-gray-400">{label}</p>}
      <input
        className="w-full border-2 mb-2 rounded-md p-2"
        type="text"
        {...register}
        {...rest}
      />
    </label>
  );
}
