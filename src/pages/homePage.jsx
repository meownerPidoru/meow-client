import '../App.css';
import { Flex, Box, Text, Grid, GridItem, WrapItem, Button, ButtonGroup, AspectRatio } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import colors from './colors';
import ToTopButton from '../components/ToTopButton';
import Sir from "../images/siir.png"
import menu from '../components/menu';
import CardItem from '../components/cardItem';
import CardItem2 from '../components/cardItem2';
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
                            h={'110vh'}
                            w={'100%'}
                            id='about'   
                        >
                            <Flex backgroundColor={'#45310c'} padding={'10px 50px'} flexDirection={'column'} w={'100%'} > 
                                <Text fontSize={'40px'}  color={'#bfa471'} mb={'20px'}>Where are your sir?</Text> 
                                <AspectRatio ratio={19 / 9} > 
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37761.39132232427!2d5.371012146400727!3d51.51430209425553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6dc55c3f958cf%3A0x4f6e42e7e581a5eb!2z0JHQtdGB0YIsINCd0LjQtNC10YDQu9Cw0L3QtNGL!5e1!3m2!1sru!2sby!4v1717338443654!5m2!1sru!2sby" ></iframe> 
                                </AspectRatio> 
                                </Flex>
                                </Flex>

                                <Box mt={'20px'} w={'100%'} backgroundColor={'#6e6232'}>
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
                                        <CardItem />
                                        <CardItem />
                                        <CardItem />
                                        <CardItem />
                                        <CardItem2 />
                                        <CardItem />
                                    </Flex>
                                </Box>
                            
                        
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