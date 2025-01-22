export default function QuestionRadio({ title, name, value, checked, handler }) {
  return (
    <article className="flex flex-row gap-4">
      <input
        type="radio"
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
