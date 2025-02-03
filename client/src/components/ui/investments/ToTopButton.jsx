export default function ToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className="w-full flex justify-center items-center gap-2.5 px-4 my-2"
    >
      <span className="font-medium text-base text-primary">
        Ir arriba
      </span>
      <img
        src="/assets/arrow-up.svg" alt="arrow up"
        className="size-6"
      />
    </button>
  )
}
