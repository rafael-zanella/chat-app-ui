import React from 'react';
import Input from "../Input/Input";
import Container, { Box, Item, Line } from "./StyledComponents";

const Sidebar = () => {
    return (
      <Container>
        <Input
          width="100%"
          height="40px"
          placeholder="SEARCH"
          type="text"
          fontColor="white"
          showIcon={false}
        />
        <Box>
          <Item>
            <img src="https://avatars2.githubusercontent.com/u/38277018?s=460&u=2023312a3bffc3d121b4ff5313caf4ed6e1911e8&v=4"  alt={1}/>
            <section>
              <div>
                <h1>John Doe</h1>
                <p>Hi there. How are you?</p>
              </div>
              <span>08:30</span>
            </section>
          </Item>
          <Line />

          <Item>
            <img src="https://yt3.ggpht.com/ytc/AAUvwnjtmF5xpJ0lxx9apjsIF8DHDIQUT5PQNr5Unqldpw=s900-c-k-c0x00ffffff-no-rj"  alt={1}/>
            <section>
              <div>
                <h1>Jessie Woo</h1>
                <p>Working with my friend!</p>
              </div>
              <span>09:00</span>
            </section>
          </Item>
          <Line />

          <Item>
            <img src="data:image/jpeg;base64,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"  alt={1}/>
            <section>
              <div>
                <h1>Amelia Nelson</h1>
                <p>Hi there. How are you?</p>
              </div>
              <span>08:50</span>
            </section>
          </Item>
        </Box>
      </Container>
    );
}

export default Sidebar;
