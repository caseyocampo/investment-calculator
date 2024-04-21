export default function Footer() {
  const date = new Date();

  let currentYear = date.getFullYear();

  return (
    <footer className="m-auto mb-2 mt-8 max-w-4xl">
      <p>
        © {currentYear} Investment Calculator. View this project on{" "}
        <a href="https://github.com/caseyocampo/investment-calculator">
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}
