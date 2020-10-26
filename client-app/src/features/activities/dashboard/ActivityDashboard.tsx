import React from 'react'
import {Grid, List } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import ActivityList from '../dashboard/ActivityList'
import { act } from 'react-dom/test-utils'

interface IProps {
    activities: IActivity[]
}

export const ActivityDashboard: React.FC<IProps> = ({activities}) => {
    return (
        <div>
            <Grid>
                <Grid.Column width={10}>
                    <ActivityList activities = {activities}/>
                    {/* <List>
                        {
                            activities.map((activity) => (
                                <List.Item key={activity.id}>{activity.title}</List.Item>
                            ))
                        }
                    </List> */}
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default ActivityDashboard
