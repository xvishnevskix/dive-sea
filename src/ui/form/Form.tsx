import React from 'react';
import { IData } from '../../pages/sell/Sell';
import {UseFormRegister, FieldErrors} from 'react-hook-form'
import styles from './Form.module.scss';

interface IFormProps{
    header: string
    name: "photo" | "name" | "description" | "royalty" | "size" | "price" | "tags" | "inStock"
    placeholder: string
    isTextarea?: boolean
    register?: UseFormRegister<IData>
    error: FieldErrors<IData>
} 
const Form:React.FC<IFormProps> = ({header, placeholder, isTextarea, register, name, error}) => {

  return (
    <label className={styles.form}>
        <h3 className={styles.header}>{header}</h3>
        {
            isTextarea
                ? <textarea {...register!(name)
                            } className={`${styles.input} ${styles.textArea}`} placeholder={placeholder} />
                    : <input {...register!(name, 
                                {
                                  required: 'Обязательное поле!'
                                })
                              } type="text" placeholder={placeholder} className={styles.input} />
        }
        {error[name] && <span className={styles.errorMessage}>{error[name]?.message}</span>}
    </label>
  )
}

export default Form