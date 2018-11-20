import React from 'react'
import { Icon } from 'semantic-ui-react'

export default class ProjectMenu extends React.Component {
    render() {
        return (
            <section id="project-menu">
                <ul>
                    <li><Icon name="text height"></Icon>Rename</li>
                    <li><Icon name="edit outline"></Icon>Edit</li>
                    <li><Icon name="trash"></Icon>Delete</li>
                    <li><Icon name="folder outline"></Icon>New Folder</li>
                    <li><Icon name="target"></Icon>New Request</li>
                </ul>
            </section>
        )
    }
}