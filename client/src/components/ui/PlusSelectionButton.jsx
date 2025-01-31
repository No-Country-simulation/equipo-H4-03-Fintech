export default function PlusSelectionButton({ handler, name, value, content }) {
  return (
    <button
      className={`w-full flex justify-between items-center p-4 rounded-xl border border-solid ${value ? 'border-primary':'border-muted'}`}
      onClick={() => handler(name)}
    >
      <span className={`text-center font-normal ${value ? 'text-primary' : 'text-muted'}`}>
        {content}
      </span>
      {
        value ?
          <img src="/assets/add-circle-outline-rounded-checked.svg" alt="add circle" /> :
          <img src="/assets/add-circle-outline-rounded.svg" alt="add circle" />
      }
    </button>
  )
}
