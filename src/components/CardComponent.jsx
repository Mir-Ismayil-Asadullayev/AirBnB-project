import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import card from '../assets/styles/CardComponent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-multi-carousel';
import { NavLink } from 'react-router-dom';
import { Skeleton } from '@mui/material';

function CardComponent() {
    const [data, setData] = useState([])
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
            })
    }, []);
    if (data.length === 0) {
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
                                                />
                                            </NavLink>
                                        </div>
                                        <div>
                                            <NavLink to='/card'>
                                                <CardMedia
                                                    component="img"
                                                    height="200"
                                                    image={item.flags.svg}
                                                    alt="photo"
                                                />
                                            </NavLink>
                                        </div>
                                        <div>
                                            <NavLink to='/card'>
                                                <CardMedia
                                                    component="img"
                                                    height="200"
                                                    image={item.flags.svg}
                                                    alt="photo"
                                                />
                                            </NavLink>
                                        </div>
                                    </Carousel>
                                    <NavLink to="/card" style={{ all: 'unset' }}>
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
                            </Card>)
                    }
                </div>
            </>
        )
    }
}

export default CardComponent;
