import React from 'react';

const User = (props) => {
    return (
        <div className="border p-2 text-center">
            {props.user.id}
        </div>
    );
};

export default User;