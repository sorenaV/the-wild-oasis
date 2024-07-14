import styled from "styled-components";

const StyledBanner = styled.div`
  background-color: var(--color-yellow-100);
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.3rem;
  display: flex;
  justify-content: center;
`;

function Banner() {
  return (
    <StyledBanner>
      <span>
        👋 Data mutations (create, update, delete) are deactivated in this demo
        app.
      </span>
    </StyledBanner>
  );
}

export default Banner;
