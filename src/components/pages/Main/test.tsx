import React from 'react'
import axiosMock from 'jest/utils/axiosMock'
import {render, fireEvent, RenderResult, act} from '@testing-library/react'

import Component from '.'
import photosResponse from 'jest/fixtures/photos.json'
import store, {Provider} from 'store'

describe('MainContainer', () => {
  let component: RenderResult

  beforeEach(() => {
    axiosMock.reset()
  })

  context('when photos are being fetched', () => {
    beforeEach(async () => {
      axiosMock.onGet('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=9').replyOnce(200, null)
      await act(async () => {
        component = renderComponent()
      })
    })

    it('renders loader', () => {
      expect(component.queryByTestId('loader')).toBeTruthy()
    })
  })

  context('when photos were fetched', () => {
    beforeEach(async () => {
      axiosMock.onGet('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=9').replyOnce(200, photosResponse)
      await act(async () => {
        component = renderComponent()
      })
    })

    it('renders photos', () => {
      expect(component.queryByText('accusamus beatae ad facilis cum similique qui sunt')).toBeTruthy()
      expect(component.queryByText('reprehenderit est deserunt velit ipsam')).toBeTruthy()
      expect(component.queryByText('officia porro iure quia iusto qui ipsa ut modi')).toBeTruthy()
    })

    context("when 'Remove' button of the first photo entry is clicked", () => {
      it('removes first photo entry', () => {
        const {getAllByText, queryByText} = component

        fireEvent.click(getAllByText('Remove')[0])

        expect(queryByText('accusamus beatae ad facilis cum similique qui sunt')).toBeNull()
      })
    })
  })
})

function renderComponent(): RenderResult {
  return render(
    <Provider store={store}>
      <Component />
    </Provider>
  )
}
