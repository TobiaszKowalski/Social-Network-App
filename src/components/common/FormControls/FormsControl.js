import React from 'react';
import style from './FormControls.module.css';

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : "")}>
            <textarea {...input} {...props} />
            { hasError && <div><span>{meta.error}</span></div> }
        </div>
    )
}
export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : "")}>
            <input {...input} {...props} />
            { hasError && <div><span>{meta.error}</span></div> }
        </div>
    )
}