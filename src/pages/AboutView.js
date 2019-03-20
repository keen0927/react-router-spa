import React, {Component} from 'react';

class AboutView extends Component {

    render() {

        const match = this.props.match.params.name;

        return (
            <div>
                <h2>소개</h2>
                컨테이너 컴포넌트에서는 이렇게 사용 {match}

            </div>
        );
    }
}

export default AboutView;
