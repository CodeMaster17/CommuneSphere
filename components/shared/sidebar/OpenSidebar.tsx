import { sidebarTop } from '@/constants/sidebarConstants';
import React from 'react'
import { MenuItem } from './Menuitem';

const OpenSidebar = () => {
    
    return (
        <>
            {sidebarTop.map((item) => {
                return (

                    <MenuItem key={item.id} name={item.name} route={item.route} component={item.component} />
                );

            })}
        </>
    )
}

export default OpenSidebar