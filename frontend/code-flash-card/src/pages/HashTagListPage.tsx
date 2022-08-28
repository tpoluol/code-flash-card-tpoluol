import React from "react";
import styled from "@emotion/styled";

import { useFetch } from "../hooks";

import FlashCards, { Card } from "../components/FlashCards";
import FlashCardsNav from "../components/FlashCardsNav";
import FlashCardsTitle from "../components/FlashCardsTitle";
import { HashTagListPageLayout } from "../components/HashTagListPageLayout";

const url = `https://weareboard.kr/teosp/v1/card`;

export default function HashTagListPage() {
    const { data, error } = useFetch<Card[]>(url);
    
    const cards =
        data?.map((card) => {
            return {
                cardId: card.cardId,
                explain: card.explain,
                viewCount: card.viewCount,
            };
        }) || [];
    console.log(error);

    const mockKeyword = "# 자바스크립트";

    return (
        <HashTagListPageLayout>
            <FlashCardsNav />
            <FlashCardsTitle title={mockKeyword} />
            <FlashCards cards={cards} />
        </HashTagListPageLayout>
    );
}
