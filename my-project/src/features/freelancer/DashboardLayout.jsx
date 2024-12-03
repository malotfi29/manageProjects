import DashboardHeader from "./DashboardHeader"
import Stats from "./Stats"
import useOwnerProjects from "../projects/useOwnerProjects"
import Loader from "../../ui/Loader"
import useProposals from "../proposals/useProposals"

function DashboardLayout() {
  const{isLoading,proposals}=useProposals()
  if (isLoading) return <Loader/>
  return (
    <div>
      <DashboardHeader/>
      <Stats proposals={proposals}/>
    </div>
  )
}

export default DashboardLayout


