import '../App.css';
import { Text, Box, Flex, Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Button } from '@chakra-ui/react'
import { homeRoute } from '../utils/consts';
import sirok4 from '../images/sirok4.png'

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
                        src={sirok4}
                        width={'330px'}
                        alt='sirok4'
                        borderRadius={'10%'}
                ></Image>
                <Box
                    width={'100%'}
                    textAlign={'center'}
                >
                    <Heading fontSize={'30px'}>Незнайка Cмешинкин</Heading>
                </Box>
                <Box>
                    <Text>
                        <b>Writes:</b> <i> Сыр прикольный, дизайн с белыми дорожками. Ставлю пять звёзд</i>
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