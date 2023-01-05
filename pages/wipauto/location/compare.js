import { useState } from "react";
import CarRent from "../../../models/carRent";
import CardVehicule from "../../components/CardVehicule";
import { Flex } from "@chakra-ui/react";
// import Dealers from "../../../models/dealers";

const Compare = ({ data }) => {
  const [cars, setCar] = useState(JSON.parse(data));
  console.log(cars);
  return (
    <Flex gap={"3px"} justifyContent="space-around" >
      {cars.map((car) => (
        <CardVehicule key={car._id} item={car} />
      ))}
    </Flex>
  );
};

export const getServerSideProps = async (ctx) => {
  const { marque, model } = ctx.query;

  const carC = await CarRent.find().and([{ marque }, { model }]);
  const car_compar = JSON.stringify(carC);
  // const dealer = await Dealers.find();

  return {
    props: {
      data: car_compar,
    },
  };
};

export default Compare;
