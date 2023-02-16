import {useState, useMemo} from 'react';
import styled from 'styled-components';

import LogoSVG from '../assets/logo.svg';
import ArrowsSVG from '../assets/arrows.svg';
import _Table from './Table';
import {data} from '../types/data';
import createColumns from './Table/columnsConfig';

const Root = styled.div`
  display: flex;
  margin: 40px 72px;
  flex-direction: column;
  width: 100%;
`;

const Logo = styled.img.attrs({src: LogoSVG})`
  width: 250px;
  height: 86px;
`;

const Arrows = styled.img.attrs({src: ArrowsSVG})`
  width: 300px;
  height: 300px;
  position: absolute;
  top: -40px;
  right: -40px;
`;

const Table = styled(_Table)`
  margin: 40px 0 0;
  box-shadow: 0px 0px 4px rgba(48, 54, 66, 0.11),
    0px 2px 2px rgba(48, 54, 66, 0.1);
  border-radius: 4px;
  .avatar-col {
    width: 4%;
    min-width: 40px;
  }
  .id-col {
    width: 4%;
    min-width: 40px;
  }
` as typeof _Table;

const App = () => {
  const [attendees, setAttendees] = useState(data);

  const columns = useMemo(
    () =>
      createColumns((row) =>
        setAttendees((value) => value.filter(({id}) => row.id !== id))
      ),
    []
  );

  return (
    <Root>
      <Logo />
      <Arrows />
      <Table data={attendees} columns={columns} />
    </Root>
  );
};

export default App;
