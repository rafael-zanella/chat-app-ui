import Container, { TypeArea } from "./StyledComponents";
import Message from "../Message";
import { useEffect, useRef } from "react";
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import { ReactComponent as SmileIcon } from "../../assets/icons/smile.svg";
import { ReactComponent as SendIcon } from "../../assets/icons/send.svg";

const loggedAccountMock = 'gabriel@email.com';

const messagesMock = [
  {
    picture: 'https://avatars2.githubusercontent.com/u/38277018?s=460&u=2023312a3bffc3d121b4ff5313caf4ed6e1911e8&v=4',
    name: 'Rafael Scotti',
    email: 'rafael@email.com',
    timestamp: '2020-12-11T11:18PM',
    message: 'Ola, como vai?',
  },
  {
    picture: 'https://avatars2.githubusercontent.com/u/38277018?s=460&u=2023312a3bffc3d121b4ff5313caf4ed6e1911e8&v=4',
    name: 'Rafael Scotti',
    email: 'rafael@email.com',
    timestamp: '2020-12-11T11:18PM',
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
  },
  {
    picture: 'https://yt3.ggpht.com/ytc/AAUvwnjtmF5xpJ0lxx9apjsIF8DHDIQUT5PQNr5Unqldpw=s900-c-k-c0x00ffffff-no-rj',
    name: 'Gabriel Zanella',
    email: 'gabriel@email.com',
    timestamp: '2020-12-11T11:20PM',
    message: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
  },
  {
    picture: 'https://avatars2.githubusercontent.com/u/38277018?s=460&u=2023312a3bffc3d121b4ff5313caf4ed6e1911e8&v=4',
    name: 'Rafael Scotti',
    email: 'rafael@email.com',
    timestamp: '2020-12-11T11:18PM',
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
  },
  {
    picture: 'https://yt3.ggpht.com/ytc/AAUvwnjtmF5xpJ0lxx9apjsIF8DHDIQUT5PQNr5Unqldpw=s900-c-k-c0x00ffffff-no-rj',
    name: 'Gabriel Zanella',
    email: 'gabriel@email.com',
    timestamp: '2020-12-11T11:20PM',
    message: 'There are many vahumour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
  },
  {
    picture: 'https://avatars2.githubusercontent.com/u/38277018?s=460&u=2023312a3bffc3d121b4ff5313caf4ed6e1911e8&v=4',
    name: 'Rafael Scotti',
    email: 'rafael@email.com',
    timestamp: '2020-12-11T11:18PM',
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
  },
  {
    picture: 'https://avatars2.githubusercontent.com/u/38277018?s=460&u=2023312a3bffc3d121b4ff5313caf4ed6e1911e8&v=4',
    name: 'Rafael Scotti',
    email: 'rafael@email.com',
    timestamp: '2020-12-11T11:18PM',
    message: 'Lorem Ipsumhas been the industry\'s standard dummy text ever since the 1500s',
  },
];

const Chat = ({ messages = messagesMock, loggedAccount = loggedAccountMock }) => {

  const chatArea = useRef();

  const getTimeFromTimestamp = (timestamp) => {
    return timestamp.slice(-7, -2).toLowerCase();
  }

  const getDateFromTimestamp = (timestamp) => {
    return timestamp.slice(0, 10).toLowerCase();
  }

  const showPicture = (date, time, email, index) => {
    if (index === 0) return true
    const msg1 =  messages[index - 1];
    const msg1Date = getDateFromTimestamp(msg1.timestamp);
    const msg1Time = getTimeFromTimestamp(msg1.timestamp);

    if (msg1Date !== date) return true;
    if (msg1Time !== time) return true;

    return msg1.email !== email;
  }

  const isLoggedAccount = (email) => {
    return email === loggedAccount;
  }

  useEffect(() => {
    chatArea.current.scrollTop = chatArea.current.scrollHeight;
  })

  return (
    <Container>
      <section ref={chatArea}>
        {
          messages.map((msg, index) => {
            const { picture, name, email, timestamp, message } = msg;
            const date = getDateFromTimestamp(timestamp);
            const time = getTimeFromTimestamp(timestamp);
            return <Message
              key={index}
              picture={picture}
              showPicture={showPicture(date, time, email, index)}
              name={name}
              email={email}
              time={time}
              message={message}
              isLoggedAccount={isLoggedAccount(email)}
            />
          })
        }
      </section>

      <TypeArea>
        <Input 
          background='#FFFFFF' 
          width='90%'
          height='60px' 
          placeholder='Type a message'
          showIcon="true"
          Icon={SmileIcon}
          padding="0 25px"
        />
        
        <Button width="60px" height="60px" background="#3CC6B7" Icon={SendIcon} />
      </TypeArea>

    </Container>
  )
};

export default Chat;

