import { Card, CardMedia, Grid } from '@mui/material';
import { Box } from '@mui/system';
import wifi from '../assets/images/wifi.svg'
import tub from '../assets/images/tub.svg'
import bath from '../assets/images/bath.svg'
import camera from '../assets/images/camera.svg'
import balcon from '../assets/images/balcon.svg'
import air from '../assets/images/air.svg'
import monoxide from '../assets/images/monoxide.svg'
import parking from '../assets/images/parking.svg'
import smoking from '../assets/images/smoking.svg'
import yard from '../assets/images/yard.svg'
import React, { useEffect, useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import cardPage from '../assets/styles/CardPage.module.scss';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faDollar, faDownload, faStar } from '@fortawesome/free-solid-svg-icons';


function CardPage() {
    const [comments, setComments] = useState([]);
    const [addComment, setaddComment] = useState([]);
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
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
    const textArea = useRef();
    const addCommentHandler = () => {
        if (textArea.current.value !== "" && comments.trim() !== "") {
            setaddComment(addComment.concat(
                <div className={cardPage.reviews} key={Date.now()}>
                    <div className={cardPage.profile}>
                        <img src="https://a0.muscache.com/im/pictures/user/6519e579-225e-4d98-8e3c-a3fc1abaa298.jpg?im_w=240" alt="profile" />
                        <div>
                            <span>Thomas</span>
                            <span>September 2022</span>
                        </div>
                    </div>
                    {comments}
                </div>
            ));
            textArea.current.value = "";
            window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        }
    }
    return (
        <div className={cardPage.container}>
            <section>
                <Grid container className={cardPage.wrapper}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item lg={12} md={5} xs={12} sx={{ fontSize: '1.3em', fontWeight: 'bold' }}>Container Suite: sospeso tra terra e mare</Grid>
                        <Grid item lg={1} md={1} xs={3}><FontAwesomeIcon icon={faStar} /> 4.55 </Grid>
                        <Grid item lg={2} md={2} xs={3} sx={{ textDecoration: 'underline' }}>55 Rewievs</Grid>
                        <Grid item lg={7} md={2} xs={6}>Place</Grid>
                        <Grid item lg={1} md={1} xs={3} sx={{ textDecoration: 'underline' }}><FontAwesomeIcon icon={faDownload} />  Share</Grid>
                        <Grid item lg={1} md={1} xs={3} sx={{ textDecoration: 'underline' }}><FontAwesomeIcon icon={faHeart} />  Save</Grid>
                    </Grid>
                    {
                        windowWidth >= 800 ?
                            <Box
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
                                    showDots={true}
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
            <section className={cardPage.reserve}>
                <div className={cardPage.facilities}>
                    <div>What this place offers</div>
                    <div className={cardPage.fcontainer}>
                        <div>
                            <div><img src={wifi} alt="wifi" />  Wifi</div>
                            <div><img src={tub} alt="tub" />  Private hot tub - available all year</div>
                            <div><img src={bath} alt="bath" />  Bathtub</div>
                            <div><img src={yard} alt="yard" />  Private backyard – Fully fenced</div>
                            <div><img src={monoxide} alt="monoxide" />  Carbon monoxide alarm</div>
                        </div>
                        <div>
                            <div><img src={parking} alt="parking" />  Free parking on premises</div>
                            <div><img src={air} alt="air" />  Central air conditioning</div>
                            <div><img src={balcon} alt="balcon" />  Private patio or balcony</div>
                            <div><img src={camera} alt="camera" />  Security cameras on property</div>
                            <div><img src={smoking} alt="smoking" />  Smoke alarm</div>
                        </div>
                    </div>
                    <button>Show all amenities</button>
                </div>
                <div className={cardPage.bron}>
                    <div className={cardPage.reservation}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                                <FontAwesomeIcon icon={faDollar} />
                                159 <span style={{ fontSize: "0.9em", color: 'gray', fontWeight: "normal" }}>night</span>
                            </div>
                            <div>
                                <span style={{ fontSize: "0.9em", margin: '0 3px' }} ><FontAwesomeIcon icon={faStar} /> 4.95 </span>
                                <span style={{ fontSize: "0.9em", textDecoration: 'underline' }}> 41 reviews</span>
                            </div>
                        </div>
                        <div className={cardPage.spans}>
                            <span >
                                <span>CHECK-IN</span><span>03/04/2022</span>
                            </span>
                            <span >
                                <span>CHECK-OUT</span><span>03/04/2022</span>
                            </span>
                            <span>Guest 1 guest</span>
                        </div>
                        <button>Reserve</button>
                    </div>
                </div>
                <div className={cardPage.comments}>
                    <div><FontAwesomeIcon icon={faStar} /> 4.95 41 reviews</div>
                    <textarea ref={textArea} placeholder='Type your impressions...' onChange={(e) => setComments(e.target.value)} />
                    <button type='button' onClick={addCommentHandler}>Add a Review</button>
                    <div style={{ marginBottom: '180px' }}>
                        {addComment.map(item => item)}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CardPage;
