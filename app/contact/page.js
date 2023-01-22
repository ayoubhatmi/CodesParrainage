import Styles from "./ContactPage.module.scss";
import ContactForm from "../../components/ContactForm";

const page = () => {
  return (
    <div className={Styles.ContactPageContainer}>
      <h2>Contactez-Nous</h2>
      <ContactForm />
    </div>
  );
};

export default page;
