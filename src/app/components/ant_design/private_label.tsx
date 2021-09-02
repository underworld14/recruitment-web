import React from "react";
const TextLabel = (props: { isRequired: boolean; label: string }) => {
  const { label, isRequired } = props;
  return (
    <React.Fragment>
      {isRequired && (
        <span
          style={{
            color: "red",
            fontSize: "1.4em",
            marginRight: "5px",
          }}
        >
          *
        </span>
      )}
      <span> {label}</span>
    </React.Fragment>
  );
};
export default TextLabel;
