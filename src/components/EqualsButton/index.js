import { EqualsButtonContainer } from './styles';

const EqualsButton = ({label, onClick}) => {
    return (
      <EqualsButtonContainer onClick={onClick} type="button">
       {label}
      </EqualsButtonContainer>
    );
  }
  
  export default EqualsButton;