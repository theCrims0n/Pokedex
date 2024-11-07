import SearchForm from '../component/search-form/SearchForm';
import Spinner from '../component/ui/Spinner';
import { usePokemonStore } from '../store/pokemon/pokemon-store';

export default function Home() {

    const { pokemons, isLoading, keypress } = usePokemonStore()

    return (
        <div className='m-6 ...'>
            <div className="mx-auto max-w-6xl">
                <div id="features" className="mx-auto max-w-6xl">
                    <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                        Lista de Pokemons
                    </h2>
                    <SearchForm />
                    {
                        isLoading
                            ?
                            <Spinner />
                            :
                            <>
                                <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
                                    {
                                        pokemons.length == 0
                                            ?
                                            <h2 className="text-3xl my-3 font-display font-medium">No hay pokemons</h2>
                                            :
                                            (pokemons || []).sort((a, b) => a.name > b.name ? 1 : -1).filter(pokemons => pokemons.name.toString().includes(keypress))
                                                .map((pokemon, index) => {
                                                    return (
                                                        <li key={index} className="fade-in rounded-xl bg-white px-6 py-8 shadow-sm">
                                                            <h2 className="my-3 font-display font-medium">{pokemon.name}</h2>
                                                            <button><a href={`/pokemon/${pokemon.name}`}><p className='text-xs'>Ver detalles</p></a></button>
                                                        </li>
                                                    )
                                                })
                                    }
                                </ul>
                            </>
                    }
                </div>
            </div>
            {
                pokemons.length > 0 && (
                    <div className="flex justify-center items-center m-8 ...">
                        <button className="rounded-full border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                            Prev
                        </button>
                        <button className="min-w-9 rounded-full bg-slate-800 py-2 px-3.5 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                            1
                        </button>
                        <button className="min-w-9 rounded-full border border-slate-300 py-2 px-3.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                            2
                        </button>
                        <button className="min-w-9 rounded-full border border-slate-300 py-2 px-3.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                            3
                        </button>
                        <button className="min-w-9 rounded-full border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                            Next
                        </button>
                    </div>
                )
            }
        </div>
    );
}
