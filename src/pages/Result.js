import React from 'react';
import PropTypes from 'prop-types';
import {resultUrl} from '../constants';
import {withRouter} from 'react-router';
import {Link} from "react-router-dom";

class Result extends React.Component {
    state = {
        isFetching: true,
        result: {}
    };

    static propTypes = {
        location: PropTypes.object,
        match: PropTypes.object,
        history: PropTypes.object,
    };

    componentDidMount() {
        const {match} = this.props;
        this.setState({isFetching: true});
        fetch(resultUrl + '?choice=' + match.params.choice)
            .then((res) => res.json())
            .then((res) => {
                this.setState({result: res, isFetching: false});
            })
            .catch((e) => {
                this.setState({isFetching: false});
                console.log(e);
            });
    }

    render() {
        const {result, isFetching} = this.state;
        return (
            <div className={'Content FlexCenter'}>
                {
                    isFetching ? (
                        <h2>Načítám</h2>
                    ) : (
                        <div className={'TextCenter'}>
                            <p>Zvolil jsi {result.choice}</p>
                            <h2>{result.result ? 'Správně' : 'Špatně'}</h2><br/>
                            <Link to={'/patient'}>Pacient<i className="fas fa-caret-right"></i></Link>
                        </div>
                    )
                }
            </div>



        );
    }
}

export default withRouter(Result);
