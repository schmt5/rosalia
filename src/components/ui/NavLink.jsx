import { NavLink as NavLinkReactRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

export function NavLink({ to, icon, children }) {
    return (
        <NavLinkReactRouter
            to={to}
            className={({ isActive, isPending }) => cn('group flex flex-col items-center gap-[2px]', {
                'text-rose-600': isActive,
                'text-neutral-500': isPending,
                'isActive': isActive,
            })}
        >
            <span className='group-[.isActive]:bg-rose-50 px-6 py-1 rounded-2xl'>{icon}</span>
            <span className='text-sm font-semibold'>{children}</span>
        </NavLinkReactRouter>
    )
}

NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    children: PropTypes.node.isRequired,
}