import {
  NEXT_PAGE,
  PREV_PAGE,
  PAGE_SELECTED,
  PAGE_DATA_REQUEST,
  PAGE_DATA_SUCCESS,
  PAGE_DATA_FAILURE,
} from "./paginationType";

const initialState = {
  loading: false,
  currentPage: 1,
  postPerPage: 5,
  contentdata: [],
  error: "",
  paginationLimit: {
    pageNumberLimit: 5,
    maxPageLimit: 5,
    minPageLimit: 0,
  },
};

export const paginationReducer = (state = initialState, action) => {
  const type = action.type;
  const payload = action.payload;
  console.log(action);
  switch (type) {
    case NEXT_PAGE:
      if (state.currentPage + 1 > state.paginationLimit.maxPageLimit) {
        return {
          ...state,
          paginationLimit: {
            pageNumberLimit: state.paginationLimit.pageNumberLimit,
            maxPageLimit: state.paginationLimit.maxPageLimit + 1,
            minPageLimit: state.paginationLimit.minPageLimit + 1,
          },
          currentPage:state.currentPage + 1,

        };
      }
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case PREV_PAGE:
      if ((state.currentPage - 1) % state.paginationLimit.pageNumberLimit === 0) {
        return {
          ...state,
          paginationLimit: {
            pageNumberLimit: state.paginationLimit.pageNumberLimit,
            maxPageLimit: state.paginationLimit.maxPageLimit - 1,
            minPageLimit: state.paginationLimit.minPageLimit - 1,
          },
          currentPage:state.currentPage - 1,
        };
      }
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case PAGE_SELECTED:
      return {
        ...state,
        currentPage: payload,
      };
    case PAGE_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PAGE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        contentdata: payload,
        error: "",
      };
    case PAGE_DATA_FAILURE:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
