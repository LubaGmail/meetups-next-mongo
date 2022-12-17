Setup
npx create-next=app app
    npx next dev        localhost:3000
    npm i sharp         npm run build       npm start

Hydration - a process in which a pre-rendered page is being turned into a SPA

getStaticProps - prepare props for the app which is done as part of the build process
    SSG     filled-dot      must restart when added
            empty-dot       no initial props
    ISG     revalidate      regen in N secs

Mongo auth
    Update .env.local with Mongo info

Deployment to Vercel
    https://vercel.com/new?onboarding=true





