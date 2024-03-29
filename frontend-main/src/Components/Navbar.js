import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";

function Navbar() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const signOut = () => {
    dispatch({
      type: "SET_USER",
      user: null,
    });

    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <Container>
      <Inner>
        <Logo onClick={() => navigate("/")}>
          <img src="./amazon_logo1.png" alt="" />
        </Logo>
      
          
      
        <RightContainer>
          <NavButton onClick={() => navigate("/addproduct")}>
            <p>Add</p>
            <p>Product</p>
          </NavButton>
          <NavButton
            onClick={user ? () => signOut() : () => navigate("/login")}
          >
            <p>Hello,</p>
            <p>{user ? user?.fullName : "Guest"}</p>
          </NavButton>
          <NavButton onClick={() => navigate("#")}>
            <p>Return</p>
            <p>& Orders</p>
          </NavButton>
          <BasketButton onClick={() => navigate("/checkout")}>
            <img src="./basket-icon.png" alt="" />
            <p>{basket?.length}</p>
          </BasketButton>
        </RightContainer>
      </Inner>
      <MobileSearchbar>
        <input type="text" placeholder="Search..." />
        <SearchIcon onClick={() => navigate("/addproduct")}>
          <img src="./searchIcon.png" alt="" />
        </SearchIcon>
      </MobileSearchbar>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #131921;
  display: flex;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 767px) {
    height: 120px;
    flex-direction: column;
  }
`;
const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Add this line */
`;

const Logo = styled.div`
  margin-left: 20px;
  cursor: pointer;
  img {
    width: 100px;
    margin-top: 10px;
  }
`;

const AddIcon = styled.div`
  position: relative;
  background-color: #febd69;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;

  ::before,
  ::after {
    content: '';
    position: absolute;
    background-color: #fff;
    width: 60%;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ::after {
    transform: translate(-50%, -50%) rotate(90deg);
  }
`;


const MobileSearchbar = styled.div`
  height: 35px;
  width: 90%;
  display: flex;
  align-items: center;
  padding: 10px;

  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;

    &::placeholder {
      padding-left: 10px;
    }
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const SearchIcon = styled.div`
  background-color: #febd69;
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0px 5px 5px 0px;
  img {
    width: 22px;
  }
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-around;
  height: 100%;
  padding: 5px 15px;
`;

const NavButton = styled.div`
  color: #fff;
  padding: 5px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;

  p {
    &:nth-child(1) {
      font-size: 12px;
    }

    &:nth-child(2) {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

const BasketButton = styled.div`
  display: flex;
  align-items: center;
  height: 90%;
  cursor: pointer;

  img {
    width: 30px;
    margin-right: 10px;
  }

  p {
    color: #fff;
    font-weight: 500;
  }
`;
export default Navbar;
