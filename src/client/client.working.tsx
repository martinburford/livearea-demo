import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";

// Create Apollo client
const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app",
  cache: new InMemoryCache()
});

// Components
import Carousel from "./components/carousel";
import CarouselGraphql from "./components/carousel-graphql";
import Grid from "./components/grid";

const carouselData = {
  pokemons: [{
    name: "Martin Burford",
    classification: "Martin classification",
    types: ["Martin type 1", "Martin type 2"],
    resistant: ["Martin resistant 1", "Martin resistant 2"],
    weaknesses: ["Martin weakness 1", "Martin weakness 2"],
    image: "https://img.pokemondb.net/artwork/bulbasaur.jpg"
  },{
    name: "Sean Farrington",
    classification: "Sean classification",
    types: ["Sean type 1", "Sean type 2"],
    resistant: ["Sean resistant 1", "Sean resistant 2"],
    weaknesses: ["Sean weakness 1", "Sean weakness 2"],
    image: "https://img.pokemondb.net/artwork/ivysaur.jpg"
  },{
    name: "Richard Matthias",
    classification: "Richard classification",
    types: ["Richard type 1", "Richard type 2"],
    resistant: ["Richard resistant 1", "Richard resistant 2"],
    weaknesses: ["Richard weakness 1", "Richard weakness 2"],
    image: "https://img.pokemondb.net/artwork/venusaur.jpg"
  }]
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <h1>Carousel</h1>
    <p>The data for the Carousel component can be either provided directly as a prop or via a GraphQL connection to a public API.</p>
    <Grid.Row>
      <Grid.Col mobile={{span: 12}} tablet={{span: 6}} desktop={{span: 6}}>  
        <h2>Carousel (data via props)</h2>
        <h3>Props table</h3>
        <Carousel data={carouselData} delay={1500} name="carousel" speed="slow" />
        <h3>Code block</h3>
        <h3>Different speeds</h3>
        <Grid.Row>
          <Grid.Col mobile={{span: 12}} tablet={{span: 12}} desktop={{span: 4}}>  
            <h4>Slow</h4>
            <Carousel compact={true} data={carouselData} delay={1500} name="carousel-slow" speed="slow" />
          </Grid.Col>
          <Grid.Col mobile={{span: 12}} tablet={{span: 12}} desktop={{span: 4}}>  
            <h4>Medium</h4>
            <Carousel compact={true} data={carouselData} delay={500} name="carousel-medium" speed="medium" />
          </Grid.Col>
          <Grid.Col mobile={{span: 12}} tablet={{span: 12}} desktop={{span: 4}}>  
            <h4>Fast</h4>
            <Carousel compact={true} data={carouselData} delay={250} name="carousel-fast" speed="fast" />
          </Grid.Col>
        </Grid.Row>
      </Grid.Col>
      <Grid.Col mobile={{span: 12}} tablet={{span: 6}} desktop={{span: 6}}>  
        <h2>Carousel GraphQL</h2>
        <h3>Props table</h3>
        <CarouselGraphql delay={1500} name="carousel-graphql" speed="slow" />
        <h3>Code block</h3>
        <h3>Different speeds</h3>
        <Grid.Row>
          <Grid.Col mobile={{span: 12}} tablet={{span: 12}} desktop={{span: 4}}>  
            <h4>Slow</h4>
            <CarouselGraphql compact={true} delay={1500} name="carousel-graphql-slow" speed="slow" />
          </Grid.Col>
          <Grid.Col mobile={{span: 12}} tablet={{span: 12}} desktop={{span: 4}}>  
            <h4>Medium</h4>
            <CarouselGraphql compact={true} delay={500} name="carousel-graphql-medium" speed="medium" />
          </Grid.Col>
          <Grid.Col mobile={{span: 12}} tablet={{span: 12}} desktop={{span: 4}}>  
            <h4>Fast</h4>
            <CarouselGraphql compact={true} delay={250} name="carousel-graphql-fast" speed="fast" />
          </Grid.Col>
        </Grid.Row>
      </Grid.Col>
    </Grid.Row>
  </ApolloProvider>
  , document.getElementById("root"));
