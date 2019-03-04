import { CREATE_NOTE_TITLE } from 'redux';

const initialState = {
  title: '',
  body: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_NOTE_TITLE:
    return {
      ...state,
      title: [
        ...state.title,
        { title: '', ...action.payload }
      ]
    };
      case CREATE_NOTE_BODY:
        return {
          ...state,
          body: [
            ...state.body,
            { body: '', ...action.payload }
          ] 
        };
  }
}