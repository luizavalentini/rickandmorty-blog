import { useForm } from "react-hook-form"; 
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({   
        nome: yup.string().required(),
        email: yup.string().email().required(),
        desc: yup.string().required()
    }).required();   

function Opiniao () {
    const { register, handleSubmit, formState: { errors } } = 
    useForm({
        resolver: yupResolver(schema)
    })
    const onSubmitForm = data => console.log(data)
  
    return(
        <>
        <div className="bg-dark">
        <h1 className="text-white pt-5 text-center">Deixe sua Opinião sobre a série</h1>
        <div className="formu mt-1">
        <form onSubmit={handleSubmit(onSubmitForm)}>
           
            <div className='field'>
                <label className='label'>Nome:</label>
                <input type='text' {...register('name')}/>
                <span>{errors.name?.message}</span>
            </div>
            <div className='field'>
                <label className='label'>Email:</label>
                <input type='email' {...register('email')} />
                <span>{errors.email?.message}</span>
            </div>
            <div className='field pb-5'>
                <label className='label'>Conteúdo:</label>
                <input type='text' {...register('content')} />
                <span>{errors.content?.message}</span>
            </div>
            <button className=" rounded bg-dark border-0" type='submit'>Postar</button>

        </form>
        </div>

        </div>
      
        </>
    );
}

export default Opiniao;