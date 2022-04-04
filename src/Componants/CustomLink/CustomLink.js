import React from 'react';
import { useMatch, useResolvedPath, Link } from 'react-router-dom';

const CustomLink = ({ to, children, ...props }) => {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })
    return (
        <Link style={{ color: match ? '#0991B1' : 'Black' }} to={to} {...props}>
            {children}
        </Link>
    );
};

export default CustomLink;