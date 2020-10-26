import React from 'react'
import { Item, Button, Label, Segment } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import { act } from '@testing-library/react'

interface IProps {
    activities: IActivity[]
}

export const ActivityList: React.FC<IProps> = ({ activities }) => {
    return (
        <Segment clearing>
            <Item.Group divided>
                {activities.map(actitvity => (
                    <Item key={actitvity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{actitvity.title}</Item.Header>
                            <Item.Meta>{actitvity.date}</Item.Meta>
                            <Item.Description>
                                <div>{actitvity.description}</div>
                                <div>{actitvity.city}, {actitvity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button floated='right' content='View' color='blue' />
                                <Label basic content='Category' />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}

            </Item.Group>
        </Segment>
    )
}

export default ActivityList
