import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types'
import { Popup, Icon } from 'semantic-ui-react'

export default class TalentCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            talentfeedData: this.props.talentfeedData,
            profileDisplay: false,
            showChange: true
        }
        this.handleChangeViewVideo = this.handleChangeViewVideo.bind(this);
        this.handleChangeProfile = this.handleChangeProfile.bind(this);
    };

    handleChangeViewVideo() {
        this.setState({
            showChange: false
        })

    }
    handleChangeProfile() {
        this.setState({
            showChange: true
        })
    }

    render() {
        const { name, currentEmployment, visa, skills, position } = this.props.talentfeedData;
        return (
            <div className="ui fluid card">
                <div className="content">
                    <i className="right floated big star icon"></i>
                    <div className="left floated header">{name}</div>
                </div>
                <div className="content">
                    {this.state.showChange ?
                        <video width="100%" controls></video>
                        :
                        <div className="ui two column grid">
                            <div className="ui column">
                                <div className="image">
                                    <img className="ui medium image" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                                </div>
                            </div>
                            <div style={{ textAlign: "left" }}>
                                <div className="ui column">
                                    <div style={{ marginBottom: '20px', marginTop: '15px' }}>
                                        <h3>Talent Snapshot</h3>
                                    </div>
                                    <div style={{ marginBottom: '35px' }}>
                                        <b>CURRENT EMPLOYER</b>
                                        {this.props.talentfeedData.currentEmployment != 0 ? <p>{currentEmployment}</p>
                                            :
                                            ""}
                                    </div>
                                    <div style={{ marginBottom: '35px' }}>
                                        <b>VISA STATUS</b>
                                        {this.props.talentfeedData.visa ? < p > {visa}</p>
                                            : ""
                                        }
                                    </div>
                                    <div>
                                        <b>POSITION</b>
                                        {this.props.talentfeedData.position ? < p > {position}</p>
                                            : ""
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div class="ui divider"></div>
                <div className="ui four column grid" style={{ marginBottom: '5px' }}>
                    <div className="ui column">
                        {this.state.showChange ?
                            <i className="big user icon" onClick={this.handleChangeViewVideo}></i>
                            :
                            <i className="big video icon" onClick={this.handleChangeProfile}></i>
                        }
                    </div>
                    <div className="ui column">
                        <i className="big file pdf outline icon"></i>
                    </div>
                    <div className="ui column">
                        <i className="big linkedin alternate icon"></i>
                    </div>
                    <div className="ui column">
                        <i className="big github icon"></i>
                    </div>
                </div>
                <div className="content">
                    {this.props.talentfeedData.skills != 0 ?
                        <button className="ui left floated tiny teal basic button" style={{ marginBottom: '5px', marginTop: '5px' }}>
                            {skills}
                        </button>
                        :
                        ""
                    }
                </div>
            </div>
        )
    }
}