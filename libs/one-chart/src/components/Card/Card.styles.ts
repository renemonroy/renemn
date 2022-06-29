import styled, { css } from "styled-components";
import { space } from "styled-system";

const sharedStyles = css`
  display: flex;
  ${space}
`;

/**
 * Card Content styles
 * ----------------------------------------------------------------
 */

export const SCard = styled.div`
  background-color: var(--och-card-bg-color);
  border: 1px solid var(--och-card-border-color);
  border-radius: ${({ theme }) => theme.def.borderRadius};
  flex-direction: column;
  height: 100%;
  ${sharedStyles}

  & > *:first-child {
    padding-top: 1rem;
  }
`;

/**
 * Card Header styles
 * ----------------------------------------------------------------
 */

export const SCardHeader = styled.header`
  border-bottom: 1px solid var(--och-header-border-color);
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1.5rem 1rem;
  ${sharedStyles}
`;

export const SCardHeaderLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 2rem;
`;

export const SCardHeaderRightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

/**
 * Card Content styles
 * ----------------------------------------------------------------
 */

export const SCardContent = styled.div`
  align-items: center;
  flex: 1;
  flex-direction: column;
  padding: 1.5rem;
  ${sharedStyles}
`;

/**
 * Card Placeholder styles
 * ----------------------------------------------------------------
 */

export const SCardPlaceholder = styled.div`
  flex-direction: column;
  height: 100%;
  ${sharedStyles}

  ${SCard} & {
    padding-top: 0;
  }
`;
