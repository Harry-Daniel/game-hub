import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/MSH.png';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding='50px'>
        <Image src={logo} boxSize='40px'/>  
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar