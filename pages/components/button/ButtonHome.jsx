import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function HomeB({ children }) {
  const router = useRouter();

  const handleClick = () => router.push("/wipauto");

  return (
    <Button
      onClick={handleClick}
      _hover={{ color: "#000", backgroundColor: "blue.700" }}
      letterSpacing={`3px`}
      color={`whiteAlpha.800`}
      fontFamily={`ubuntu`}
      size="md"
      height="48px"
      width="200px"
      bgGradient="linear-gradient(101.14deg, #FFA500 -5.69%, rgba(254, 175, 35, 0.62) 69.16%)">
      {children}
    </Button>
  );
}
