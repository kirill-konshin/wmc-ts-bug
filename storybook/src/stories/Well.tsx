import React from 'react';
import {storiesOf} from '@storybook/react';
import {boolean} from '@storybook/addon-knobs';
import {Well} from 'web-modules-core';

const stories = storiesOf('Well', module);

stories.add('Well', () => {
    let props = {
        active: boolean('active', false)
    };
    return <Well {...props} >XXXX</Well>;
});
