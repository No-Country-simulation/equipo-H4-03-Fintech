export default function CheckSelectionButton({ handler, name, value, content }) {
  return (
    <button
      className={`w-full flex items-center self-stretch p-4 rounded-xl border border-solid ${value ? 'border-primary justify-between' : 'border-[#797979]'} justify-start`}
      onClick={event => {
        event.preventDefault()
        handler(name)
      }}
    >
      <span className={`text-center font-normal text-base ${value ? 'text-primary' : 'text-black'}`}>
        {content}
      </span>
      {
        value &&
        <img src="/assets/check-circle-outline-rounded.svg" alt="check circle" />
      }
    </button>
  )
}
