import { Text } from "grommet";
import styled from "styled-components";

export const BlurredText = styled(Text)`
  filter: blur(
    ${props =>
      props.blurSize !== false && props.blurSize >= 0 ? props.blurSize : 15}px
  );
`;
