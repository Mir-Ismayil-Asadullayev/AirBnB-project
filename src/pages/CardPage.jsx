import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faDownload, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardMedia, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import cardPage from '../assets/styles/CardPage.module.scss';
import 'react-multi-carousel/lib/styles.css';


function CardPage() {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);
    const responsive = {
        desktop: {
            breakpoint: { max: 5000, min: 0 },
            items: windowWidth <= 600 ? 1 : 2,
        }

    };
    useEffect(() => {
        const handleWindowResize = () => setwindowWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);
    return (
        <div className={cardPage.container}>
            <section>
                <Grid container className={cardPage.wrapper}>
                    <Grid container spacing={2}>
                        <Grid item lg={12} sx={{ fontSize: '25px', fontWeight: 'bold' }}>Container Suite: sospeso tra terra e mare</Grid>
                        <Grid item lg={1}><FontAwesomeIcon icon={faStar} /> 4.55 </Grid>
                        <Grid item lg={1} sx={{ textDecoration: 'underline' }}>55 Rewievs</Grid>
                        <Grid item lg={8}>Place</Grid>
                        <Grid item lg={1} sx={{ textDecoration: 'underline' }}><FontAwesomeIcon icon={faDownload} />  Share</Grid>
                        <Grid item lg={1} sx={{ textDecoration: 'underline' }}><FontAwesomeIcon icon={faHeart} />  Save</Grid>
                    </Grid>
                    {
                        windowWidth >= 800 ? <Box
                            className={cardPage.box}
                            display="grid"
                            gridTemplateColumns="repeat(12, 1fr)"
                            gap={1}>
                            <Grid item gridColumn="span 6" gridRow='span 2'><CardMedia component='img' image='https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/3d966c94-4c87-479b-8eeb-4889e9fb6ac9.jpeg?im_w=960' alt='image'></CardMedia>
                            </Grid>
                            <Grid item gridColumn="span 3" > <CardMedia component='img' image='https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/eeffdea4-bbcf-4a05-bcb9-579a03bf41ab.jpeg?im_w=720' alt='image'></CardMedia>
                            </Grid>
                            <Grid item gridColumn="span 3" > <CardMedia component='img' image='https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/3c44f9fd-0a88-41dd-acb5-ebf58bde739f.jpeg?im_w=720' alt='image'></CardMedia>
                            </Grid>
                            <Grid item gridColumn="span 3" > <CardMedia component='img' image='https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/9d4c4d58-b9e6-4a2d-9883-eb2df68c0ba0.jpeg?im_w=720' alt='image'></CardMedia>
                            </Grid>
                            <Grid item gridColumn="span 3"> <CardMedia component='img' image='https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/39cdf5aa-a5d6-4f55-893c-73bf310dd598.jpeg?im_w=720' alt='image'></CardMedia></Grid>
                        </Box>
                            :
                            <Card className={cardPage.contains}>
                                <Carousel
                                    className={cardPage.contains}
                                    responsive={responsive}
                                    ssr={true}
                                    draggable={true}
                                    swipeable={true}
                                    keyBoardControl={true}
                                    customTransition='transform 1s ease'
                                >
                                    <div>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image='https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/3d966c94-4c87-479b-8eeb-4889e9fb6ac9.jpeg?im_w=960'
                                            alt="photo"
                                        />
                                    </div>
                                    <div>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image='https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/eeffdea4-bbcf-4a05-bcb9-579a03bf41ab.jpeg?im_w=720'
                                            alt="photo"
                                        />
                                    </div>
                                    <div>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image='https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/3c44f9fd-0a88-41dd-acb5-ebf58bde739f.jpeg?im_w=720'
                                            alt="photo"
                                        />
                                    </div>
                                    <div>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image='https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/9d4c4d58-b9e6-4a2d-9883-eb2df68c0ba0.jpeg?im_w=720'
                                            alt="photo"
                                        />
                                    </div>
                                    <div>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image='https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/39cdf5aa-a5d6-4f55-893c-73bf310dd598.jpeg?im_w=720'
                                            alt="photo"
                                        />
                                    </div>
                                </Carousel>
                            </Card>

                    }

                </Grid>
            </section>
        </div>
    )
}

export default CardPage;
