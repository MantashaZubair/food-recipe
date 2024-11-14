import { GiCogLock } from "react-icons/gi";
import {Link, useLocation} from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  console.log(location)
  const pathnames = location.pathname.split("/").filter((x) => x);
  let breadcrumbPath = "";

  // if (pathnames.length === 0) {
  //   // If the current route is the home route ('/'), do not render the breadcrumbs
  //   return null;
  // }

  return (
    <div className="breadcrumbs">
      {pathnames.length>0&&<Link to="/">Home</Link>}
      {pathnames.map((name, index) => {
        console.log(name)
        breadcrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;
        console.log(pathnames, breadcrumbPath);

        return isLast ? (
          <span key={breadcrumbPath}> /{decodeURIComponent(name)} </span>
        ) : (
          <span key={breadcrumbPath}>
            {" "}
            / <Link to={breadcrumbPath}>{decodeURIComponent(name)}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;