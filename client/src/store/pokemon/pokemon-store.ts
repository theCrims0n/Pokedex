import axios from 'axios';
import { create } from 'zustand'

interface State {
    isLoading: boolean;
    pokemon: any;
    pokemons: Array<any>
    keypress: string;
    getPokemon: () => void;
    getPokemonKeyPress: (press: string) => void;
    getPokemonByName: (nombre: string) => void;
    getPokemonByLimitPage: (offset: number, limit: number) => void;
}

export const usePokemonStore = create<State>((set) => ({

    isLoading: false,
    pokemon: null,
    pokemons: [],
    keypress: '',
    getPokemon: async () => {
        set({ isLoading: true })
        const result = await axios.get('http://localhost:3001/api/pokemon');
        if (result.status != 200) {
            set({ isLoading: false, pokemons: [] })
            return
        }
        set({ isLoading: false, pokemons: result.data.body.results })
    },
    getPokemonKeyPress: async (press) => {

        set({ keypress: press })

    },
    getPokemonByName: async (nombre) => {
        set({ isLoading: true })
        const result = await axios.get(`http://localhost:3001/api/pokemon/${nombre}`);
        if (result.status != 200) {
            set({ isLoading: false, pokemon: null })
            return
        }
        set({ isLoading: false, pokemon: result.data })
    },
    getPokemonByLimitPage: async (offset, limit) => {

        set({ isLoading: true })
        const result = await axios.get(`http://localhost:3001/api/pokemon/${limit}/${offset}`);
        if (result.status != 200) {
            set({ isLoading: false, pokemons: [] })
            return
        }
        set({ isLoading: false, pokemons: result.data.lenght == 0 ? [] : result.data.body.results })

    }
}))
