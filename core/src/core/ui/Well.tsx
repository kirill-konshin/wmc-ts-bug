import React from 'react';
import PropTypes from 'prop-types';
import {Well as BSWell} from 'react-bootstrap';
import classnames from 'classnames';

type WellProps = {
    active?: boolean;
    testAutomationId?: string;
    className?: string;
} & BSWell.WellProps;

export class Well extends React.Component<WellProps> {
    static propTypes = {
        ...(BSWell as any).propTypes,
        active: PropTypes.bool,
        testAutomationId: PropTypes.string,
        className: PropTypes.string
    };

    static defaultProps = {
        active: false,
        testAutomationId: 'well',
        className: ''
    };

    render() {
        const {active, testAutomationId, className, ...props} = this.props;
        const wellClass = classnames(className, {active});

        return (
            <BSWell {...props} className={wellClass} data-test-automation-id={testAutomationId} />
        );
    }
}
