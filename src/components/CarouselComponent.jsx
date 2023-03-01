import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import carousel from '../assets/styles/CarouselComponent.module.scss';


function CarouselComponent() {
  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1500 },
      items: 15,
      slidesToSlide: 13
    },
    desktop1: {
      breakpoint: { max: 1500, min: 1400 },
      items: 12,
      slidesToSlide: 10
    },
    desktop2: {
      breakpoint: { max: 1400, min: 1300 },
      items: 11,
      slidesToSlide: 9
    },
    desktop3: {
      breakpoint: { max: 1300, min: 1200 },
      items: 10,
      slidesToSlide: 8
    },
    desktop5: {
      breakpoint: { max: 1200, min: 1100 },
      items: 9,
      slidesToSlide: 7
    },
    desktop6: {
      breakpoint: { max: 1100, min: 1000 },
      items: 8,
      slidesToSlide: 6
    },
    desktop7: {
      breakpoint: { max: 1000, min: 900 },
      items: 7,
      slidesToSlide: 5
    },
    desktop8: {
      breakpoint: { max: 900, min: 800 },
      items: 6,
      slidesToSlide: 4
    },
    desktop9: {
      breakpoint: { max: 800, min: 700 },
      items: 6,
      slidesToSlide: 4
    },
    desktop10: {
      breakpoint: { max: 700, min: 600 },
      items: 5,
      slidesToSlide: 3
    },
    desktop11: {
      breakpoint: { max: 600, min: 500 },
      items: 4,
      slidesToSlide: 2
    },
    desktop12: {
      breakpoint: { max: 500, min: 400 },
      items: 3,
      slidesToSlide: 1
    },
    desktop13: {
      breakpoint: { max: 400, min: 300 },
      items: 2,
      slidesToSlide: 1
    },
    desktop14: {
      breakpoint: { max: 300, min: 200 },
      items: 1,
      slidesToSlide: 1
    }

  };

  return (
    <>
      <Carousel
        removeArrowOnDeviceType={[ "desktop12", "desktop13", "desktop14"]}
        className={carousel.container}
        responsive={responsive}
        ssr={true}
        draggable={true}
        swipeable={true}
        keyBoardControl={true}
        customTransition='transform 1s ease'
      >
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg" alt="icon" width="24" height="24" />
          <span >Tropical</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg" alt="icon" width="24" height="24" />
          <span >Islands</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg" alt="icon" width="24" height="24" />
          <span>Tiny homes</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg" alt="icon" width="24" height="24" />
          <span>Bed & breakfast</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg" alt="icon" width="24" height="24" />
          <span>Golfing</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg" alt="icon" width="24" height="24" />
          <span>A-frames</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg" alt="icon" width="24" height="24" />
          <span>Private rooms</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg" alt="icon" width="24" height="24" />
          <span>Vineyards</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg" alt="icon" width="24" height="24" />
          <span>Off-the-grid</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg" alt="icon" width="24" height="24" />
          <span>Earth homes</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" alt="icon" width="24" height="24" />
          <span>National parks</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" alt="icon" width="24" height="24" />
          <span>Lakefront</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg" alt="icon" width="24" height="24" />
          <span>Trending</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg" alt="icon" width="24" height="24" />
          <span>Design</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" alt="icon" width="24" height="24" />
          <span>Beachfront</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" alt="icon" width="24" height="24" />
          <span>Amazing pools</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg" alt="icon" width="24" height="24" />
          <span>Campers</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" alt="icon" width="24" height="24" />
          <span>OMG!</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg" alt="icon" width="24" height="24" />
          <span>Arctic</span>
        </div>
        <div className={carousel.items}>
          <img src="	https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" alt="icon" width="24" height="24" />
          <span>Amazing views</span>
        </div>
        <div className={carousel.items}>
          <img src="	https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg" alt="icon" width="24" height="24" />
          <span>Surfung</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" alt="icon" width="24" height="24" />
          <span>Cabins</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg" alt="icon" width="24" height="24" />
          <span>Camping</span>
        </div>
        <div className={carousel.items}>
          <img src="	https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg" alt="icon" width="24" height="24" />
          <span>Beach</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg" alt="icon" width="24" height="24" />
          <span>New</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg" alt="icon" width="24" height="24" />
          <span>Treehouses</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg" alt="icon" width="24" height="24" />
          <span>Caves</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg" alt="icon" width="24" height="24" />
          <span>Countrysides</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg" alt="icon" width="24" height="24" />
          <span>Farms</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg" alt="icon" width="24" height="24" />
          <span>Historical homes</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg" alt="icon" width="24" height="24" />
          <span>Luxe</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg" alt="icon" width="24" height="24" />
          <span>Lake</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg" alt="icon" width="24" height="24" />
          <span>Hanoks</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg" alt="icon" width="24" height="24" />
          <span>Castles</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/e4b12c1b-409b-4cb6-a674-7c1284449f6e.jpg" alt="icon" width="24" height="24" />
          <span>Cycladic homes</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg" alt="icon" width="24" height="24" />
          <span>Top of the world</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg" alt="icon" width="24" height="24" />
          <span>Iconic cities</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg" alt="icon" width="24" height="24" />
          <span>Chef's kithcen</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg" alt="icon" width="24" height="24" />
          <span>Mansions</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg" alt="icon" width="24" height="24" />
          <span>Ryokan's</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg" alt="icon" width="24" height="24" />
          <span>Ski in/out</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg" alt="icon" width="24" height="24" />
          <span>Minsus</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg" alt="icon" width="24" height="24" />
          <span>Windmills</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg" alt="icon" width="24" height="24" />
          <span>Play</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg" alt="icon" width="24" height="24" />
          <span>Casas Particulares</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/8eccb972-4bd6-43c5-ac83-27822c0d3dcd.jpg" alt="icon" width="24" height="24" />
          <span>Grand pianos</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/747b326c-cb8f-41cf-a7f9-809ab646e10c.jpg" alt="icon" width="24" height="24" />
          <span>Stepherd's huts</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg" alt="icon" width="24" height="24" />
          <span>Yurts</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg" alt="icon" width="24" height="24" />
          <span>Towers</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg" alt="icon" width="24" height="24" />
          <span>Barns</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg" alt="icon" width="24" height="24" />
          <span>Domes</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg" alt="icon" width="24" height="24" />
          <span>Desert</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg" alt="icon" width="24" height="24" />
          <span>Boats</span>
        </div>
        <div className={carousel.items}>
          <img src="	https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg" alt="icon" width="24" height="24" />
          <span>Houseboats</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/e22b0816-f0f3-42a0-a5db-e0f1fa93292b.jpg" alt="icon" width="24" height="24" />
          <span>Adapted</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg" alt="icon" width="24" height="24" />
          <span>Containers</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg" alt="icon" width="24" height="24" />
          <span>Creative spaces</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg" alt="icon" width="24" height="24" />
          <span>Dammusi</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg" alt="icon" width="24" height="24" />
          <span>Trulli</span>
        </div>
        <div className={carousel.items}>
          <img src="https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg" alt="icon" width="24" height="24" />
          <span>Riads</span>
        </div>
      </Carousel>
    </>
  );
}

export default CarouselComponent;
