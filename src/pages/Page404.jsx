
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <div className="container-general">
        <div className="page404">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n&apos;existe pas.</p>
          <Link
            to={"/"}>
            <p>Go home</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
