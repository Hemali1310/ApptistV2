import React from "react";
import {
  Bell,
  Calendar,
  Clipboard,
  CreditCard,
  Power,
  Trash2,
} from "react-feather";
import { Link } from "react-router-dom";
import { ProfileBg, User11 } from "../../imagepath";

export default function StudentSideBar({ activeMenu, studentInfo }) {
  return (
    <div className="col-xl-3 col-md-4 theiaStickySidebar">
      <div className="settings-widget dash-profile mb-3">
        <div className="settings-menu p-0">
          <div className="profile-bg">
            <h5>{studentInfo.studentLevel}</h5>
            <img src={ProfileBg} alt="" />
            <div className="profile-img">
              <Link to="#">
                <img src={studentInfo.studentImage} alt="" />
              </Link>
            </div>
          </div>
          <div className="profile-group">
            <div className="profile-name text-center">
              <h4>
                <Link to="#">{studentInfo.studentFirstName+" "+studentInfo.studentLastName}</Link>
              </h4>
              <p>Student</p>
            </div>
            <div className="go-dashboard text-center">
              <Link to="/instructor-dashboard" className="btn btn-primary">
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="settings-widget account-settings">
        <div className="settings-menu">
          <h3>ACCOUNT SETTINGS</h3>
          <ul>

            <li className="nav-item">
              <Link
                to="#"
                className={
                  activeMenu === "Notification" ? "nav-item active" : "nav-item"
                }
              >
                <Bell size={20} /> Notifications
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="#"
                className={
                  activeMenu === "DeleteProfile"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Trash2 size={20} /> Delete Profile
              </Link>
            </li>


            <li className="nav-item">
              <Link to="#" className="nav-link">
                <Power size={20} /> Sign Out
              </Link>
            </li>
            {activeMenu === "Ticket" ? (
              <li className="nav-item active">
                <Link to="#" className="nav-link">
                  <Clipboard size={20} /> Support Tickets
                </Link>
              </li>
            ) : null}
          </ul>
          <h3>Courses</h3>
          <ul>
            <li className="nav-item">
              <Link
                to="#"
                className={
                  activeMenu === "Subscription" ? "nav-item active" : "nav-item"
                }
              >
                <Calendar size={20} /> My Courses
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="#"
                className={
                  activeMenu === "Payment" ? "nav-item active" : "nav-item"
                }
              >
                <CreditCard size={20} /> Payment
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}
