import Styles from "./ContactPage.module.scss";
import ContactForm from "../../components/ContactForm";

const page = () => {
  return (
    <div className={Styles.ContactPageContainer}>
      <p className={Styles.header}>Contactez-Nous</p>

      <ContactForm />
    </div>
  );
};

export default page;
