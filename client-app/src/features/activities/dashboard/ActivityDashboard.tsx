import React from 'react'
import {Grid, List } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import { ActivityList } from '../dashboard/ActivityList'
import { act } from 'react-dom/test-utils'
import { ActivityDetails } from '../details/ActivityDetails'
import { ActivityForm } from '../form/ActivityForm'

interface IProps {
    activities: IActivity[]
}

export const ActivityDashboard: React.FC<IProps> = ({activities}) => {
    return (
        <div>
            <Grid>
                <Grid.Column width={10}>
                    <ActivityList activities = {activities}/>
                </Grid.Column>
                <Grid.Column width={5}>
                    <ActivityDetails />
                    <ActivityForm />
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default ActivityDashboard
