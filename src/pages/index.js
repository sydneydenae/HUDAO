// Step 1: Import React
import * as React from 'react'
import Layout from '../components/templates/layout'
import ImageGallery from '../components/organisms/imageGallery'

// Step 2: Define your component
const IndexPage = () => {
  return (
      <Layout pageTitle="HUDAO">
        <h1>Uk us.</h1>
        <p>Where the therapist finds you.</p>
        
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage
