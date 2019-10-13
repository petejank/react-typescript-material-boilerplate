import React from 'react'
import {render, fireEvent, RenderResult} from '@testing-library/react'

import * as userStorage from 'utils/userStorage'
import Component from '.'
import store, {Provider} from 'store'

describe('SignInContainer', () => {
  let component: RenderResult

  beforeEach(() => {
    component = renderComponent()
  })

  context('when user submits the form', () => {
    beforeEach(() => {
      fireEvent.change(component.queryByLabelText(/e-mail/i)!, {target: {value: 'email@example.com'}})
      fireEvent.change(component.queryByLabelText(/password/i)!, {target: {value: 'email@example.com'}})
    })

    it("saves auth data in browser's storage", () => {
      fireEvent.click(component.queryByTestId('sign-in-button')!)
      const {email, token} = store.getState().user

      expect(email).toBe('email@example.com')
      expect(typeof token).toBe('string')
    })

    context('when "remember me" is selected', () => {
      it("saves auth data in browser's storage", () => {
        fireEvent.click(component.queryByLabelText(/remember me/i)!)
        fireEvent.click(component.queryByTestId('sign-in-button')!)
        const {email, token} = userStorage.get()

        expect(email).toBe('email@example.com')
        expect(typeof token).toBe('string')
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
