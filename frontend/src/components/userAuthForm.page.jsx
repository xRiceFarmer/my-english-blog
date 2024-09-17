import { FaEnvelope } from "react-icons/fa";
const UserAuthForm = () => {
    return(
        <label className="input input-bordered flex items-center gap-2">
            <FaEnvelope/>
            <input type="text" className="grow" placeholder="Email" />
        </label>
        
    )
}
export default UserAuthForm