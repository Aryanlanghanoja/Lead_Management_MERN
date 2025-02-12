import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import { MdMenuOpen, MdLightMode } from "react-icons/md";
import { FaShoppingCart, FaUser, FaShieldAlt } from "react-icons/fa";
import { IoMdMail, IoIosNotifications } from "react-icons/io";
import logo from "../../assets/Images/Logo.png";
import user from "../../assets/Images/user.webp";
import SearchBox from "../SearchBox";

const Header = () => {
    
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpennotificationDrop, setisOpennotificationDrop] = useState(false);
    const openMyAcc = Boolean(anchorEl);
    const openNotifications = Boolean(isOpennotificationDrop);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosemyAccDrop = () => {
        setAnchorEl(null);
    };

    const handleOpenNotificationDrop = () => {
        setisOpennotificationDrop(true);
    };

    const handleCloseNotificationDrop = () => {
        setisOpennotificationDrop(false);
    };

    return (
        <header className="d-flex align-items-center">
            <div className="container-fluid w-100">
                <div className="row d-flex align-items-center w-100">
                    {/* Logo Section */}
                    <div className="col-sm-2 part1">
                        <Link to={'/'}>
                            <img src={logo} className="logo" alt="Logo" />
                        </Link>
                    </div>

                    {/* Search and Menu Button Section */}
                    <div className="col-sm-3 d-flex align-items-center part2 pl-4">
                        <Button className="rounded-circle mr-3">
                            <MdMenuOpen />
                        </Button>
                        <SearchBox />
                    </div>

                    {/* Icons and Profile Section */}
                    <div className="col-sm-7 d-flex align-items-center justify-content-end part3 pl-4">
                        <Button className="rounded-circle mr-3">
                            <MdLightMode />
                        </Button>
                        <Button className="rounded-circle mr-3">
                            <FaShoppingCart />
                        </Button>
                        <Button className="rounded-circle mr-3">
                            <IoMdMail />
                        </Button>

                        <div className="dropdownWrapper position-relative">
                            <Button className="rounded-circle mr-3" onClick={handleOpenNotificationDrop}>
                                <IoIosNotifications />
                            </Button>

                            <Menu
                                    anchorEl={isOpennotificationDrop}
                                    className="notifications dropdown_list"
                                    id="notifications"
                                    open={openNotifications}
                                    onClose={handleCloseNotificationDrop}
                                    onClick={handleCloseNotificationDrop}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >

                                    <div className="head pl-3 pb-0">
                                        <h4>Order (12)</h4>
                                    </div>

                                    <Divider className="mb-3"/>
                                    <MenuItem onClick={handleCloseNotificationDrop}>
                                        <div className="d-flex align-items-center">
                                            <span className="rounded-circle">

                                            </span>
                                        </div>
                                    </MenuItem>
                            </Menu>
                        </div>

                        {/* User Account Dropdown */}
                        <div className="myAccWrapper">
                            <Button className="myAcc d-flex align-items-center" onClick={handleClick}>
                                <div className="userImg">
                                    <span className="rounded-circle">
                                        <img src={user} alt="User" />
                                    </span>
                                </div>
                                <div className="userInfo">
                                    <h4>Aryan Langhanoja</h4>
                                    <p className="mb-0">@aryanpatel023</p>
                                </div>
                            </Button>

                            {/* Dropdown Menu */}
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={openMyAcc}
                                onClose={handleClosemyAccDrop}
                                onClick={handleClosemyAccDrop}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleClosemyAccDrop}>
                                    <ListItemIcon>
                                        <FaUser />
                                    </ListItemIcon>
                                    Profile
                                </MenuItem>
                                <MenuItem onClick={handleClosemyAccDrop}>
                                    <ListItemIcon>
                                        <FaShieldAlt />
                                    </ListItemIcon>
                                    Reset Password
                                </MenuItem>
                                <MenuItem onClick={handleClosemyAccDrop}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
