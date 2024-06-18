import { FaMicrochip} from "react-icons/fa6";
import { IoIosApps } from "react-icons/io";
import { FaBrain} from "react-icons/fa";
import { BiSolidMicrochip } from "react-icons/bi";

const Home = () =>{
    return(
            <div className='service-con'>
                <div className='service-card'>
                    <FaMicrochip className='service-icon' size={50}/>
                    <h4>AI / ML</h4>
                    <p>Our mission is to leverage technology to create a safer, more efficient world. We strive to deliver top-notch solutions tailored to the unique needs of our clients.</p>
                </div>

                <div className='service-card'>
                    <IoIosApps className='service-icon' size={50}/>
                    <h4>App Development</h4>
                    <p>Our mission is to leverage technology to create a safer, more efficient world. We strive to deliver top-notch solutions tailored to the unique needs of our clients.</p>
                </div>

                <div className='service-card'>
                    <BiSolidMicrochip className='service-icon' size={50}/>
                    <h4>Embedded System</h4>
                    <p>Our mission is to leverage technology to create a safer, more efficient world. We strive to deliver top-notch solutions tailored to the unique needs of our clients.</p>
                </div>

                <div className='service-card'>
                    <FaBrain className='service-icon' size={50} />
                    <h4>Innovative Solutions</h4>
                    <p>Our mission is to leverage technology to create a safer, more efficient world. We strive to deliver top-notch solutions tailored to the unique needs of our clients.</p>
                </div>
            </div>
    );
}