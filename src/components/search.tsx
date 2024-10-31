import React from 'react';
import {Input, Stack, Button} from '@chakra-ui/react';
import { Singleton } from './singleton'

export interface PokeLanguageType {
    language: {
        name: string;
        url: string;
    };
    name: string;
}

export const Search = ({}) => {
    const [value, setValue] = React.useState('');
    let jaName:PokeLanguageType
    const clickEvent = async () => {
        const promiseArr: Promise<any>[] = [];
        let url = `https://pokeapi.co/api/v2/pokemon/${value}`;

        promiseArr.push(fetch(url).then((response) => response.json()));
        Promise.all(promiseArr).then(async (result) => {
            await pokePromise(result);
        })
            .catch((error) => {
                window.console.log(error);
                window.console.log('該当するポケモンがいません');
                const unkwonImg = `https://pokeapi.co/api/v2/pokemon/201`;
                const typeNull = `https://pokeapi.co/api/v2/pokemon/772`;
                const errorImg = [unkwonImg, typeNull];
                const errorImgChoice = Math.floor(Math.random() * 2);
                const erroePromiseArr = [];
                erroePromiseArr.push(fetch(errorImg[errorImgChoice]).then((response) => response.json()));
                Promise.all(erroePromiseArr).then(async (result) => {
                    const pokeText = document.getElementById('text') as HTMLElement;
                    pokeText.innerHTML = '該当するポケモンがいません';
                    const pokedex = document.getElementById('img') as HTMLImageElement;
                    const pokemon = result.map((data) => ({
                            name: data.name,
                            id: data.id,
                            ja: data.species,
                            img: data.sprites.front_default
                        })
                    );
                    pokedex.src = pokemon[0].img;
                });
            });
        const pokePromise = async (result: any[]) => {
            const pokemon = result.map((data) => ({
                    name: data.name,
                    id: data.id,
                    ja: data.species,
                    img: data.sprites.front_default
                })
            );
            if (value.length <4) {
                await getJaName(pokemon);
            } else {
                window.alert('名前を入力してください');
            }
        };
        const getJaName = async (pokemon: { name: any, id: any, ja: any, img: any }[]) => {
            window.console.log(pokemon[0].img);
            const pokeName = await fetch(pokemon[0].ja.url)
                .then((response) => response.json());

                jaName = pokeName.names.find((name: PokeLanguageType) => name.language.name === 'ja-Hrkt');
            const pokeText = document.getElementById('text') as HTMLElement;
            pokeText.innerHTML = `図鑑番号:${value}  ${jaName.name}`;
            const pokedex = document.getElementById('img') as HTMLImageElement;
            pokedex.src = pokemon[0].img;
        };
    };
    const addFavorite = ()=>{
        const singleton = Singleton.getInstance();
        singleton.addItem(jaName);
        console.log(singleton.getItemList());
    }
    return (
        <div>
            <Stack spacing={3} width="300px">
                <Input
                    top="100px"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="好きな数字を入れてね"
                    size="md"
                />
                <Button
                    onClick={clickEvent}
                    id="complete" color="#61dafb"
                    top="110px" width="100px"
                >SEARCH！</Button>
                <Button onClick= {addFavorite}
                id="favorite" color="#61dafb"
                style={{ marginTop: '120px' }}
                >お気に入り</Button>
            </Stack>
        </div>

    );
};
