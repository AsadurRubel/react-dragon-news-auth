import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"


const RightSideNav = () => {
    return (
        <div >
            <div className="space-y-3 mb-6">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn w-full">
                    <FaGoogle />
                    Login With Google
                </button>
                <button className="btn w-full">
                    <FaGithub />
                    Login With Github
                </button>
            </div>

            <div>
                <h2 className="text-3xl">Find Us On</h2>
                <div className="my-2 ">
                   <div className="border p-4 rounded-t-lg">
                   <a className="flex gap-2 items-center text-xl" href="">
                        <FaFacebook />
                        Facebook
                    </a>
                   </div>
                   <div className="border p-4">
                   <a className="flex gap-2 items-center text-xl" href="">
                   <FaTwitter />
                        Twitter
                    </a>
                   </div>
                   <div className="border p-4 rounded-b-lg">
                   <a className="flex gap-2 items-center text-xl" href="">
                        <FaInstagram />
                        Instagram
                    </a>
                   </div>
                </div>
            </div>
            <div>
            <h2 className="text-3xl mt-6">Q-Zone</h2>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />

            </div>

        </div>

    );
};

export default RightSideNav;