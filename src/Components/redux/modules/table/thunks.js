import { editHide, editShow, deleteHide, deleteShow } from 'Components/redux/modules/table/actions';

export const buttonStateSet = () => {
  return (dispatch) => {
    const role = sessionStorage.getItem('role');
    const path = location.pathname;
    if (role === 'PM') {
      switch (path) {
        case '/employees':
          dispatch(editHide());
          dispatch(deleteHide());
          break;
        case '/projects':
          dispatch(editShow());
          dispatch(deleteShow());
          break;
      }
    }
    if (role === 'ADMIN') {
      switch (path) {
        case '/employees':
          dispatch(editHide());
          dispatch(deleteHide());
          break;
        case '/projects':
          dispatch(editShow());
          dispatch(deleteShow());
          break;
      }
    }
    if (role === 'EMPLOYEE') {
      switch (path) {
        case '/employees':
          dispatch(editHide());
          dispatch(deleteHide());
          break;
        case '/projects':
          dispatch(editShow());
          dispatch(deleteShow());
          break;
      }
    }
    if (role === 'SUPERADMIN') {
      switch (path) {
        case '/employees':
          dispatch(editHide());
          dispatch(deleteHide());
          break;
        case '/projects':
          dispatch(editShow());
          dispatch(deleteShow());
          break;
      }
    }
  };
};
