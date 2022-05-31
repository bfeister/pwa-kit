/*
 * Copyright (c) 2022, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'

import PDPLayoutA from './pdp-layout-a'
import PDPLayoutB from './pdp-layout-b'

const PDPLayout = ({layoutId, ...rest}) => {
    //Default layout in case the one defined is invalid
    const DefaultLayout = PDPLayoutA

    const layouts = [
        {
            id: 'pdp-layout-a',
            layout: PDPLayoutA
        },
        {
            id: 'pdp-layout-b',
            layout: PDPLayoutB
        }
    ]

    const foundLayout = layouts.find(({id}) => id === layoutId)

    const Layout = foundLayout ? foundLayout.layout : DefaultLayout

    return <Layout {...rest} />
}

PDPLayout.propTypes = {
    layoutId: PropTypes.string
}

export default PDPLayout
