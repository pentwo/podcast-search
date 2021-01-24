import React from 'react';
import styled from 'styled-components';

import Podcast from './Podcast';

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Podcasts = ({
  result,
  setResult,
  handleClick,
  setOverlayData,
  filter
}) => (
  <List className="podcasts">
    {/* {Object.keys(result).length > 1 ? '' : "Can't find any podcasts"} */}
    {result
      .filter((item) => {
        if (filter === 'all') {
          return item;
        } else if (item.genreName === filter) {
          return item;
        } else {
          return null;
        }
      })
      .map((item) => (
        <Podcast
          key={item.trackId}
          info={item}
          setResult={setResult}
          handleClick={handleClick}
        />
      ))}
  </List>
);
export default Podcasts;
