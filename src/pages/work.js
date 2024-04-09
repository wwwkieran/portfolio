import * as React from 'react'
import Seo from '../components/seo'
import WorkList from '../components/workList'
import NewLayout from '../components/newLayout'

const WorkPage = () => {
  return (<NewLayout title={'Work'}>
          <WorkList/>
      </NewLayout>
  )
}

export const Head = () => <Seo title="Work" />

export default WorkPage
