export default function MenuItemFieldGroup({ title, children }) {
  return (
    <section className="flex flex-col gap-3 px-6 mb-4 text-nowrap">
      <span className="font-medium text-base text-black">{title}</span>
      {children}
    </section>
  )
}
