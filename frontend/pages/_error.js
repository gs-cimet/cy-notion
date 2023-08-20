import { useRouter } from "next/router";
import Notice from "../components/notice";

const ErrorPage = ({ ...props }) => {
  return (
    <Notice>
      <h3>Error Occured</h3>
      <p>The requested page Has some error.</p>
    </Notice>
  );
};

export default ErrorPage;
