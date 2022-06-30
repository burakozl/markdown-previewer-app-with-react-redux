import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { isClickedHelp } from '../redux/markdownSlice';


function Header() {
    const dispatch = useDispatch();

    const isClicked = useSelector((state) => state.markdown.isClicked);

    const handleClick = () => {
        dispatch(isClickedHelp(!isClicked))
    }

  return (
    <header>
      <h1 className="app-title">Markdown Previewer</h1>
      <div className="help-button false" >
        <i className="fa-solid fa-question" onClick={handleClick}></i>
      </div>
    </header>
  )
}

export default Header
