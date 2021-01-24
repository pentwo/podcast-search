import React, { useState, useRef, useEffect } from 'react';

import 'normalize.css';
import './styles.css';

import styled from 'styled-components';

import Header from './components/Header';
import Search from './components/Search';
import Genres from './components/Genres';
import Podcasts from './components/Podcasts';
import Overlay from './components/Overlay';
import Footer from './components/Footer';
import { fetchPodcastData } from './utility/searchApi';

import Loading from './assets/dual-ring-1s-200px.svg';

const Wrapper = styled.div`
  /* background: var(--white); */
`;

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState([]);
  const [overlayData, setOverlayData] = useState({});
  const [filter, setFilter] = useState('all');
  const [isLoading, setLoading] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [isSearched, setSearched] = useState(false);

  const containerRef = useRef(null);

  // console.log(containerRef.current);

  const handleClick = async (e, info) => {
    setOverlayData({});
    setVisible(true);
    // console.log(info);
    const fetchResult = await fetchPodcastData(info.feedUrl);
    // console.log(fetchResult);
    setOverlayData({ ...fetchResult });
  };

  useEffect(() => {}, []);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      console.log("it's the end");
    }
  };

  return (
    <Wrapper className="app">
      <div
        className="container"
        ref={containerRef}
        onScroll={(e) => console.log(e)}
      >
        <Header />
        <Search
          inputValue={inputValue}
          setInputValue={setInputValue}
          setResult={setResult}
          setLoading={setLoading}
          setSearched={setSearched}
          setFilter={setFilter}
        />

        <Genres result={result} filter={filter} setFilter={setFilter} />
        <Podcasts result={result} handleClick={handleClick} filter={filter} />
        {isSearched && Object.keys(result).length < 1 && !isLoading
          ? 'No Search Result'
          : ''}
        {isLoading ? <img src={Loading} alt="loading" /> : ''}

        <Overlay
          isVisible={isVisible}
          setVisible={setVisible}
          overlayData={overlayData}
          setOverlayData={setOverlayData}
        />
        <Footer />
      </div>
    </Wrapper>
  );
}
