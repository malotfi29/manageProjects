import DashboardHeader from "./DashboardHeader"
import Stats from "./Stats"
import useOwnerProjects from "../projects/useOwnerProjects"
import Loader from "../../ui/Loader"

function DashboardLayout() {
  const{isLoading,projects}=  useOwnerProjects()
  if (isLoading) return <Loader/>
  return (
    <div>
      <DashboardHeader/>
      <Stats projects={projects}/>
    </div>
  )
}

export default DashboardLayout
