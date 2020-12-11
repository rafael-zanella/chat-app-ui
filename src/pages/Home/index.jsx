import React from 'react'
import Header from '../../components/Header/Header';
import Sidebar from "../../components/Sidebar";
import Chat from "../../components/Chat";
import Container, { Page, Main } from "./StyledComponents";

export default function Home() {
  return (
    <Container>
      <Page>
        <Header />
        <Main>
          <Sidebar />
          <Chat />
        </Main>
      </Page>

    </Container>
  )
}
