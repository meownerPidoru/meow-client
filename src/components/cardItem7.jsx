import '../App.css';
import { Text, Box, Flex, Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Button } from '@chakra-ui/react'
import { homeRoute } from '../utils/consts';
import sirok5 from '../images/sirok5.png'

const CardItem = () =>{
    return(
        <Card
            width={'500px'}
            height={'400px'}
            boxShadow={'1px 1px 10px #808080'}
            borderRadius={'8px'}
        >
            <CardBody
                display={'flex'}
                justifyContent={'center'}
                flexWrap={'wrap'}
            >
                <Image
                        src={sirok5}
                        width={'200px'}
                        alt='sirok5'
                        borderRadius={'10%'}
                ></Image>
                <Box
                    width={'100%'}
                    textAlign={'center'}
                >
                    <Heading fontSize={'30px'}>Тихан</Heading>
                </Box>
                <Box>
                    <Text>
                        <b>Writes:</b> <i> Задорный сырок. Коту Тихану понравился! Будет брать</i>
                    </Text>
                </Box>
                <Flex
                    width={'65%'}
                    justify={'space-around'}
                    align={'center'}
                >
                    <Button width='150px' colorScheme='whatsapp'>Comment</Button>
                </Flex>
            </CardBody>

            
        </Card>
    )
}
export default CardItem; // выгружаем компонент