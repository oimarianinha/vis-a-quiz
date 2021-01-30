import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Logo from '../src/components/Logo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Head from '../src/components/Head';

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
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head title={db.title} description={db.description} bg={db.bg} />
      <QuizContainer>
        <Logo logo={db.logo}/>
        <Widget>
          <Widget.Header>
            <h1> Vis a Quiz </h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit= {function (event){
              event.preventDefault();
              router.push(`/quiz?name=${name}`)
            }}>
              <input 
                onChange = {function(event) {
                  // State
                  // name = event.target.value;
                  setName(event.target.value);
                }}
                placeholder="Digite seu apelido" id='name' 
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar!
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1> Quizes da Galera</h1>
            <p>tiam tincidunt ornare semper. Fusce in facilisis metus, a mattis risus. Ut pretium lorem finibus nulla malesuada, quis facilisis me</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/oimarianinha/vis-a-quiz" />
    </QuizBackground>
  );
}
