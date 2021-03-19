import Classnames from "classnames/bind";
import React, { useEffect, useState } from "react";
import { Element, scroller } from "react-scroll";

// Styles
import styles from "./carousel.module.scss";

// Types
import { ICarousel } from "./carousel.types";

export const Carousel: React.FC<ICarousel> = ({ compact=false, data, delay, name: carouselName, speed }) => {
  const [state, updateState] = useState({
    activeCard: -1,
    totalCards: -1
  });

  const { activeCard, totalCards } = state;
  let transitionInMs = 500;

  switch(speed){
    case "fast":
      transitionInMs = 250;
      break;
    case "slow":
      transitionInMs = 1500;
      break;
  }

  const delayInMs = transitionInMs + delay;

  useEffect(() => {
    const timeout = setTimeout(() => {
      // What is the next slide to show?
      const nextSlideToShow = activeCard < totalCards ? activeCard+1 : 1;

      scroller.scrollTo(`${carouselName}-${nextSlideToShow}`, {
        containerId: carouselName,
        duration: transitionInMs,
        smooth: true
      });

      // Update the activeCard, so that a subsequent animation will be performed
      updateState({
        ...state,
        activeCard: nextSlideToShow
      });
    }, delayInMs);

    return () => {
      clearTimeout(timeout);
    }
  }, [activeCard]);
  
  // Store the GraphQL data in local component state
  useEffect(() => {
    updateState({
      activeCard: 1,
      totalCards: data.pokemons.length
    });

    console.log("Data from props", data);
  }, []);

  // Bind classnames to the components CSS module object in order to access its modular styles
  const cx = Classnames.bind(styles);
  const classnames = cx({
    carousel: true,
    compact
  });

  return (
    <>
      <div className={classnames}>
        <div id={carouselName} className="element">
          {data.pokemons.map((pokemon, index) => {
            const {
              name,
              classification,
              types,
              resistant,
              weaknesses,
              image
            } = pokemon;

            return (
              <Element name={`${carouselName}-${index+1}`} key={index}>
                <div className={styles.card}>
                  <div className={styles.pokemon}>
                    <img className={styles.character} src={image} />
                    <div className={styles.details}>
                      <h2>{name}</h2>
                      <em>{index + 1}</em>
                      <ul>
                        <li><strong>name: </strong> <span>{name}</span></li>
                        <li><strong>classification: </strong> {classification}</li>
                        <li><strong>types: </strong> {types.join(", ")}</li>
                        <li><strong>resistant: </strong> {resistant.join(", ")}</li>
                        <li><strong>weaknesses: </strong> {weaknesses.join(", ")}</li>
                      </ul>
                    </div>
                    <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" />
                  </div>
                </div>
              </Element>
            )
          })}
        </div>
      </div >
    </>
  )
};

export default Carousel;
