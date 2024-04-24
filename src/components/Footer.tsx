export default function Footer() {
  const date = new Date()

  let currentYear = date.getFullYear()

  return (
    <footer className="m-auto max-w-4xl pb-4">
      <p className="mt-8">
        © {currentYear} Investment Calculator. View this project on <a href="https://github.com/caseyocampo/investment-calculator">GitHub</a>.
      </p>
    </footer>
  )
}
