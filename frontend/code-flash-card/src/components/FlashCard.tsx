import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import "../reset.css";

import { Card } from "./FlashCards";

export default function FlashCard({ card }: { card: Card }) {
    const { explain, viewCount, cardId } = card;
    return (
        <Styled.Container>
            <Styled.CardItem>
                <Link to={`/detail/${cardId}`}>
                    <p>{explain}</p>
                    <span>{viewCount}</span>
                </Link>
            </Styled.CardItem>
        </Styled.Container>
    );
}

const Container = styled.ul`
    display: grid;
    // grid-template-columns : 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 16px;
`

const CardItem = styled.li`
    width: 50%
    height: 156px;
// left: 16px;
// top: 122px;

background: #36E1C2;
Box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
// border-radius: 16px;
`

const Styled = { CardItem, Container };
