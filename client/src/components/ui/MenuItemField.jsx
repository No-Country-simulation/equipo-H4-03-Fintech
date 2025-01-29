export default function MenuItemField({ fieldId, fieldType, label, placeholder }) {
  
  const handlePencilClick = id => {
    const $input = document.getElementById(id)
    if ($input) {
      $input.disabled = !$input.disabled
    }
  }

  return (
    <aside className="flex flex-col gap-2">
      <span class="font-normal text-base text-black">{label}</span>
      <article className="h-[55px] flex items-center justify-between px-4 border border-black rounded-sm">
        <input
          type={fieldType ? fieldType : "text"}
          placeholder={placeholder}
          className="bg-transparent outline-none border-none"
          disabled={true}
          id={fieldId}
        />
        <img
          src="/assets/pencil.svg"
          alt="pencil"
          className="cursor-pointer"
          onClick={() => handlePencilClick(fieldId)}
        />
      </article>
    </aside>
  )
}
