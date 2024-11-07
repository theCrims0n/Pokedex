'use client'
import { useParams } from 'react-router-dom'
import { usePokemonStore } from '../../../store/pokemon/pokemon-store'
import { useEffect, useState } from 'react'
import Spinner from '../../../component/ui/Spinner'
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';

export const Pokemon = () => {

    const { nombre } = useParams()

    const { pokemon, getPokemonByName, isLoading } = usePokemonStore()

    useEffect(() => {

        getPokemonByName(nombre || '')

    }, [])

    const exportPDF = async () => {
        const html2pdf = require('html2pdf.js');
        var element = document.getElementById('divToPrint');

        var opt = {
            margin: 1,
            filename: nombre + '.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        await html2pdf(element, opt);
    }

    return (
        <div className="h-screen fade-in m-9">
            {

                isLoading || pokemon == null
                    ?
                    <Spinner />
                    :
                    <>
                        <a href='/'>
                            <button type="button"
                                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                Volver
                            </button>
                        </a>
                        <button onClick={exportPDF} type="button"
                            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            PDF
                        </button>
                        <a id='divToPrint' className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pokemon.body.name}</h5>
                            <div className="flex items-stretch ...">
                                <div><img className='h-fit' src={pokemon.body.sprites.front_default} /></div>
                                <div><img className='h-fit' src={pokemon.body.sprites.back_default} /></div>
                            </div>
                            <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Tipo:</h5>
                            <h5 className="text-sm mb-2 tracking-tight text-gray-900 dark:text-white">{pokemon.body.types[0].type.name}</h5>
                            <h5 className='mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white'>Habilidades:</h5> {
                                pokemon.body.stats.map((habilidad: any) => {
                                    return (
                                        <p className="text-sm mb-2 tracking-tight text-gray-900 dark:text-white">
                                            {habilidad.stat.name}
                                        </p>
                                    )
                                })
                            }
                        </a>
                    </>
            }
        </div>
    )
}