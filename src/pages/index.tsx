import React from 'react'
import Head from 'next/head'

import { Container, Information, ButtonContainer } from '../styles/pages/Home'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home | favorite recipes</title>
      </Head>

      <header>
        <img src="/images/logo.svg" alt="logo"/>
      </header>

      <main>
        <section>
          <Information>
            <span></span>
            <div>
              <p>How many recipes do you <br/> know or remember?</p>
              <p>“Favorite recipes is a cookbook <br/> application where you can<br/> store your recipes and never<br/> lost, or even share with your<br/> friends at social media.”</p>
            </div>
          </Information>

          <ButtonContainer>
            <button type="button">About</button>
            <button type="button">Sign In</button>
          </ButtonContainer>
        </section>

        <img src="/images/home-image.png" alt="Home"/>
      </main>
    </Container>
  )
}
