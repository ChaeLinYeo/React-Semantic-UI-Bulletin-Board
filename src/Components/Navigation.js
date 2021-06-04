import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react'

function NavigationBar() {

    return (
        <Menu pointing secondary>
            <Menu.Item icon="home" name='home' href="/allpost"/>
            
        </Menu>
    )
}

export default NavigationBar;