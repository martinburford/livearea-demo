import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

// Create Apollo client
const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app",
  cache: new InMemoryCache()
});

// Components
import Carousel from "./components/carousel";
import CarouselGraphql from "./components/carousel-graphql";
import Grid from "./components/grid";

// Component data
const carouselData = {
  pokemons: [{
    name: "Martin Burford",
    classification: "Martin classification",
    types: ["Martin type 1", "Martin type 2"],
    resistant: ["Martin resistant 1", "Martin resistant 2"],
    weaknesses: ["Martin weakness 1", "Martin weakness 2"],
    image: "https://img.pokemondb.net/artwork/bulbasaur.jpg"
  }, {
    name: "Sean Farrington",
    classification: "Sean classification",
    types: ["Sean type 1", "Sean type 2"],
    resistant: ["Sean resistant 1", "Sean resistant 2"],
    weaknesses: ["Sean weakness 1", "Sean weakness 2"],
    image: "https://img.pokemondb.net/artwork/ivysaur.jpg"
  }, {
    name: "Richard Matthias",
    classification: "Richard classification",
    types: ["Richard type 1", "Richard type 2"],
    resistant: ["Richard resistant 1", "Richard resistant 2"],
    weaknesses: ["Richard weakness 1", "Richard weakness 2"],
    image: "https://img.pokemondb.net/artwork/venusaur.jpg"
  }]
}

// Styles
import "../scss/app.scss";

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <nav>
        <img className="livearea-logo" src="https://www.liveareacx.com/wp-content/uploads/2018/03/LiveArea_logo_wht.png" />
        <ul>
          <li>
            <strong>Carousel</strong>
            <ol>
              <li><Link to="/carousel">Data via props</Link></li>
              <li><Link to="/carousel-graphql">GraphQL</Link></li>
            </ol>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route exact={true} path="/" component={() => <p>Please select an item from the navigation</p>} />
          <Route exact={true} path="/carousel" component={() => {
            return (
              <>
                <h1>Carousel &gt; data via props</h1>
                <p>The data for the Carousel component can be either provided directly as a prop or via a GraphQL connection to a public API.</p>
                <br />
                <Grid.Row>
                  <Grid.Col span={12}>
                    <Carousel data={carouselData} delay={1500} name="carousel" speed="slow" />
                    <h3>Different speeds</h3>
                    <Grid.Row>
                      <Grid.Col mobile={{ span: 12 }} tablet={{ span: 12 }} desktop={{ span: 4 }}>
                        <h4>Slow</h4>
                        <Carousel compact={true} data={carouselData} delay={1500} name="carousel-slow" speed="slow" />
                      </Grid.Col>
                      <Grid.Col mobile={{ span: 12 }} tablet={{ span: 12 }} desktop={{ span: 4 }}>
                        <h4>Medium</h4>
                        <Carousel compact={true} data={carouselData} delay={500} name="carousel-medium" speed="medium" />
                      </Grid.Col>
                      <Grid.Col mobile={{ span: 12 }} tablet={{ span: 12 }} desktop={{ span: 4 }}>
                        <h4>Fast</h4>
                        <Carousel compact={true} data={carouselData} delay={250} name="carousel-fast" speed="fast" />
                      </Grid.Col>
                    </Grid.Row>
                  </Grid.Col>
                </Grid.Row>
              </>
            )
          }} />
          <Route exact={true} path="/carousel-graphql" component={() => {
            return (
              <>
                <h1>Carousel &gt; GraphQL</h1>
                <p>The data for this type of carousel is provided via accessing a public GraphQL API from within the component itself, as if it were contained within a "Headless CMS".</p>
                <br />
                <Grid.Row>
                  <Grid.Col span={12}>
                    <CarouselGraphql delay={1500} name="carousel-graphql" speed="slow" />
                    <h3>Different speeds</h3>
                    <Grid.Row>
                      <Grid.Col mobile={{ span: 12 }} tablet={{ span: 12 }} desktop={{ span: 4 }}>
                        <h4>Slow</h4>
                        <CarouselGraphql compact={true} delay={1500} name="carousel-graphql-slow" speed="slow" />
                      </Grid.Col>
                      <Grid.Col mobile={{ span: 12 }} tablet={{ span: 12 }} desktop={{ span: 4 }}>
                        <h4>Medium</h4>
                        <CarouselGraphql compact={true} delay={500} name="carousel-graphql-medium" speed="medium" />
                      </Grid.Col>
                      <Grid.Col mobile={{ span: 12 }} tablet={{ span: 12 }} desktop={{ span: 4 }}>
                        <h4>Fast</h4>
                        <CarouselGraphql compact={true} delay={250} name="carousel-graphql-fast" speed="fast" />
                      </Grid.Col>
                    </Grid.Row>
                  </Grid.Col>
                </Grid.Row>
              </>
            )
          }} />
        </Switch>
      </main>
    </BrowserRouter>
  </ApolloProvider>
  , document.getElementById("root"));
