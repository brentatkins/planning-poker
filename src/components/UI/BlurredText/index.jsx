import { Text } from "grommet";
import styled from "styled-components";

export const BlurredText = styled(Text)`
  transition: ${props =>
    props.blurSize !== 0
      ? "none"
      : "filter 1s"}; // only apply transition when changing from blurred to not blurred
  transition-timing-function: ease-in;
  filter: blur(
    ${props =>
      props.blurSize !== false && props.blurSize >= 0 ? props.blurSize : 15}px
  );
`;
