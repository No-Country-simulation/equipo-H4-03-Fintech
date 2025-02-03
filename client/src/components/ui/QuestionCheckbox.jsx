export default function QuestionCheckbox({ title, name, value, checked, handler }) {
  return (
    <article className="flex flex-row gap-4">
      <input
        type="checkbox"
        id={`${name}-${value}`}
        name={name}
        value={value}
        checked={checked}
        onChange={handler}
      />
      <label htmlFor={`${name}-${value}`}>
        {title}
      </label>
    </article>
  )
}
