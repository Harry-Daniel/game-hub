import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/MSH.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack  padding='50px'>
        <Image src={logo} boxSize='40px'/>  
        <SearchInput/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar