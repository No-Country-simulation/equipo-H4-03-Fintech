export default function QuestionsContainer({ title, children }) {
  return (
    <section className="w-full flex flex-col gap-4">
      <span className="text-subtitle">{title}</span>
      {children}
    </section>
  )
}
