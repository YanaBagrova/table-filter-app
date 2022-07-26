import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setCurrentPageAC } from '../../redux/actionCreators/currentPageAC'
import './Pagination.css'

function Pagination({page}) {
  const currentPage = useSelector((state) => state.currentPageReducer.currentPage)
  const dispatch = useDispatch()

  function choosePage() {
    dispatch(setCurrentPageAC(page))
}

  return (
    <span
      className={currentPage === page ? "current-page" : "page"}
      onClick={choosePage}
    >{page}
    </span>
  );
}

export default Pagination;
