import React from 'react';

const Input = ({ type, name, label, value, error, onChange }) => {
    return (                     
        <div className="form-group">
         
            <input 
                value={value} 
                onChange={onChange}
                id={name}
                name={name}
                type={type}
                className="form-control inputField"
                placeholder={label}
            />
            
            { error && <div className="alert alert-danger"> {error} </div> }
        </div> 
    );
};
 
export default Input;