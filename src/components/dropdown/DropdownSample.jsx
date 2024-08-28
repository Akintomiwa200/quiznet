import Dropdown from './Dropdown';

const DropdownSample = () => {

    const dropdownItems = [
        { label: 'Profile', href: '/profile' },
        { label: 'Settings', href: '/settings' },
        { label: 'Logout', href: '/logout' },
    ];


    return (
        <div>
            <div className="p-4 h-auto">
                <Dropdown label="Menu" items={dropdownItems} />
            </div>
        </div>
    )
}

export default DropdownSample
