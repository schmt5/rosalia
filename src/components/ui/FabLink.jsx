import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils"

export function FabLink({ to, className, children }) {
    return (
        <Link to={to} className={cn(className, 'fixed bottom-[50px] z-10 left-1/2 -translate-x-1/2 h-12 w-12 grid place-content-center bg-neutral-900 text-white rounded-full ring-8 ring-white')}>
            {children}
        </Link>
    )
}

FabLink.propTypes = {
    to: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};
