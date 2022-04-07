// import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";
import { Fragment, useState, useEffect, FC } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./WYSIWYG.scss";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const WYSIWYGEditor: FC<any> = ({
  defaultValue,
  onChange,
  style,
  ...props
}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const setDefaultValue = (defaultValue1: any) => {
    // let initDefaultValue;
    // if (defaultValue1) tml = htmlToDraft(defaultValue);
    //   c{
    //   const blocksFromHonst { contentBlocks, entityMap } = blocksFromHtml;
    //   initDefaultValue = EditorState.createWithContent(
    //     ContentState.createFromBlockArray(contentBlocks, entityMap)
    //   );
    // } else {
    //   initDefaultValue = EditorState.createEmpty();
    // }
    // return initDefaultValue;
  };

  useEffect(() => {
    // if (
    //   // draftToHtml(convertToRaw(editorState.getCurrentContent())) !==
    //   defaultValue
    // ) {
    //   const defaultValue1 = setDefaultValue(defaultValue);
    //   setEditorState(defaultValue1);
    // }
  }, [defaultValue]);

  // eslint-disable-next-line no-shadow
  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
    // return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  return (
    <Fragment>
      <div className="editor" {...props}>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          toolbar={{
            options: [
              "inline",
              "blockType",
              "fontSize",
              "fontFamily",
              "list",
              "textAlign",
              "colorPicker",
            ],
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
          }}
        />
      </div>
    </Fragment>
  );
};

// WYSIWYGEditor.defaultProps = {
//   onChange: () => {},
//   defaultValue: null,
// };

// WYSIWYGEditor.propTypes = {
//   onChange: () => {},
//   defaultValue: PropTypes.string,
// };

export default WYSIWYGEditor;
