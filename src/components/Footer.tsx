export default function Footer() {
  const date = new Date();

  let currentYear = date.getFullYear();

  return (
    <footer className="m-auto mt-48 max-w-3xl">
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
