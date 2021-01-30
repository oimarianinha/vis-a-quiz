import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';


// Pode ser escrito em forma de função usando (), aqui usamos a crase. Isso é Javascript!
// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
                <h1> VIS a Quiz </h1>
            </Widget.Header>
            <Widget.Content>
              <p>Teste seus conhecimentos sobre a série VIS a VIS.</p>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1> Quizes da Galera</h1>

              <p>tiam tincidunt ornare semper. Fusce in facilisis metus, a mattis risus. Ut pretium lorem finibus nulla malesuada, quis facilisis me</p>
            </Widget.Content>
            
          </Widget>
          <Footer/>
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/oimarianinha/vis-a-quiz"/>
      </QuizBackground>
  )
}
