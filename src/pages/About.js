// import React from 'react';
//
// const About = ({match}) => {
//     return (
//         <div>
//           <h2>소개</h2>
//             <p>안녕하세요 저는 {match.params.name} 라우터 입니다.</p>
//         </div>
//     );
// };
//
// export default About;

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Test } from 'pages';

class About extends Component {



    render() {

        const match = this.props.match.params.name;
        const history = this.props.history;

        return (
            <div>
                <h2>소개</h2>
                컨테이너 컴포넌트에서는 {match} 이렇게 사용<br/>
                <Link to={`/aboutView/1`}>링크 테스트</Link>
                <button onClick={() => {
                    history.push('/Another')
                }}>온클릭 함수에서</button>
                <Test />
            </div>
        );
    }
}

export default About;
