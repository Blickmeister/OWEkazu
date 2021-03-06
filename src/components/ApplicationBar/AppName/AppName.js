import React from 'react';
import PropTypes from 'prop-types';
import Time from '../Time/Time';


        const AppName = ({ email, username, name }) => {
            return (

                <div className="sidenav">
                    <div className="sidenav-cont">
                        <p className={'logo'}></p>
                        <a href="/login">Home</a>
                        {
                            username ? (
                                <a href="#" className={'login-btn'}>Přihlášen jako <strong>{username}</strong></a>
                            ) : (
                                <a href="/login" className={'login-btn'}>Přihlásit se</a>
                            )
                        }
                    </div>
                    <p className={'creators'}>Vytvořil: Schneider, Vítek, Cellar a Milenković</p>
                    <p> <Time /></p>

                </div>

            )
        }

AppName.propTypes = {
    name: PropTypes.string,
};

export default AppName;
