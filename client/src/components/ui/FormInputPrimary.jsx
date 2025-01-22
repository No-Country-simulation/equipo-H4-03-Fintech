export default function FormInputPrimary({ label, name, value, handler, errors, row, type }) {
  return (
    <article className={`w-full flex gap-2 ${row ? 'flex-row items-baseline' : 'flex-col'}`}>
      <span className="text-primary font-semibold">{label}</span>
      <input
        className="p-2 b-1 border rounded-sm bg-transparent placeholder:text-gray-500 placeholder:italic placeholder:opacity-60"
        name={name}
        value={value}
        onChange={handler}
        type={type ? type : "text"}
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
