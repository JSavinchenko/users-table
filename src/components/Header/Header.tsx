import {StyledHeader} from './Header.style';
import {Text, TextStyles} from '../../UI/Text';

export const Header = () => {
  return (
    <StyledHeader>
      <Text type={TextStyles.HEADER}>User To-Do Table</Text>
      <Text type={TextStyles.SMALL_HEADER}>
        User task table for effective planning.
      </Text>
    </StyledHeader>
  );
};
