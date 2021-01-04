import styled from 'styled-components';
import Icon from '../../images/icons/ArrangeHandle.svg';

const ArrangeHandle = () => {
  return <Img src={Icon} alt='re-arrange' />;
};

export default ArrangeHandle;

const Img = styled.img`
  margin-right: 10px;
  cursor: move;
`;
