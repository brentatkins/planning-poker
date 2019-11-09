import { Text } from "grommet";
import styled from "styled-components";

export const BlurredText = styled(Text)`
  filter: blur(${props => (props.blurSize >= 0 ? props.blurSize : 10)}px);
`;
