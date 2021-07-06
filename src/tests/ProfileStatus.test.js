import React from 'react';
import { create, act  } from 'react-test-renderer';
import ProfileStatus from '../components/Profile/ProfileInfo/ProfileStatus';

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        let component;
        act(() => component = create(<ProfileStatus status='some status' />))
        let instance = component.root;
        expect(instance.status).toBe('some status');
    });
    test('after creation span should be displayed with correct status', () => {
        let component;
        act(() => component = create(<ProfileStatus status='some status' />))
        let instance = component.root;
        let span = instance.findByType('span');
        expect(span.children[0]).toBe('some status');
    });
});
