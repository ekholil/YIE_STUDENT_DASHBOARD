import React from 'react';
import {  NavLink, Outlet } from 'react-router-dom';
const activelink = ({ isActive }) => {
    return {
      backgroundColor: isActive? "rgb(217 119 6)" : '',
      color: isActive?'#fff':''
    };
  }
const linkClasses = 'block rounded p-2 text-lg hover:bg-amber-600 hover:text-white transition border'
const Dashboard = () => {
    return (
        <div className=' w-11/12 mx-auto mt-5 '> 
         <h1 className="text-center text-4xl my-2">Student Dashboard</h1>
            <div className='grid gap-3 grid-cols-12'>
            <div className='col-span-3 flex flex-col text-left gap-1'>
                <NavLink style={activelink} className={linkClasses} to="/userprofile">User Profile</NavLink>
                <NavLink style={activelink} className={linkClasses} to="/library">library</NavLink>
                <NavLink style={activelink} className={linkClasses} to="/assesment">Assesment</NavLink>
                <NavLink style={activelink} className={linkClasses} to="/liveclasses">Live Classes</NavLink>
                <NavLink style={activelink} className={linkClasses} to="/discussion">Discussion Forum</NavLink>
                <NavLink style={activelink} className={linkClasses} to="/calender">Calender</NavLink>
                <NavLink style={activelink} className={linkClasses} to='/reports'>Reports</NavLink>
                <NavLink style={activelink} className={linkClasses} to='/feecollection'>Fee Collection</NavLink>
                <NavLink style={activelink} className={linkClasses} to='/documents'>Documents</NavLink>
                <NavLink style={activelink} className={linkClasses} to='/notices'>Notices</NavLink>
            </div>
            <div className='col-span-9'>
                <Outlet />
            </div>
        </div>
        </div>
    );
};

export default Dashboard;