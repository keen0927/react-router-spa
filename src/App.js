import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';

import {
    Home,
    About,
    AboutView,
    Another
} from 'pages';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Route exact path={`/`} component={Home} />

        {/*타입 1 : 첫 라우트에 exact 추가 하는법과 아래의 타입2가 있다.*/}
        {/*<Route exact path={`/about`} component={About} />*/}
        {/*<Route path={`/about/:name`} component={About} />*/}

        {/*타입 2 : :name값을 선택적으로 받을 수 있게 params뒤에 ? 를 입력 */}
        {/*<Route path={`/about/:name?`} component={About} />*/}

          <Route exact path={`/about`} component={About} />
          <Route path={`/aboutView/:name?`} component={AboutView} />
          {/*<Route path={`/aboutView/:name/:anotherValue`} component={AboutView} />*/}

          <Route path={`/Another`} component={Another} />
      </div>
    );
  }
}

export default App;
