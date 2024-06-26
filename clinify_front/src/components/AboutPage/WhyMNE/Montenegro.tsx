"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import isPropValid from "@emotion/is-prop-valid";

const Container = styled.div.attrs({
  className: "bg-gradient-to-r from-teal-200 via-teal-500 to-teal-700",
})`
  text-align: center;
  margin-bottom: 0;
  padding: 4rem 0;
  @media (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;

const Heading = styled.h2`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #ffffff;
  font-family: "Playfair Display", serif;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Subheading = styled.h3`
  font-size: 2rem;
  font-weight: normal;
  margin-bottom: 2rem;
  color: #ffffff;
  font-family: "Playfair Display", serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;

  margin-top: 3rem;

  @media (max-width: 1200px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const ImageWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "flipped",
})<{ flipped: boolean }>`
  position: relative;
  margin: 2rem;
  flex: 1 1 600px;
  max-width: 600px;
  height: 400px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;

  ${({ flipped }) =>
    flipped &&
    `
    transform: rotateY(180deg);
  `}

  @media (max-width: 1200px) {
    flex: 1 1 300px;
    max-width: 300px;
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
    max-width: 100%;
  }

  @media (max-width: 600px) {
    height: 300px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  backface-visibility: hidden;
`;

const ImageBack = styled.div.attrs({
  className: "bg-teal-900",
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  padding: 20px;
  color: white;
  text-align: left;
  font-family: "Georgia", serif;
  line-height: 1.5;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    padding: 10px;
    font-size: 0.8rem;
  }
`;

const Caption = styled.p`
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.6rem;
  font-family: "Playfair Display", serif;
  color: #ffffff;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled.div.attrs({
  className: "bg-teal-900",
})`
  display: inline-block;
  margin-top: 4rem;
  padding: 1rem 2rem;

  color: #fff;
  text-decoration: none;
  font-size: 1.6rem;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;
  font-family: "Playfair Display", serif;

  &:hover {
    background-color: #004d40;
  }

  @media (max-width: 600px) {
    margin-top: 2rem;
    font-size: 1.2rem;
    padding: 0.8rem 1.6rem;
  }
`;

interface ImageCardProps {
  src: string;
  alt: string;
  caption: string;
  text: React.ReactNode;
  autoFlip?: boolean;
  autoFlipDelay?: number;
}

const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  caption,
  text,
  autoFlip = false,
  autoFlipDelay = 1000,
}) => {
  const [flipped, setFlipped] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const handleClick = () => {
    setFlipped(!flipped);
  };

  useEffect(() => {
    if (autoFlip && inView) {
      const timer = setTimeout(() => {
        setFlipped(true);
      }, autoFlipDelay);
      return () => {
        clearTimeout(timer);
      };
    }
    return undefined;
  }, [autoFlip, autoFlipDelay, inView]);

  return (
    <div>
      <ImageWrapper ref={ref} flipped={flipped} onClick={handleClick}>
        <Image src={src} alt={alt} />
        <ImageBack>{text}</ImageBack>
      </ImageWrapper>
      <Caption>{caption}</Caption>
    </div>
  );
};

const ExperienceMontenegro: React.FC = () => {
  const { t } = useTranslation('about');

  return (
    <Container className="overflow-x-hidden">
      <Heading>{t('experienceMontenegro.heading')}</Heading>
      <Subheading>{t('experienceMontenegro.subheading')}</Subheading>
      <ImageContainer>
        <ImageCard
          src="/images/mne/seaside.jpeg"
          alt="Where to stay"
          caption={t('experienceMontenegro.cards.card1.caption')}
          text={
            <div>
              <p>
                <span style={{ fontWeight: "bold" }}>
                  Sveti Stefan (Saint Stephen)
                </span>{" "}
                {t('experienceMontenegro.cards.card1.text.0')}
              </p>
              <p>{t('experienceMontenegro.cards.card1.text.1')}</p>
              <p>{t('experienceMontenegro.cards.card1.text.2')}</p>
            </div>
          }
          autoFlip
        />
        <ImageCard
          src="/images/mne/ljepota.png"
          alt="What to see"
          caption={t('experienceMontenegro.cards.card2.caption')}
          text={
            <div>
              <p>
                <span style={{ fontWeight: "bold" }}>
                  Gospa od Škrpjela (Our Lady of the Rocks)
                </span>{" "}
                {t('experienceMontenegro.cards.card2.text.0')}
              </p>
              <p>{t('experienceMontenegro.cards.card2.text.1')}</p>
              <p>{t('experienceMontenegro.cards.card2.text.2')}</p>
            </div>
          }
        />
        <ImageCard
          src="/images/mne/zima.png"
          alt="Dine & Wine"
          caption={t('experienceMontenegro.cards.card3.caption')}
          text={
            <div>
              <p>
                <span style={{ fontWeight: "bold" }}>Durmitor</span>{" "}
                {t('experienceMontenegro.cards.card3.text.0')}
              </p>
              <p>{t('experienceMontenegro.cards.card3.text.1')}</p>
              <p>{t('experienceMontenegro.cards.card3.text.2')}</p>
            </div>
          }
        />
        <ImageCard
          src="/images/mne/hrana.jpeg"
          alt="Go Around"
          caption={t('experienceMontenegro.cards.card4.caption')}
          text={
            <div>
              <p>
                <span style={{ fontWeight: "bold" }}>
                  {t('experienceMontenegro.cards.card4.text.0')}
                </span>{" "}
              </p>
              <p>{t('experienceMontenegro.cards.card4.text.1')}</p>
              <p>{t('experienceMontenegro.cards.card4.text.2')}</p>
            </div>
          }
        />
      </ImageContainer>
      <Link href="/whymne">
        <CTAButton>{t('experienceMontenegro.ctaButton')}</CTAButton>
      </Link>
    </Container>
  );
};

export default ExperienceMontenegro;