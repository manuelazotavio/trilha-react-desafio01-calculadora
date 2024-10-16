
import { ButtonGreyContainer } from './styles';

const ButtonGrey = ({label, onClick}) => {
    return (
      <ButtonGreyContainer onClick={onClick} type="button">
       {label}
      </ButtonGreyContainer>
    );
  }
  
  export default ButtonGrey;