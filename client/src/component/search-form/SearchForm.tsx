'use client'

import { useForm } from 'react-hook-form';
import { usePokemonStore } from '../../store/pokemon/pokemon-store';

export default function SearchForm() {

    const { register, handleSubmit, formState: { isLoading, isSubmitSuccessful, errors }, getValues } = useForm<any>()


    const { getPokemonByName, getPokemonByLimitPage, getPokemonKeyPress } = usePokemonStore()


    const onSubmit = async (data: any) => {
        const { nombre, limit, offset } = data
        await getPokemonByLimitPage(offset, limit)
    }

    const handleKeyDown = () => {
        getPokemonKeyPress(getValues('nombre'))
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
                <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nombre</label>
                <input type="text" id="nombre" onKeyDown={handleKeyDown} {...register('nombre')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busca pokemon por nombre" />
            </div>
            <div className="mb-5">
                <label htmlFor="limit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Limite</label>
                <input type="number" id="limit" {...register('limit', { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busca pokemon por limite" />
                <p hidden={!errors.limit} className="h-2 mt- text-sm text-red-600 dark:text-red-500">El Limite es requerido</p>
            </div>
            <div className="mb-5">
                <label htmlFor="offset" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Pagina</label>
                <input type="number" id="offset" {...register('offset', { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busca pokemon por pagina" />
                <p hidden={!errors.offset} className="h-2 mt- text-sm text-red-600 dark:text-red-500">La Pagina es requerida</p>
            </div>
            <div className="mb-5 pt-6">
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
            </div>
        </form>

    )
}