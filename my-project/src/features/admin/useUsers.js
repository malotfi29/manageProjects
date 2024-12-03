import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/authService";

export default function useUsers(){
    const {data,isLoading}= useQuery({
        queryKey:["users"],
        queryFn:getUsers,
        retry:false,
    })
    const {users} =data || {}
    return{isLoading,users}
}