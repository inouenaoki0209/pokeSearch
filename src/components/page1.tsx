import React, {useState} from 'react';
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import {
    Box,
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody
} from '@chakra-ui/react';

interface HamburgerMenuProps {
}

export const Page1: React.FC<HamburgerMenuProps> = ({}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    let fireSwitch: boolean = true;
    let count = 3;
    const aboutEvent = () => {
        if (fireSwitch) {
            fireSwitch = false;
            const intervalID: NodeJS.Timer = setInterval(() => {
            window.alert(`${count}カウント後に爆発します`)
                count--;
                if (count === 0) {
                    window.alert('爆発！！！！');
                    clearInterval(intervalID);
                    count = 3;
                }
            }, 1000);

        }
    };

    return (
        <Box>
            <Button onClick={toggleMenu}>
                {isOpen ? <CloseIcon/> : <HamburgerIcon/>}
            </Button>
            <Drawer placement="left" onClose={toggleMenu} isOpen={isOpen}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>MENU</DrawerHeader>
                    <DrawerBody>
                        <Button onClick={aboutEvent} id="about" colorScheme="cyan" color="white"
                                width="120px">ABOUT</Button>
                        <Button id="people" colorScheme="orange" color="white" top="50px" left="-120"
                                width="120px">PEOPLE</Button>
                        <Button id="information" colorScheme="teal" top="50px" width="120px">INFORMATION</Button>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};
