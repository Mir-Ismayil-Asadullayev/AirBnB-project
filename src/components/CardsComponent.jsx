import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import card from '../assets/styles/CardsComponent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-multi-carousel';
import { NavLink } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addCard } from '../store/wishSlice';

function CardComponent() {
    const [data, setData] = useState([]);
    const responsive = {
        desktop: {
            breakpoint: { max: 5000, min: 0 },
            items: 1,
        }

    };
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then(res => {
                setData(res.data);
            });
    }, []);
    const dispatch = useDispatch();
    const addWish = (e) => {
        dispatch(addCard({ photo: e.target.src }));
    }
    const heartClick = (e) => {
        e.currentTarget.classList.toggle(card.heartClick);
    }

    if (!data.length) {
        return (
            <>
                <div className={card.skeleton}>
                    <div className={card.skeletonItems}>
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                    </div>
                    <div className={card.skeletonItems}>
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                    </div>
                    <div className={card.skeletonItems}>
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                    </div>
                    <div className={card.skeletonItems}>
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                    </div>
                    <div className={card.skeletonItems}>
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                    </div>
                    <div className={card.skeletonItems}>
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                    </div>
                    <div className={card.skeletonItems}>
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                    </div>
                    <div className={card.skeletonItems}>
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                    </div>
                    <div className={card.skeletonItems}>
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                    </div>
                    <div className={card.skeletonItems}>
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                    </div>
                    <div className={card.skeletonItems}>
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                    </div>
                    <div className={card.skeletonItems}>
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                        <Skeleton animation="wave" variant="rounded" />
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className={card.container}>
                    {
                        data && data.map(item =>
                            <Card key={item.area + item.population} className={card.cardWrapper}>
                                <div>
                                    <Carousel
                                        responsive={responsive}
                                        draggable={true}
                                        swipeable={true}
                                        ssr={true}
                                        keyBoardControl={true}
                                        customTransition='transform 1s ease'
                                        className={card.carousel}
                                        showDots={true}
                                        dotListClass={card.dots}
                                    // autoPlay={true}
                                    // infinite={true}
                                    // autoPlaySpeed={5000}
                                    >
                                        <div>
                                            <NavLink to='/card'>
                                                <CardMedia
                                                    component="img"
                                                    height="200"
                                                    image={item.flags.svg}
                                                    alt="photo"
                                                    onClick={addWish}
                                                />
                                            </NavLink>
                                        </div>
                                        <div>
                                            <NavLink to={`/card`}>
                                                <CardMedia
                                                    component="img"
                                                    height="200"
                                                    image={item.flags.svg}
                                                    alt="photo"
                                                />
                                            </NavLink>
                                        </div>
                                        <div>
                                            <NavLink to={`/card`}>
                                                <CardMedia
                                                    component="img"
                                                    height="200"
                                                    image={item.flags.svg}
                                                    alt="photo"
                                                />
                                            </NavLink>
                                        </div>
                                    </Carousel>
                                    <NavLink to={`/card`} style={{ all: 'unset' }}>
                                        <CardContent>
                                            <div className={card.cardContent}>
                                                <Typography
                                                    variant='caption'
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        fontSize: '15px'
                                                    }}>
                                                    Name
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontWeight: 'normal',
                                                        fontSize: '14px',
                                                        overflow: 'hidden',
                                                        maxWidth: '50px',
                                                        maxHeight: '20px',
                                                        marginLeft: '8px'
                                                    }}
                                                >
                                                    <FontAwesomeIcon icon={faStar} style={{ marginRight: '5px' }} /> 4,5
                                                </Typography>
                                            </div>
                                            <Typography variant="body2" color="text.secondary">
                                                distance
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                date
                                            </Typography>
                                            <Typography sx={{ fontWeight: 'bold', marginTop: '5px' }} variant="body2" >
                                                148 $
                                            </Typography>
                                        </CardContent>
                                    </NavLink>
                                </div>
                                <div className={card.heart} onClick={heartClick} >
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'rgba(0, 0, 0, 0.5)', height: '24px', width: '24px', stroke: 'white', strokeWidth: 2, overflow: 'visible' }}>
                                        <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
                                        </path>
                                    </svg>
                                </div>

                            </Card>)
                    }
                </div>
            </>
        )
    }
}

export default CardComponent;
