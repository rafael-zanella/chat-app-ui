import Container from "./StyledComponents";

const Message = ({ picture, showPicture, isLoggedAccount, time, message }) => {

  return (
    <Container showPicture={showPicture} isLoggedAccount={isLoggedAccount}>
      <header>
        <img src={picture} alt="img" />
        <span>{time}</span>
      </header>
      <p>{message}</p>
    </Container>
  )
}

export default Message;
