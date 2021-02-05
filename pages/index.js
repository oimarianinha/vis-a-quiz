// React / Next
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

// Components
import db from '../db.json';
import Widget from '../src/components/Widget';
import Link from '../src/components/Link';
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
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
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
              <Button
                type="submit"
                disabled={name.length === 0}
              >
                Jogar!
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1> Quizes da Galera</h1>
            {db.external.map((linkExterno) => {
              const [projectName, githubUser] = linkExterno
                .replace('https:', '')
                .replace(/\//g, '')
                .split('.');

              return (
                <ul>
                  <li key={linkExterno}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                </ul>
              );
            })}
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/oimarianinha/vis-a-quiz" />
    </QuizBackground>
  );
}
