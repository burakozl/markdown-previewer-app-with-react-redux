import { useState } from 'react';
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector} from 'react-redux';
import { inputTextbyUser } from '../redux/markdownSlice';


function TextPanel() {
  const [markdown, setMarkdown] = useState("this is user input");

  const isClicked = useSelector((state) => state.markdown.isClicked);
  const helpText = useSelector((state) => state.markdown.helpText);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setMarkdown(e.target.value);
    dispatch(inputTextbyUser(markdown));
  }

  return (
    <div className="text-panels">
        <textarea 
        className="text-panel-left" 
        value={`${isClicked ? helpText : markdown}`}
        onChange={handleChange}
        ></textarea>
        <div className="text-panel-right ">
            <ReactMarkdown>{`${isClicked ? helpText : markdown}`}</ReactMarkdown>
        </div>
    </div>
  )
}

export default TextPanel
