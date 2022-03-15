import React from 'react';

import Layout from '../components/Layout';
import Section from '../components/Section';

import Hero from '../components/Hero';
import Bio from '../components/Bio';
import Specialties from '../components/Specialties';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';

const Index = () => (
  <Layout title="Home">
    <Section>
      <Hero />
    </Section>
    <Section id="about" heading="About me">
      <Bio />
    </Section>
    <Section heading="Specialties">
      <Specialties />
    </Section>
    <Section heading="Tech Stack">
      <TechStack />
    </Section>
    <Section heading="Recent Projects">
      <Projects />
    </Section>
  </Layout>
);

export default Index;
