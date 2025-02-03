export default function FormInput({ label, name, value, handler, errors, row }) {
  return (
    <article className={`w-full flex gap-2 ${row ? 'flex-row items-baseline': 'flex-col'}`}>
      <span>{label}</span>
      <input
        className="p-2 b-1 border bg-transparent placeholder:text-gray-500 placeholder:italic placeholder:opacity-60"
        name={name}
        value={value}
        onChange={handler}
      />
      {errors && Array.isArray(errors) && (
        <ul>
          {errors.map((error, index) => (
            <li key={index} className="text-destructive text-sm">
              {error}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
