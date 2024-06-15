import { FaXTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'
import { StyledSocialIcons } from './styles/SocialIcons.styled'

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href='https://twitter.com'><FaXTwitter /></a>
      </li>
      <li>
        <a href='https://facebook.com'><FaFacebookF /></a>
      </li>
      <li>
        <a href='https://linkedin.com'><FaLinkedinIn /></a>
      </li>
    </StyledSocialIcons>
  )
}