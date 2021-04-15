import { useRouter } from "next/router";
import { useEffect } from "react";
import LoadingSpinner from "../Components/Common/LoadingSpinner";

const Dashboard = () => {
  const isAuthenticated = false;
  const router = useRouter();

  useEffect(() => {
    !isAuthenticated && router.push("/");
  }, []);

  return (
    <div className="dashboard">
      {isAuthenticated ? <h1>this is dashboard</h1> : <LoadingSpinner />}
    </div>
  );
};

export default Dashboard;
