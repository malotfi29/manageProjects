import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAutherize() {
  const { isLoading, user } = useUser();
  const { pathname } = useLocation();
  let isAuthenticated = false;
  if (user) isAuthenticated = true;

  let isAutherized = false;

  let isVerified=false
  if(user && +user.status===2) isVerified=true

  //   if (pathname.includes("owner")) {
  //     if (user && user.role === "OWNER") isAutherized = true;
  //   }

  //   if (pathname.includes("FREELANCER")) {
  //     if (user && user.role === "FREELANCER") isAutherized = true;
  //   }

  //   if (pathname.includes("ADMIN")) {
  //     if (user && user.role === "ADMIN") isAutherized = true;
  //   }

  const ROLES = {
    admin: "ADMIN",
    freelancer: "FREELANCER",
    owner: "OWNER",
  };

  const desiredRole = pathname.split("/").at(1);

  if (Object.keys(ROLES).includes(desiredRole)) {
    if (user && user.role === ROLES[desiredRole]) isAutherized = true;
  }

  return { isAuthenticated, isAutherized, isLoading, user,isVerified };
}
