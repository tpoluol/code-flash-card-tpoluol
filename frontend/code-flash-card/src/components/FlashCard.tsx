import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import "../reset.css";

import { Card } from "./FlashCards";

export default function FlashCard({ card }: { card: Card }) {
    const { explain, viewCount, cardId } = card;
    return (
        <Styled.CardItem>
            <Link to={`/detail/${cardId}`}>
                <p>{explain}</p>
                <span>{viewCount}</span>
            </Link>
        </Styled.CardItem>
    );
}

const CardItem = styled.li`
    width: 156px;
    height: 156px;
    background: #36e1c2;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    margin: 0 10px 16px 0;

    // :nth-of-type(2n) {
    //     margin-right: 0;
    // }
`;

const Styled = { CardItem };
