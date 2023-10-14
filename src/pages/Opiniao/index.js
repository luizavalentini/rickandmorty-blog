import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    content: yup.string().required()
}).required();

function Opiniao() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });
    const [alertData, setAlertData] = useState(null);

    const onSubmitForm = (data) => {
        setAlertData(data);
        console.log(data);

        // Limpa os campos do formulário após a submissão
        reset();
    };

    return (
        <>
            <div className="bg-dark">
                <h1 className="text-white pt-5 text-center">Give Your Opinion About the Serie</h1>
                <div className="formu mt-1">
                    <form onSubmit={handleSubmit(onSubmitForm)}>
                        <div className='field'>
                            <label className='label'>Name:</label>
                            <input type='text' {...register('name')} />
                            <span>{errors.name?.message}</span>
                        </div>
                        <div className='field'>
                            <label className='label'>Email:</label>
                            <input type='email' {...register('email')} />
                            <span>{errors.email?.message}</span>
                        </div>
                        <div className='field pb-5'>
                            <label className='label'>Content:</label>
                            <input type='text' {...register('content')} />
                            <span>{errors.content?.message}</span>
                        </div>
                        <button className="rounded bg-dark border-0" type='submit'>Submit</button>
                    </form>
                </div>

                {alertData && (
                    <div className="alert">
                        <h2>Form Submitted Successfully:</h2>
                        <p>Name: {alertData.name}</p>
                        <p>Email: {alertData.email}</p>
                        <p>Content: {alertData.content}</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default Opiniao;
