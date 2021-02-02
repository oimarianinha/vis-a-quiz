import React from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Logo from '../src/components/Logo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Head from '../src/components/Head';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head title={db.title} description={db.description} bg={db.bg} />
      <QuizContainer>
        <Logo logo={db.logo} />
        <Widget>
          <Widget.Header>
            <h1> Vis a Quiz </h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(event) => { setName(event.target.value); }}
                placeholder="Digite seu apelido"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar!
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1> Quizes da Galera</h1>
            <p>tiam tincidunt ornare semper. Fusce in facilisis metus, a mattis risus.</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/oimarianinha/vis-a-quiz" />
    </QuizBackground>
  );
}
