import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import Image from 'next/image';
import ActionLink from '../ActionLink';
import { ChevronRightIcon } from '@chakra-ui/icons';

function Header({ page }) {
  return (
    <>
      <Flex
        py={`18`}
        as={`nav`}
        justifyContent={`space-between`}
        alignItems={`center`}>
        {/*  */}
        <Box>
          <ActionLink href={'/'}>
            <Image
              src={`/logo/WIP.svg`}
              alt={`logo`}
              width={100}
              height={200}
            />
          </ActionLink>
        </Box>
        {page === 'home' ? (
          <Flex gap={'55px'} fontSize='17px' fontFamily={`ubuntu`}>
            <ActionLink href={'#'}></ActionLink>
          </Flex>
        ) : (
          <Flex gap={'55px'} fontSize='17px' fontFamily={`ubuntu`}>
            <ActionLink href={'/wipauto'}>Accueil</ActionLink>
            {/* first */}
            <Menu>
              <MenuButton transition='all 0.2s'>
                <ActionLink>Location</ActionLink>
                <ChevronRightIcon
                  transform={`rotate(90deg)`}
                  color='gray.500'
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <ActionLink
                    href={`/wipauto/location/concessionnaires`}>
                    concessionnaire
                  </ActionLink>
                </MenuItem>
                <MenuItem>
                  <ActionLink href={`/wipauto/location/particuliers`}>
                    particulier
                  </ActionLink>
                </MenuItem>
              </MenuList>
            </Menu>
            {/*  */}
            <Menu>
              <MenuButton transition='all 0.2s'>
                <ActionLink>Vente</ActionLink>
                <ChevronRightIcon
                  transform={`rotate(90deg)`}
                  color='gray.500'
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <ActionLink
                    href={`/wipauto/vente/concessionnaires`}>
                    concessionnaire
                  </ActionLink>
                </MenuItem>
                <MenuItem>
                  <ActionLink href={`/wipauto/vente/particuliers`}>
                    particulier
                  </ActionLink>
                </MenuItem>
              </MenuList>
            </Menu>
            {/*  */}
            <Menu>
              <MenuButton>
                <ActionLink>Service</ActionLink>
              </MenuButton>
            </Menu>
          </Flex>
        )}
      </Flex>
    </>
  );
}

export default Header;
