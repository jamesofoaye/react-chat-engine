import React from 'react';

import Person from './Person'
import PersonForm from './PersonForm'

import { LeftOutlined, DownOutlined } from '@ant-design/icons'

export default class MessageForm extends React.Component {
    state = {
        collapsed: false,
        hovered: false
    }

    renderPeople(people) {
        return people.map((person, index) => {
            return (
                <Person 
                    key={`person_${index}`} 
                    person={person}
                    creds={this.props.creds} 
                    chat={this.props.chat} 
                />
            )
        })
    }
  
    render() {
        const { creds, chat } = this.props 

        if (!chat) { return <div /> }

        return (
            <div style={{ borderTop: '1px solid #f0f0f0' }}>

                <div 
                    onMouseEnter={() => this.setState({ hovered: true })}
                    onMouseLeave={() => this.setState({ hovered: false })}
                    onClick={() => this.setState({ collapsed: !this.state.collapsed })}
                    style={this.state.hovered ? { backgroundColor: '#f0f0f0', cursor: 'pointer' } : {}}
                >

                    <div style={{ fontSize: '17px', padding: '12px', fontWeight: '600' }}>
                        People
                    </div>

                    {
                        this.state.collapsed ?
                        <LeftOutlined style={styles.collapseIcon} /> :
                        <DownOutlined style={styles.collapseIcon} />
                    }

                </div>

                {
                    !this.state.collapsed &&
                    <div>

                        <div style={{ height: '12px' }} />

                        { this.renderPeople(chat.people) }

                        <div style={{ height: '12px' }} />

                        {
                            chat.admin === creds.userName &&
                            <PersonForm creds={creds} chat={chat} />
                        }

                    </div>
                }
            
            </div>
        )
    }
}

const styles = {
    collapseIcon: {
        float: 'right',
        position: 'relative',
        bottom: '30px',
        right: '12px'
    }
}