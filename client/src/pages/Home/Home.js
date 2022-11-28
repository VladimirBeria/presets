import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeroSection from '../../components/HeroSection/HeroSection';
import NewSection from '../../components/NewSection/NewSection';
import InfoSection from '../../components/InfoSection/InfoSection';
import Card from '../../components/Card/Card';
import Img from '../../assets/img/MainPageHeroSection.jpg';
import FeaturedSection from '../../components/FeaturedSection/FeaturedSection';

import * as actions from '../../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.items);
  const isAdmin = useSelector(({ user }) => user.info.isAdmin);
  React.useEffect(() => {
    dispatch(actions.getProducts());
  }, [dispatch]);

  return (
    <>
      <HeroSection
        Img={Img}
        bgImg
        mainHeading='CREATE DELIGHT'
        heading='Make your photos beter with our presets'
        alignCenter
        nextSection='feautured'
      />
      <FeaturedSection id='feautured'>
        {products.slice(0, 4).map((product) => (
          <Card key={product._id} product={product} isAdmin={isAdmin} />
        ))}
      </FeaturedSection>
      <NewSection>
        {products
          .slice(6, 9)
          .reverse()
          .map((product) => (
            <Card key={product._id} product={product} isAdmin={isAdmin} />
          ))}
      </NewSection>
      <InfoSection />
    </>
  );
};

export default Home;
