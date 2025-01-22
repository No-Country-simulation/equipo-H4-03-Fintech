export default function QuestionsContainer({ title, children }) {
  return (
    <section className="flex flex-col gap-4">
      <span className="text-subtitle text-primary">{title}</span>
      {children}
    </section>
  )
}
