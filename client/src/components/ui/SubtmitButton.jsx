export default function SubtmitButton({ value }) {
  return (
    <input
      type="submit"
      value={value}
      className="w-fit self-end text-white bg-primary px-6 py-3 text-base font-medium rounded-3xl cursor-pointer"
    />
  )
}
