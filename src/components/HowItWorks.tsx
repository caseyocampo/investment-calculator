export default function HowItWorks() {
  return (
    <section className="m-auto mb-2 mt-8 max-w-4xl">
      <h1 className="mb-4 text-2xl">How it works</h1>

      <h2 className="my-6 font-bold">What is compound interest?</h2>
      <p>
        Compound interest is interest that applies not only to the initial
        principal of an investment or a loan, but also to the accumulated
        interest from previous periods. In other words, compound interest
        involves earning, or owing, interest on your interest. –{" "}
        <a href="https://www.investopedia.com/terms/c/compoundinterest.asp">
          Investopedia.com
        </a>
      </p>

      <h2 className="my-6 font-bold">Formula for compound interest</h2>
      <p>
        Compound interest = total amount of principal and interest in future (or
        future value) minus principal amount at present (or present value)
      </p>
      <p className="my-4 ml-4">
        P × (1 + R)<sup>T</sup> - P
      </p>
      <p className="mb-4 ml-4">
        P = principal investment <br />
        R = return rate <br />
        T = time invested in years <br />
      </p>

      <h2 className="my-6 font-bold">Data is stored locally</h2>
      <p className="mb-28">
        Numbers entered into the calculator are saved via{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">
          local storage
        </a>{" "}
        so users can come back to the same page and their data will persist.
      </p>
    </section>
  );
}
