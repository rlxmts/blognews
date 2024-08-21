import styled from "styled-components";
import GaleriaPosts from "../../components/Sections/GaleriaPosts"

const Section = styled.section`
    padding: 5rem 0;
`

const H2 = styled.h2`
    font-weight: 500;
    text-align: center;
`

const Home = ()=> {
    return(
        <Section>            
            <H2> Posts recentes:</H2>
            <GaleriaPosts />
        </Section>
    )
}
export default Home;