const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <label className="">{label}</label>
      <input {...otherProps} />
    </div>
  );
};

export default FormInput;
