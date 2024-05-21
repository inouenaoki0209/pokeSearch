
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {Page1} from './components/page1';
import {Page2} from './components/page2';
import {Page3} from './components/Page3';

export const App: React.FC = () => {
    return (
        <ChakraProvider>
            <Page1 />
            <Page2 />
            <Page3 />
        </ChakraProvider>
    );
};

