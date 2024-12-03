import { useNavigate } from "react-router-dom";
import useAutherize from "../features/authenticateion/useAutherize";
import { useEffect } from "react";
import Loader from "./Loader";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isAutherized, isLoading, user, isVerified } =
    useAutherize();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isVerified && !isLoading) {
      navigate("/");
      toast.error("پروفایل شما هنوز تایید نشده است");
    }
    if (!isAutherized && !isLoading) navigate("/not-access");
  }, [isAuthenticated, isAutherized, isLoading, navigate]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loader />
      </div>
    );

  if (isAuthenticated && isAutherized) return children;
}

export default ProtectedRoute;
