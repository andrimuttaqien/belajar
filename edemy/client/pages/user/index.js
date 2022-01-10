import { useEffect, useState, useContext } from "react";
import { Context } from "../../context";
import axios from "axios";
export default function index() {
  const [hidden, setHidden] = useState(true);
  const {
    state: { user },
  } = useContext(Context);

  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/current-user");
      setHidden(false);
      console.log(data);
    } catch (err) {
      setHidden(true);
      console.log(err);
    }
  };
  return (
    <>
      <div className="p-5 mb-1 bg-light jumbotron text-center">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold textJumbotron">
            {JSON.stringify(user, null, 4)}
          </h1>
        </div>
      </div>
    </>
  );
}
