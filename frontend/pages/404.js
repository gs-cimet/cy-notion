import { useRouter } from "next/router";
import Notice from "../components/notice";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <Notice>
      <h3>404 Not Found</h3>
      <p>The requested page was not found.</p>
    </Notice>
  );
};

export default NotFoundPage;
