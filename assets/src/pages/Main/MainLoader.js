import {useNetwork} from "../../utils/Network";


const MainLoader = async () => {
  const {categories} = useNetwork()

  return await categories()
}


export {
  MainLoader
}
