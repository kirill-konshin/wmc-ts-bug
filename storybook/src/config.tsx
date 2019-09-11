import React from 'react';
import {configure, addDecorator, setAddon, addParameters} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs/react';
import JSXAddon from 'storybook-addon-jsx';

addParameters({
    options: {
        theme: {brandTitle: 'Web Modules Core'},
        showPanel: true,
        panelPosition: 'right',
        sortStoriesByKind: true,
        sidebarAnimations: false
    }
});

addDecorator(story => (
    <div className="bootstrap-rc">
        {story()}
        <div id="notification-container"/>
    </div>
));

addDecorator(withKnobs);

setAddon(JSXAddon);

const testFileRegex = new RegExp(/.*\.test\.([jt])sx?/);
const testFilesFilter = filename => !testFileRegex.test(filename);

function loadStories() {
    let storiesContext = require.context('../src/stories', true, /\.([jt])sx?$/);
    storiesContext
        .keys()
        .forEach(filename => testFilesFilter(filename) && storiesContext(filename));

}

configure(loadStories, module);
