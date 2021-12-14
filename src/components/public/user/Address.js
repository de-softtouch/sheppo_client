import React, { useEffect } from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Heading,
  Button,
  Divider,
  Container,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import service from "../../../service/entitiesService";
const Address = () => {
  useEffect(async () => {
    const adddresses = await service.fetchUserAddresses();
    console.log(adddresses);
  }, []);
  return (
    <VStack spacing="5">
      <Flex w="100%" justifyContent="space-between" alignItems="center">
        <Text>My Address</Text>
        <Button leftIcon={<AddIcon />}>Add New Address</Button>
      </Flex>

      <Divider />

      <VStack spacing="10">
        {[1, 2, 3, 4, 5].map((item, i) => (
          <Flex key={i} w="100%" px="10">
            <VStack align="start" flex="8">
              <Flex align="start" w="100%">
                <Text flex="4">Full Name</Text>
                <Container flex="8">
                  <Text>Nguyen Khanh Duy</Text>
                </Container>
              </Flex>
              <Flex align="start" w="100%">
                <Text flex="4">Phone</Text>
                <Container flex="8">
                  <Text>0869104353</Text>
                </Container>
              </Flex>
              <Flex align="start" w="100%">
                <Text flex="4">Address</Text>
                <Container flex="8">
                  <Text>
                    Trung tâm Ngoại ngữ, Khu vực thực nghiệm, Bệnh viện thú y
                    HCM, 137 Quốc lộ 13 cũ, Phường Linh Trung, Thủ Đức, Thành
                    phố Hồ Chí M Phường Linh Trung Thành Phố Thủ Đức TP. Hồ Chí
                    Minh
                  </Text>
                </Container>
              </Flex>
            </VStack>
            <Flex
              direction="column"
              alignItems="end"
              flex="4"
              justifyContent="space-around"
            >
              <Text>Edit</Text>
              <Button variant="outline">Set As Default</Button>
            </Flex>
          </Flex>
        ))}
      </VStack>
    </VStack>
  );
};

export default Address;
