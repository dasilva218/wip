import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Image from "next/image";
import ActionLink from "../ActionLink";
import { ChevronRightIcon } from "@chakra-ui/icons";

function Header({ page }) {
  return (
    <>
      <Flex
        as={`nav`}
        padding="18px 0px"
        justifyContent={`space-between`}
        alignItems={`center`}>
        {/*  */}
        <Box>
          <Image src={`/logo/WIP.svg`} alt={`logo`} width={100} height={200} />
        </Box>
        {page === "home" ? (
          <Flex gap={"55px"} fontSize="17px" fontFamily={`ubuntu`}>
            <ActionLink href={"#"}>Nous Contacter</ActionLink>
          </Flex>
        ) : (
          <Flex gap={"55px"} fontSize="17px" fontFamily={`ubuntu`}>
            <ActionLink href={"/"}>Accueil</ActionLink>
            {/* first */}
            <Menu>
              <MenuButton transition="all 0.2s">
                <ActionLink>Location</ActionLink>
                <ChevronRightIcon
                  transform={`rotate(90deg)`}
                  color="gray.500"
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <ActionLink href={`/wipauto/location/concessionnaires`}>
                    chez un concessionnaire
                  </ActionLink>
                </MenuItem>
                <MenuItem>
                  <ActionLink href={`/wipauto/location/particuliers`}>
                    chez un particulier
                  </ActionLink>
                </MenuItem>
              </MenuList>
            </Menu>
            {/*  */}
            <Menu>
              <MenuButton transition="all 0.2s">
                <ActionLink>Vente</ActionLink>
                <ChevronRightIcon
                  transform={`rotate(90deg)`}
                  color="gray.500"
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <ActionLink href={`/wipauto/vente/concessionnaires`}>
                    chez un concessionnaire
                  </ActionLink>
                </MenuItem>
                <MenuItem>
                  <ActionLink href={`/wipauto/vente/particuliers`}>
                    chez un particulier
                  </ActionLink>
                </MenuItem>
              </MenuList>
            </Menu>
            {/*  */}
            <Menu>
              <MenuButton>
                <ActionLink>Service Auto</ActionLink>
              </MenuButton>
            </Menu>
          </Flex>
        )}
      </Flex>
    </>
  );
}

export default Header;
