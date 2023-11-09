import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function loading() {
  return (
    <div>
      <Skeleton width="5rem"/>
      <Skeleton height="20rem"/>
    </div>
  );
}

export default loading;
