import { useGlobalContext } from "../../context/formcontainer/FormContainer.context";
import "./FormContainer.css";
import { useNavigate } from "react-router-dom";

export const FormComponent = () => {
  const { ListSection } = useGlobalContext();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    navigate("/submit");
  };

  return (
    <section className="text-container" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <h1 className="mb-4 page-title">Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>

        <div className="list-container mt-5">
          <ul>
            {ListSection?.map((item) => (
              <li className="flex  items-start" key={item.text}>
                <img src={item.img} alt={item.text} className=" mt-1  mr-3" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <form className="form-container mt-8">
        <label htmlFor="email">Email address</label>
        <input
          type="text"
          className="form-control w-full rounded-md mt-2 mb-6"
          placeholder="email@company.com"
        />
        <button className="btn-primary w-full rounded-md">
          Subscribe to monthly newsletter
        </button>
      </form>
    </section>
  );
};
