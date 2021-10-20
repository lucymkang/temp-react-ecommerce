import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center"></Wrapper>
      <img src={aboutImg} alt="nice desk" />
      <article>
        <div className="title">
          <h2>our story</h2>
          <div className="underline"></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          venenatis quam nec volutpat tristique. Nam non mauris laoreet,
          dignissim lectus at, commodo purus. Fusce luctus tempor orci, a
          accumsan diam commodo in. Vestibulum eget augue ex. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Nunc pellentesque elit eu consequat ultrices. Morbi
          ultrices ultrices ex, quis convallis turpis vestibulum eget. Praesent
          porttitor lacus a scelerisque consequat. Quisque sed mi nec leo
          imperdiet blandit eu eu nisl. Praesent ac ullamcorper sapien. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean nulla neque, rutrum id felis a, convallis
          facilisis neque. Sed tristique iaculis mauris et bibendum. Vestibulum
          nec consectetur felis. Aenean at posuere nibh. Sed varius dignissim
          eros, vitae fringilla velit ultrices eu. Proin ut gravida nisl, sit
          amet porttitor sem. Cras suscipit diam non augue tristique, nec cursus
          purus tincidunt. Morbi aliquet consectetur nisi ut rutrum. Nam maximus
          suscipit lacus a blandit. Proin vitae diam purus. Vestibulum dapibus
          malesuada ante quis imperdiet. Nunc cursus, elit ac laoreet semper,
          erat eros maximus dui, sit amet malesuada tortor urna vitae massa.
          Nullam et nibh et magna vehicula tincidunt ac non diam. Proin
          tincidunt volutpat rutrum. Donec blandit metus neque, et faucibus
          turpis consectetur vitae. Nam eget turpis lorem. Suspendisse auctor
          vitae arcu et suscipit. Mauris quis turpis a augue viverra fermentum.
        </p>
      </article>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
