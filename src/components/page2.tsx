import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Input, Text, Stack, Heading, Button} from '@chakra-ui/react';
import {deepStrictEqual} from 'node:assert';
import {data} from 'jquery';

interface PokeLanguageType {
    language: {
        name: string;
        url: string;
    };
    name: string;
}

export const Page2 = ({}) => {
    const name = '';
    const min = 0;
    const max = 1025;
    const [value, setValue] = React.useState('');
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const resultArr = value.split('').map((str) => alphabet.indexOf(str) + 1);
    const clickEvent = async () => {
        let pokemonNumber: number = 0;
        resultArr.forEach((pokemonId: number, index: number) => {
            pokemonNumber += pokemonId;
        });
        const promiseArr: Promise<any>[] = [];
        const seacrhNumber = (): number => {
            const result = pokemonNumber * Math.floor(Math.random() * 20);
            if (result === min) {
                return min + 2;
            } else if (result >= max) {
                return max - 1;
            } else {
                return result;
            }
        };
        const beforeRand = seacrhNumber() - 1;
        const afterRand = seacrhNumber() + 1;
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;
        const beforeUrl = `https://pokeapi.co/api/v2/pokemon/${beforeRand}`;
        const afterUrl = `https://pokeapi.co/api/v2/pokemon/${afterRand}`;

        promiseArr.push(fetch(url).then((response) => response.json()));
        promiseArr.push(fetch(beforeUrl).then((response) => response.json()));
        promiseArr.push(fetch(afterUrl).then((response) => response.json()));
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
            if (value.length > 3) {
                await getJaName(pokemon);
            } else {
                window.alert('名前を入力してください');
            }
        };
        const getJaName = async (pokemon: { name: any, id: any, ja: any, img: any }[]) => {
            window.console.log(pokemon[0].img);
            const pokeName = await fetch(pokemon[0].ja.url)
                .then((response) => response.json());
            const beforePokeName = await fetch(pokemon[1].ja.url)
                .then((response) => response.json());
            const afterPokeName = await fetch(pokemon[2].ja.url)
                .then((response) => response.json());
            const jaName = pokeName.names.find((name: PokeLanguageType) => name.language.name === 'ja-Hrkt');
            const beforeJaName = beforePokeName.names.find((name: PokeLanguageType) => name.language.name === 'ja-Hrkt');
            const afterJaName = afterPokeName.names.find((name: PokeLanguageType) => name.language.name === 'ja-Hrkt');
            const pokeText = document.getElementById('text') as HTMLElement;
            const beforePokeText = document.getElementById('beforeText') as HTMLElement;
            const afterPokeText = document.getElementById('afterText') as HTMLElement;
            pokeText.innerHTML = `図鑑番号:${pokemonNumber}  ${jaName.name}`;
            beforePokeText.innerHTML = `図鑑番号:${beforeRand} ${beforeJaName.name}`;
            afterPokeText.innerHTML = `図鑑番号:${afterRand} ${afterJaName.name}`;
            const pokedex = document.getElementById('img') as HTMLImageElement;
            const beforePokeImg = document.getElementById('beforeImg') as HTMLImageElement;
            const afterPokeImg = document.getElementById('afterImg') as HTMLImageElement;
//            const nextpoke = document.getElementById('nextPoke') as HTMLElement;
            pokedex.src = pokemon[0].img;
            beforePokeImg.src = pokemon[1].img;
            afterPokeImg.src = pokemon[2].img;
        };
    };
    return (
        <div>
            <Stack spacing={3} width="300px">
                <Input
                    top="100px"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="入力欄"
                    size="md"
                />
                <Button
                    onClick={clickEvent}
                    id="complete" color="#61dafb"
                    top="110px" width="100px"
                >complete</Button>
            </Stack>
        </div>

    );
};
