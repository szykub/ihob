<template>
  <div id="app">
    <Header />
    <Title />
    <About />
    <Mission />
    <Information />
    <Innovation />
    <HowItWorks />
    <Partners />
    <Union />
    <Movies />
    <Footer />
  </div>
</template>

<script>
import Title from './components/Title';
import Header from './components/Header';
import About from './components/About';
import Mission from './components/Mission';
import Information from './components/Information';
import Innovation from './components/Innovation';
import HowItWorks from './components/HowItWorks';
import Partners from './components/Partners';
import Union from './components/Union';
import Movies from './components/Movies';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {Movies,Footer, Union, Partners, Innovation, Information, Mission, Title, Header, About, HowItWorks },
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    text-decoration: none;
    list-style: none;
    background: none;
    font-weight: inherit;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    overflow-x: hidden;
    font-family: Poppins;
  }
</style>
