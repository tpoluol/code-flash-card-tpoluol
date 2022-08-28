import { css } from "@emotion/react"
import styled from "@emotion/styled"

const PADDING = '3vh'
const FOOTER_HEIGHT = `0vh`
const MAIN_SECTION_HEIGHT = css`calc(calc(100vh - ${FOOTER_HEIGHT}) - calc(${PADDING} + ${PADDING}))`
const OverayPageLayoutWapper = styled.div`
  background: #1E1E1E;
  
  padding: ${PADDING};
  display: flex;
  flex-direction: column;
`
const MainSection = styled.section`
  position: relative;
  height: ${MAIN_SECTION_HEIGHT};
`

export const HashTagListPageLayout = ({children}:{children:React.ReactNode})=>{
  return (
    <OverayPageLayoutWapper>
      <MainSection>
        {children}
      </MainSection>
    </OverayPageLayoutWapper>
  )
} 