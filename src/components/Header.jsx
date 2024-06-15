import {
  StyledHeader,
  StyledNav,
  StyledLogo,
  StyledImage,
} from './styles/Header.styled';
import { StyledContainer } from './styles/Container.styled';
import { StyledButton } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';

export default function Header() {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledNav>
          <StyledLogo src="images/logo.svg" alt="" />
          <StyledButton>Try It Free</StyledButton>
        </StyledNav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <StyledButton bg="#ff0099" color="#fff">
              Get Started For Free
            </StyledButton>
          </div>

          <StyledImage src="images/illustration-mockups.svg" alt="" />
        </Flex>
      </StyledContainer>
    </StyledHeader>
  );
}
