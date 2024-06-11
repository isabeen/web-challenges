import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  turnOnAllLights,
  turnOffAllLights,
  lights,
  countIsOn,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={turnOffAllLights}
        disabled={countIsOn === 0}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={turnOnAllLights}
        disabled={countIsOn === lights.length}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
