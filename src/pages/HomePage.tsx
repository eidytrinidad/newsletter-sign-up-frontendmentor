import "../App.css";
import { FormComponent } from "../components/Form/FormComponent";
import { IlustrationContainer } from "../components/IlustrationComponent/IlustrationContainer";
import { FormContainerProvider } from "../context/formcontainer/FormContainer.context";

export const HomePage = () => {
  return (
    <main className="app-container">
      <IlustrationContainer />
      <FormContainerProvider>
        <FormComponent />
      </FormContainerProvider>
    </main>
  );
};
