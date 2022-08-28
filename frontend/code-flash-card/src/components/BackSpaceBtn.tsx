import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export default function BackSpaceBtn() {
    return (
        <Styled.SectionLabel>
            <Link to="/">{"<-"}</Link>
        </Styled.SectionLabel>
        // TODO: <img/>  화살표 이미지
    );
}

const SectionLabel = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin: 24px 0 12px;
`

const Styled = { SectionLabel };
