import { Link as LinkReactRouter } from "react-router-dom";
import PropTypes from "prop-types";

export function Link({ to, children }) {
    return (
        <LinkReactRouter
            to={to}
            className='text-rose-600 text-sm font-semibold hover:underline'
        >
            {children}
        </LinkReactRouter>
    )
}

Link.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};
