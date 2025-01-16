export default function FormInput({ label, name, value, handler, error,type }) {
  return (
    <article className="w-full flex flex-col gap-2">
      <span>{label}</span>
      <input
        className="p-2 b-1 border bg-transparent placeholder:text-gray-500 placeholder:italic placeholder:opacity-60"
        name={name}
        value={value}
        onChange={handler}
        type={type}
      />
      {error && (
        <span className="text-destructive text-sm">
          {error}
        </span>
      )}
    </article>
  )
}
