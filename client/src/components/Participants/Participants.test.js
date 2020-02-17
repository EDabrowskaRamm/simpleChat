import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import { ThemeProvider } from 'emotion-theming'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Participants from './Participants'

import theme from '../../styles/theme/theme'
import initialState from '../../../__mocks__/fileMock'

expect.addSnapshotSerializer(serializer)

describe('renders Participants', () => {
  it('Snapshot', () => {
    const mockStore = configureStore()

    const component = renderer.create(
      <Provider store={mockStore(initialState)}>
        <ThemeProvider theme={theme}>
          <Participants />
        </ThemeProvider>
      </Provider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
