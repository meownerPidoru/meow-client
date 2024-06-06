import '../App.css';
import { Flex, Box, Text, Grid, GridItem, WrapItem, Button, ButtonGroup, AspectRatio, Heading, ExternalLinkIcon } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import colors from './colors';
import ToTopButton from '../components/ToTopButton';
import Sir from "../images/siir.png"
import womensir from "../images/womensir.png"
import mirsirov from "../images/mirsirov.png"
import crasiv from "../images/crasiv.png"
import menu from '../components/menu';
import CardItem from '../components/cardItem';
import CardItem2 from '../components/cardItem2';
import CardItem3 from '../components/cardItem3';
import CardItem4 from '../components/cardItem4';
import CardItem5 from '../components/cardItem5';
import CardItem6 from '../components/cardItem6';
import CardItem7 from '../components/cardItem7';
import { Link, useLocation } from 'react-router-dom';
import { ShopRoute, HomeRoute, AboutRoute, AuthRoute } from '../utils/consts';
import Loader from '../components/Loader';
import { useContext, useEffect, useState } from 'react'; 
import { observer } from 'mobx-react-lite';
import { Context } from '../index';


 
const HomePage = () =>{ 
    const [isLoading, setIsLoading] = useState(true); 
    const {store} = useContext (Context);
 
    useEffect(() => { 
        const checkAuth = async () => { 
            if(localStorage.getItem('token')){
                await store.checkAuth();
            }
            setIsLoading(false) 
        } 
        checkAuth ();
    }, [store])

 
    return( 
        <> 
            {isLoading ? ( 
                <Loader /> 
            ) : (
                <Box
                    w={'100%'}
                    bg={"black"}
                >
                    <Flex w={'100%'}>
                        <NavBar />
                    </Flex>
                    <Flex 
                        w={'100%'}
                        flexWrap={'wrap'}
                    >
                        <>
                        <Flex
                            h={'100vh'}
                            w={'100%'}
                            
                            backgroundImage={Sir}
                            backgroundSize={'cover'}
                            flexDirection={'column'}
                            justifyContent={'center'}
                        >
                            <Text fontSize={'170px'} m={"0px 0px 0px 100px"} textColor={'#B8860B'}>cheese and <b className='bbb'> red</b> </Text>
                                <ButtonGroup gap='4'm={"90px 0px 0px 70px"} >
                                <Link
                                        to={ShopRoute}
                                    > 
                                <Button colorScheme='whiteAlpha' padding={'60px 80px 60px 80px'} fontSize={'70px'}>Buy Sir</Button>
                                </Link>
                                <Button colorScheme='blackAlpha'>buy sir</Button>
                                <Button colorScheme='blackAlpha'>BlackAlphaSir</Button>
                                </ButtonGroup>
                            
                            
                        </Flex>
                        <Flex 
                        backgroundImage={crasiv}
                        h={'8vh'}
                        w={'100%'}
                        >

                        </Flex>
                        <Flex
                            h={'110vh'}
                            w={'100%'}
                            id='about'   
                        >
                            <Flex backgroundImage={womensir} backgroundSize={'cover'} padding={'10px 50px'} flexDirection={'column'} w={'100%'} > 
                                <Text fontSize={'40px'}  color={'#bfa471'} mb={'20px'}>Where are your sir?</Text> 
                                <AspectRatio ratio={19 / 9} > 
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37761.39132232427!2d5.371012146400727!3d51.51430209425553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6dc55c3f958cf%3A0x4f6e42e7e581a5eb!2z0JHQtdGB0YIsINCd0LjQtNC10YDQu9Cw0L3QtNGL!5e1!3m2!1sru!2sby!4v1717338443654!5m2!1sru!2sby" ></iframe> 
                                </AspectRatio> 
                                </Flex>
                                </Flex>

                                <Flex 
                                                backgroundImage={crasiv}
                                                h={'8vh'}
                                                w={'100%'}
                                                >
                                            </Flex>  
                                                    <Box
                                                    h={'110vh'}
                                                    w={'100%'}
                                                    backgroundColor={'#6e6232'}
                                                    backgroundImage={mirsirov} 
                                                    backgroundSize={'cover'}>
                                                    <Flex>
                                                    
                                                        <Text w={'100%'} color={'#d4ccb2'} fontSize={'80px'} padding={'10px 50px'} margin={'30px 0px 20px 0px'}>About our sirs:</Text>
                                                     </Flex>
                                                     <Flex w={'80%'} justify={'center'} mt={'30px'} ml={'170px'}>
                                                        <Text color={'#d4ccb2'} fontSize={'17px'} >
                                                        <Heading>Our cheese is a true delight of taste.</Heading>
                                                        We pride ourselves on making the most delicious cheeses on the market. Our recipe has been carefully crafted to delight your taste buds with a delicately creamy taste and perfect texture. Every bite will give you real pleasure.

                                                            <Heading>High quality ingredients for the perfect product.</Heading>
                                                            We carefully select ingredients for the production of our cheesecakes. Only the freshest and natural milk, cream of the highest quality, as well as environmentally friendly additives - all this allows us to create premium products.

                                                            <Heading>Traditional recipes and modern technologies.</Heading>
                                                            Based on many years of cheese production traditions, we combine classic recipes with advanced technologies. This allows us to maintain a unique taste, as well as ensure consistently high quality and safety of our products.

                                                            <Heading>Wide range for every taste.</Heading>
                                                            In our assortment you will find cheese curds with a variety of fillings and flavors: classic, raisin, vanilla, chocolate and many others. Regardless of your preferences, we will offer the ideal option.
                                                        </Text>

                                                        <Text color={'#d4ccb2'} fontSize={'17px'}>
                                                            <Heading>Convenient formats for any need.</Heading>
                                                            We offer cheese curds both in standard packaging and in convenient multi-serving formats. This allows you to enjoy our products at home, in the office or on the go.

                                                            <Heading>Caring for the environment.</Heading>
                                                            We take a responsible approach to environmental issues and strive to minimize the negative impact on the environment. Our packaging is 100% recyclable and our manufacturing processes meet high environmental standards.

                                                            <Heading>Availability nationwide.</Heading>
                                                            Our products are presented in all major chain stores around the world. You can always buy your favorite cheesecakes within walking distance without wasting time searching.

                                                            <Heading>A team of professionals working for you.</Heading>
                                                            Behind each of our cheeses is the well-coordinated work of a team of experts: technologists, quality controllers, logisticians and managers. We are always open to dialogue with our clients and are ready to answer any of your questions.
                                                        </Text> 
                                                     </Flex>
                                                     <Flex>
                                                        <Text w={'100%'} mt={'30px'} ml={'170px'} color={'#d4ccb2'} fontSize={'20px'}>Learn more about {' '}
                                                        <Link color='teal.500' href='https://youtu.be/BW4H15rK6iI?si=aKcxrZN_eQj7SFVT'>
                                                        <b>our products</b>
                                                        </Link>
                                                         </Text>
                                                        
                                                     </Flex>
                                                    </Box>
                                                       
                                              <Flex 
                                                   backgroundImage={crasiv}
                                                   h={'8vh'}
                                                  w={'100%'}
                                                  >

                                                </Flex>

                                <Box w={'100%'} backgroundColor={'#7a6b35'} paddingBottom={'50px'}>
                                    <Text fontSize={'80px'} padding={'10px 50px'} margin={'30px 0px 20px 0px'}>Your Comments:</Text>
                                    
                                    <Flex
                                        flexWrap={'wrap'}
                                        mt={'20px'}
                                        ml={'70px'}
                                        width={'90%'}
                                        justify={'center'}
                                        gap={'20px'}
                                        mb={'10px'}
                                    > 
                                        <CardItem3 />
                                        <CardItem4 />
                                        <CardItem5 />
                                        <CardItem6 />
                                        <CardItem2 />
                                        <CardItem7 />
                                    </Flex>
                                </Box>
                            
                                            <Flex 
                                                backgroundImage={crasiv}
                                                h={'8vh'}
                                                w={'100%'}
                                                >
                                            </Flex>

                        <Flex>
                            <ToTopButton />
                        </Flex>
                        </>
                    </Flex>
                </Box>
            )}
        </>
    )
    
}

export default observer (HomePage);