import { styled } from "styled-components"
import { Link } from "react-router-dom"
import slingairimage from "../Assets/slingair.png"
import ecommerceimage from "../Assets/ECommerce.png"
import kavuacademyimage from "../Assets/KavuAcademy.png"
import studiowick from "../Assets/StudioWick.png"

const Work = () => {
    return(
        <>
        <WorkDiv>
            <h2>Projects</h2>
            <Top>
            <WorkProject1>
                <WorkTitle><Overlay>Slingair</Overlay></WorkTitle>
                <LinkDiv><LinkButton className="button" href="https://vercel.com/" target="_blank">Link</LinkButton></LinkDiv>
                <CodeDiv><CodeButton className="button" href="https://github.com/PaulSzavay/project-slingair" target="_blank">Code</CodeButton></CodeDiv>
            </WorkProject1>
            <WorkProject2>                
                <WorkTitle><Overlay>E Commerce Project</Overlay></WorkTitle>
                <LinkDiv><LinkButton className="button" href="https://vercel.com/" target="_blank">Link</LinkButton></LinkDiv>
                <CodeDiv><CodeButton className="button" href="https://github.com/ianwhite355/project-GROUP-e-commerce" target="_blank">Code</CodeButton></CodeDiv>
            </WorkProject2>
            </Top>
            <Bottom>
            <WorkProject3>                
                <WorkTitle><Overlay>Kavu Academy</Overlay></WorkTitle>
                <LinkDiv><LinkButton className="button" href="https://vercel.com/" target="_blank">Link</LinkButton></LinkDiv>
                <CodeDiv><CodeButton className="button" href="https://github.com/PaulSzavay/final_project" target="_blank">Code</CodeButton></CodeDiv>
            </WorkProject3>
            <WorkProject4>                
                <WorkTitle><Overlay>StudioWick</Overlay></WorkTitle>
                <LinkDiv><LinkButton className="button" href="https://studio-wick.vercel.app/" target="_blank">Link</LinkButton></LinkDiv>
                <CodeDiv><CodeButton className="button" href="https://github.com/PaulSzavay/Studio-Wick" target="_blank">Code</CodeButton></CodeDiv>
            </WorkProject4>
            </Bottom>
        </WorkDiv>
        </>
    )
}

export default Work


const WorkDiv = styled.div`
padding: 10rem 0rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const Top = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* padding: 5rem; */
`

const Bottom = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* padding: 5rem; */
`

const Overlay = styled.div`
background-color: rgb(255,255,255, 0.65);
padding: 1rem 2rem;
border-radius:1rem;
border: 0.2rem solid black;
`

const WorkProject1 = styled.div`
text-align: center;
width: 20rem; 
height:28rem;
/* background-color: green; */
border-radius: 3rem;
border: 1px solid black;
padding: 10rem 17.2rem;
margin: 4rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: url(${slingairimage});
background-size: cover;
background-repeat: no-repeat;
background-position: center;

.button{
    background-color: lightgrey;
}
`

const WorkProject2 = styled(WorkProject1)`
background-image: url(${ecommerceimage});
`

const WorkProject3 = styled(WorkProject1)`
background-image: url(${kavuacademyimage});
`

const WorkProject4 = styled(WorkProject1)`
background-image: url(${studiowick});
`

const WorkTitle = styled.h3`
display: flex;
justify-content: center;
font-size: 1.5rem;
text-align: center;
width: 300px;
position: relative;
top:-2.5rem;
padding-bottom: 4rem;
`

const LinkDiv = styled.div`
width: 115px;
margin-bottom: 1rem;
&:hover{
    .button{
    background-color:white;
    }
}
`

const LinkButton = styled.a`
display: flex;
justify-content: center;
align-items: center;
background-color: lightgrey;
border: 0.1rem solid black;
border-radius: 1rem;
padding: 0.5rem 1rem;
text-decoration:none;
color: black;
font-size: 2rem;
`

const CodeDiv = styled.div`
width: 115px;
&:hover{
    .button{
    background-color:white;
    background-image: none;
    }
}
`

const CodeButton = styled.a`
display: flex;
justify-content: center;
align-items: center;
background-color: lightgrey;
border: 0.1rem solid black;
border-radius: 1rem;
padding: 0.5rem 1rem;
text-decoration:none;
color: black;
font-size: 2rem;
`

