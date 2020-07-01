import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div>
      <Link to='/edit-profile'>
        <button className='dashbordbuttonedi firstbuttdashhas'>
          Edit Profile
        </button>
      </Link>
      <Link to='/add-experience'>
        <button className='dashbordbuttonedi'>
          Add Experience
        </button>
      </Link>

      <Link to='/add-education'>
        <button className='dashbordbuttonedi'>
          Add education
        </button>
      </Link>
    </div>
  );
};
export default DashboardActions;