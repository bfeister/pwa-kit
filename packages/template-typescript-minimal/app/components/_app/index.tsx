import React from 'react'
import {Provider} from 'slas-react-sdk'
import {getAppOrigin} from 'pwa-kit-react-sdk/utils/url'

interface AppProps {
    children?: React.ReactNode
}

const App = ({children}: AppProps) => {
    return (
        <Provider
            proxy={`${getAppOrigin()}/mobify/proxy/api`}
            organizationId="f_ecom_zzrf_001"
            clientId="c9c45bfd-0ed3-4aa2-9971-40f88962b836"
            siteId="RefArch"
            shortCode="8o7m175y"
            debug={true}
        >
            {children}
        </Provider>
    )
}

export default App