import { getDisplayCurrentYear, getDisplayYear } from '@/lib/display.utils';
import React from 'react';

const UserInfoLeft: React.FC<any> = ({ userData }) => {

  function displayYear(year: string) {
    return getDisplayYear(year)
  }

  function displayCurrentYear(year: string) {
    return getDisplayCurrentYear(year)
  }

  return (
    <ul className="flex items-center gap-5 ">
      <li className="">
        <div>
          <p className="text-center font-semibold text-2xl text-gray-900">{userData?.branch}</p>
          <p className="text-center font-normal text-base text-gray-500">Branch</p>
        </div>
      </li>
      <li>
        <div>
          <p className="text-center font-semibold text-2xl text-gray-900">
            {userData?.current_year ? displayCurrentYear(userData?.current_year) : "NA"}
          </p>
          <p className="text-center font-normal text-base text-gray-500">Current Year</p>
        </div>
      </li>
      <li>
        <div>
          <p className="text-center font-semibold text-2xl text-gray-900">
            {userData?.domain}
          </p>
          <p className="text-center font-normal text-base text-gray-500">Domain</p>
        </div>
      </li>
      <li>
        <div>
          <p className="text-center font-semibold text-2xl text-gray-900">
            {userData?.year_of_joining ? displayYear(userData?.year_of_joining) : "NA"}
          </p>
          <p className="text-center font-normal text-base text-gray-500">
            Year of Joinning
          </p>
        </div>
      </li>
    </ul>
  )
}

export default UserInfoLeft