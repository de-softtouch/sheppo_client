import React, { useEffect, useState } from "react";
import history from "../../../history";
import {
  Flex,
  Text,
  SimpleGrid,
  Link,
  Box,
  AspectRatio,
  Image,
} from "@chakra-ui/react";
import service from "../../../service/entitiesService";
const Categories = () => {
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    getCategories();
  }, [setCategory]);

  const getCategories = async () => {
    const data = await service.fetchCategories();
    console.log(data);
    setCategory(data);
  };

  return (
    <>
      <Flex w={"95%"} justifyContent={"space-between"} direction={"row"} mb={3}>
        <Text fontWeight={"bold"}>CATEGORY</Text>
        <Text>
          <Link to={"/"}>More</Link>
        </Text>
      </Flex>
      <SimpleGrid
        columns={[2, 6, 8, 10]}
        gap={2}
        spacing={2}
        justifyItems={"center"}
      >
        {categories.map((item, i) => (
          <Box
            onClick={() => {
              history.push("/products");
              window.scrollTo(0, 0);
            }}
            cursor={"pointer"}
            textAlign={"center"}
            key={i}
            position={"relative"}
          >
            <AspectRatio w={"100px"} ratio={1}>
              <Image
                objectFit="cover"
                borderRadius={"sm"}
                src="https://images.pexels.com/photos/792345/pexels-photo-792345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Category"
              />
            </AspectRatio>
            <Text
              alignItems={"center"}
              alignSelf={"center"}
              w={"100%"}
              fontWeight={"medium"}
              color="gray.600"
              letterSpacing={0.5}
            >
              Electronic
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Categories;
