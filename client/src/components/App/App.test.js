import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import App from './App'

import initialState from '../../../__mocks__/fileMock'

expect.addSnapshotSerializer(serializer)

describe('renders app', () => {
  it('Snapshot', () => {
    const mockStore = configureStore()

    const component = renderer.create(
      <Provider store={mockStore(initialState)}>
        <App />
      </Provider>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
