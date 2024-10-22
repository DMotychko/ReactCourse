import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators/user.validator";
import {IForm} from "../../models/IForm";
import {sendPostToPlaceholder} from "../../services/api.service";

const FormComponent = () => {
    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isValid
        }
    } = useForm<IForm>({mode: 'all', resolver: joiResolver(userValidator)})

    const customHandler = (dataFromForm: IForm) => {
        sendPostToPlaceholder(dataFromForm)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <div>
                    <label>
                        <input type="number" placeholder="userId" {...register('userId')}/>
                        {errors.userId && <p>{errors.userId.message}</p>}
                    </label>
                </div>
                <div>
                    <label>
                        <input type="number" placeholder="id" {...register('id')}/>
                        {errors.id && <p>{errors.id.message}</p>}
                    </label>
                </div>
                <div>
                    <label>
                        <input type="text" placeholder="title" {...register('title')}/>
                        {errors.title && <p>{errors.title.message}</p>}
                    </label>
                </div>
                <div>
                    <label>
                        <input type="text" placeholder="body" {...register('body')}/>
                        {errors.body && <p>{errors.body.message}</p>}
                    </label>
                </div>
                <button>send</button>
            </form>
        </div>
    );
};

export default FormComponent;