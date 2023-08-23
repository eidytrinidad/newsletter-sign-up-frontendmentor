import "../css/SubmitPage.css";

export default function SubmitPage() {
  return (
    <section className="submit-page flex flex-col justify-between">
      <div className="text-icon-content flex flex-col ">
        <div className="image-box mb-10">
          <img src="/assets/images/icon-success.svg" alt="" />
        </div>
        <h1 className="page-title tracking-tight mb-6">
          Thanks for subscribing!
        </h1>
        <p>
          A confirmation email has been sent to <b>ash@loremcompany.com</b>.
          Please open it and click the button inside to confirm your
          subscription.
        </p>
      </div>
      <button className="btn-primary w-full rounded-md">Dismiss message</button>
    </section>
  );
}
