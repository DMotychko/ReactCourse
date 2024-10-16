import React, {FormEvent, useState} from 'react';

interface IFormProps {
    username: string,
    password: string
}
const FormComponent = () => {
    const [form, setForm] = useState<IFormProps>({
        username: '',
        password: ''
    })

    const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(form)
    }

    const handlerInputChange = (e: FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        setForm({...form, [input.name]: input.value})
    }

    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <input type="text" name='username' onChange={handlerInputChange}/>
                <input type="text" name='password' onChange={handlerInputChange}/>
                <button>send</button>
            </form>
        </div>
    );
};

export default FormComponent;