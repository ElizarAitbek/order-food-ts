import styled from "styled-components";
import OrderBasket from "../../components/UI/basket/OrderBasket";

interface UserHeaderProps {
  onToggle: () => void;
}

export const UserHeader = ({ onToggle }: UserHeaderProps) => {
  return (
    <Container>
      <h1>ReactMeals</h1>
      <OrderBasket onToggle={onToggle} totalAmount={12}>
        Your Cart
      </OrderBasket>
    </Container>
  );
};

const Container = styled.header`
  height: 101px;
  background: #8a2b06;
  padding: 0 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;
