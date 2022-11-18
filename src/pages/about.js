import * as React from 'react'
import Layout from '../components/templates/layout'

const AboutPage = () => {
    return(
        <Layout pageTitle="What do we do?">
            <p>We match you to a therapist that fits your needs!</p>
        </Layout>
    )

}

export const Head = () => <title>About</title>
export default AboutPage