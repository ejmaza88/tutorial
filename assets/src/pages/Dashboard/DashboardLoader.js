import {useNetwork} from "../../utils/Network";


const DashboardLoader = async () => {
  const {userList} = useNetwork()

  return await userList()
}


export {
  DashboardLoader
}
