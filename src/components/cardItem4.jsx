import '../App.css';
import { Text, Box, Flex, Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Button } from '@chakra-ui/react'
import { homeRoute } from '../utils/consts';
import sirok3 from '../images/sirok3.png'

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
                        src={sirok3}
                        width={'300px'}
                        alt='DomSir1'
                        borderRadius={'10%'}
                ></Image>
                <Box
                    width={'100%'}
                    textAlign={'center'}
                >
                    <Heading fontSize={'30px'}>Алекстандр Маяковский</Heading>
                </Box>
                <Box>
                    <Text>
                        <b>Writes:</b> <i> Заказал сыр Адыгейский. В моём городе такого вкусного сыра ранее не находил!</i>
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
export default CardItem; 