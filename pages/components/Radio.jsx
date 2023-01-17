import { Box, Center, Text, RadioGroup, Stack, Radio } from "@chakra-ui/react";
import { BsFunnel } from "react-icons/bs";
import { useState } from "react";
import { RiFilterOffFill } from "react-icons/ri";

function Radio_group({ setDealers, filter, disableB }) {
  const [value, setValue] = useState("");
  const [option, setOption] = useState(false);

  const fetch_data = async (e) => {
    const fetch_dealer_filter = await filter(e);
    setValue(e);
    setOption(true);
    setDealers(fetch_dealer_filter.data);
  };

  const disable = async () => {
    const fetch_dealer_filter = await disableB();
    setValue("");
    setOption(false);
    setDealers(fetch_dealer_filter.data);
  };

  return (
    <Center mt={"20px"} display={"flex"} gap="20px">
      <BsFunnel />
      <Text>filtrez par commune</Text>
      <RadioGroup
        borderRadius={"5px"}
        bgColor={"#FEAF23"}
        onChange={(e) => fetch_data(e)}
        value={value}
        px="10px">
        <Stack direction="row">
          <Radio value="libreville">Libreville</Radio>
          <Radio value="akanda">Akanda</Radio>
          <Radio value="owendo">Owendo</Radio>
        </Stack>
      </RadioGroup>
      {option && (
        <button onClick={disable}>
          <RiFilterOffFill />
        </button>
      )}
    </Center>
  );
}

export default Radio_group;
