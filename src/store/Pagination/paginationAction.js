import { NEXT_PAGE, PREV_PAGE, PAGE_SELECTED,PAGE_DATA_REQUEST,PAGE_DATA_SUCCESS,PAGE_DATA_FAILURE } from "./paginationType";

export const nextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};

export const prevPage = () => {
  return {
    type: PREV_PAGE,
  };
};

export const handleClick = (e) => {
  return {
    type: PAGE_SELECTED,
    payload:JSON.parse(e.target.id),
  };
};

export const pageRequest =()=>{
  return{
    type:PAGE_DATA_REQUEST,
  }
}

export const pageSuccess =(data)=>{
  return{
    type:PAGE_DATA_SUCCESS,
    payload:data
  }
}

export const pageFailure =(error)=>{
  return{
    type:PAGE_DATA_FAILURE,
    payload:error
  }
}