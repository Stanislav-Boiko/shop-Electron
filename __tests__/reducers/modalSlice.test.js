import { modalSlice } from 'store';

describe('modal reducer', () => {
  it('openModal відкриває модалку', () => {
    const initialState = { isOpen: false, title: '', text: '', footerProps: {}, children: null };
    const nextState = modalSlice.reducer(initialState, modalSlice.actions.openModal({ title: 'Test' }));
    expect(nextState.isOpen).toBe(true);
    expect(nextState.title).toBe('Test');
  });

  it('closeModal закриває модалку', () => {
    const initialState = { isOpen: true, title: 'Test', text: '', footerProps: {}, children: null };
    const nextState = modalSlice.reducer(initialState, modalSlice.actions.closeModal());
    expect(nextState.isOpen).toBe(false);
  });
});