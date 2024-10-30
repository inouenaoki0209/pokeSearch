
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {Page1} from './components/page1';
import {Search} from './components/search';
import { Favorite } from './components/favorite';
export const App: React.FC = () => {
    return (
        <ChakraProvider>
            <Page1 />
            <Search />
            <Favorite />
        </ChakraProvider>
    );
};

