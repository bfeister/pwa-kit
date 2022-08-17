/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React, {Fragment, ReactElement, ReactNode} from 'react'
import {withLegacyGetPropsAPI} from 'pwa-kit-react-sdk/ssr/universal/hocs'

interface AppProps {
    children: ReactNode
}

const App = (props: AppProps): ReactElement => {
    return (
        <Fragment>
            {props.children}
        </Fragment>
    )
}

export default withLegacyGetPropsAPI(App)