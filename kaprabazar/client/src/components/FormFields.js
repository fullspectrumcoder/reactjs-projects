import React from "react";
import {
  MDBBtn,
  MDBInput,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
  MDBTextArea,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import Select from "react-select";

const InputField = (props) => {
  let {
    name,
    text,
    handleChange,
    value,
    label,
    sup,
    error,
    dropzone,
    getRootProps,
    getInputProps,
    files,
    thumbs,
  } = props;
  return (
    <>
      <div className="form_group">
        <label>
          {label} {sup ? <sup>{sup}</sup> : ""}{" "}
          {text ? <span>{text}</span> : ""}
        </label>
        {dropzone ? (
          <>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <p>Drop files here or click to upload.</p>
            </div>
            {files.length > 0 ? "" : <span>{error}</span>}
            <aside className="thumbsContainer">{thumbs}</aside>
          </>
        ) : (
          <>
            <MDBInput name={name} value={value} onChange={handleChange} />
            {error ? (
              value.trim().length > 0 && value !== "" ? (
                ""
              ) : (
                <span>{error}</span>
              )
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </>
  );
};

const TextAreaField = (props) => {
  let { name, text, handleChange, value, label, sup, error } = props;
  return (
    <>
      <div className="form_group">
        <label>
          {label} {sup ? <sup>{sup}</sup> : ""}{" "}
          {text ? <span>{text}</span> : ""}
        </label>
        <MDBTextArea
          name={name}
          value={value}
          onChange={handleChange}
        ></MDBTextArea>
        {error ? (
          value.trim().length > 0 && value !== "" ? (
            ""
          ) : (
            <span>{error}</span>
          )
        ) : (
          ""
        )}
      </div>
    </>
  );
};
const CheckBoxField = (props) => {
  let { name, id, handleFeatured, value, label } = props;
  return (
    <>
      <div className="form_group">
        <div className="feature_group">
          <MDBCheckbox
            name={name}
            value={value}
            id={id}
            label={label}
            onChange={handleFeatured}
          />
          <label htmlFor="">
            Featured AD has more attention as compare to simple ad.
          </label>
        </div>
      </div>
    </>
  );
};

const SelectField = (props) => {
  let { handleChange, options, value, label, sup, text, error } = props;
  return (
    <>
      <div className="form_group">
        {label ? (
          <label>
            {label} {sup ? <sup>{sup}</sup> : ""}
            {text ? <span>{text}</span> : ""}
          </label>
        ) : null}
        <Select
          isClearable={true}
          defaultValue={value}
          onChange={handleChange}
          options={options}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: "rgb(255 69 0 / 7%)",
              primary: "#ff4500",
            },
          })}
        />
        {error ? value !== null ? "" : <span>{error}</span> : ""}
      </div>
    </>
  );
};

export { InputField, TextAreaField, CheckBoxField, SelectField };
