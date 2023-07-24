// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Component Import
import Personal from 'src/pages/InfoPage'

const PersonalPage = () => <Personal />
PersonalPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default PersonalPage
