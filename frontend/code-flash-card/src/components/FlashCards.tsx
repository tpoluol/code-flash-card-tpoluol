import React from 'react';

import FlashCard from "./FlashCard";
import styled from "@emotion/styled";

// TODO: UI View단을 위한 interface 보관 장소 만들기
export interface Card {
  cardId: number;
  explain: string;
  viewCount: number;
}

export default function FlashCards({ cards }: { cards: Card[] }) {
  return (
    <Styled.Cover>
      {
        cards.map((card) => {
          return (
            <React.Fragment key={card.cardId}>
              <FlashCard card={card} />
            </React.Fragment>
          )
        })
      }
    </Styled.Cover>
  );
}

const Cover = styled.ul`
  display: flex;
  gap: 20px 2%;
  flex-wrap: wrap;
`

const Styled = { Cover };
