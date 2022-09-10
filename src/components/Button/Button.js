import React from 'react';

import './styles.css';

const Button = ({ children, loading, ...props }) => (
    <button className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" disabled={loading} {...props}>
        {loading ? 'Loading...' : children}
    </button>
);

Button.defaultProps = {
    loading: false,
};

export default Button;
