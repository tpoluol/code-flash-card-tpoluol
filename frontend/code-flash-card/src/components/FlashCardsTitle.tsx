import styled from "@emotion/styled";

export default function FlashCardsTitle({ title }: { title: string; }) {
  return (
    <Styled.SectionLabel>
      <h1>{title}</h1>
    </Styled.SectionLabel>
  )
}

const SectionLabel = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin: 12px 0 12px;
`

const Styled = { SectionLabel };
