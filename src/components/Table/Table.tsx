import {Text, TextStyles} from '../../UI/Text';
import {
  StyledTable,
  StyledTableHeader,
  StyledTableBody,
  StyledTableContainer,
  StyledUserInfoContainer,
  StyledCircle,
  StyledDivImage,
  StyledUserText,
} from './Table.styles';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {useEffect} from 'react';
import {fetchUsers, fetchTodo} from '../../store/actions';
import {selectUsersWithTodoCount} from '../../store/userSelector';
import {User} from '../../store/types';
import spahe from './static/Shape.svg';

export const Table = () => {
  const headers = [
    {
      name: '#',
    },
    {
      name: 'USERNAME',
    },
    {
      name: 'TO-DO COUNT',
    },
  ];

  const dispatch = useAppDispatch();
  const usersWithTodoCount = useAppSelector(selectUsersWithTodoCount);
  const status = useAppSelector((state) => state.usersTodo.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
      dispatch(fetchTodo());
    }
  }, [dispatch, status]);

  return (
    <StyledTableContainer>
      <StyledTable cellSpacing='0' cellPadding='0'>
        <StyledTableHeader>
          <tr>
            {headers.map(({name}) => (
              <th key={name}>
                <Text type={TextStyles.TABLE_HEADER}>{name}</Text>
              </th>
            ))}
          </tr>
        </StyledTableHeader>
        <StyledTableBody>
          {usersWithTodoCount.map(
            (user: User & {todoCount: number}, index: number) => (
              <tr key={user.id}>
                <td>
                  <Text type={TextStyles.TABLE_MAIN}>{index + 1}</Text>
                </td>
                <td>
                  <StyledUserInfoContainer>
                    <StyledCircle>
                      <StyledDivImage>
                        <img src={spahe} />
                      </StyledDivImage>
                    </StyledCircle>
                    <StyledUserText>
                      <Text type={TextStyles.TABLE_MAIN}>{user.name}</Text>
                      <Text type={TextStyles.SMALL}>{user.email}</Text>
                    </StyledUserText>
                  </StyledUserInfoContainer>
                </td>
                <td>
                  <Text type={TextStyles.TABLE_MAIN}>{user.todoCount}</Text>
                </td>
              </tr>
            ),
          )}
        </StyledTableBody>
      </StyledTable>
    </StyledTableContainer>
  );
};
