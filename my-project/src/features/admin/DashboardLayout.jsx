import useProposals from "../proposals/useProposals";
import DashboardHeader from "./DashboardHeader"
import useUsers from "./useUsers"
import useProjects from "../../hooks/useProjects"
import Loader from "../../ui/Loader";
import Stats from "./Stats";

function DashboardLayout() {
  const{isLoading:isLoading1,proposals}=useProposals()
  const {isLoading:isLoading2,projects}=useProjects()
  const{isLoading:isLoading3,users}=useUsers()
 

  if(isLoading1 || isLoading2 || isLoading3) return <Loader/>
  
  return (
    <div>
      <DashboardHeader/>
      <Stats proposals={proposals.length} projects={projects.length} users={users.length}/>
    </div>
  )
}

export default DashboardLayout
