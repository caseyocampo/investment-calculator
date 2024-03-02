export default function Footer() {
  const date = new Date()

  let currentYear = date.getFullYear()

  return (
    <footer className="max-w-3xl m-auto mt-48">
      <p>
        © {currentYear} Investment Calculator. View on <a href="https://github.com/caseyocampo/investment-calculator">GitHub</a>.
      </p>
    </footer>
  )
}
