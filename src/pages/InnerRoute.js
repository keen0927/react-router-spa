import React from 'react';

const InnerRoute = ({match}) => {
    return (
        <div>
            포스트 #{match.params.id}
        </div>
    );
};

export default InnerRoute;
