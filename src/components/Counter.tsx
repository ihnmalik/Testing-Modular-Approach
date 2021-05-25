import React from "react"
import { connect } from "react-redux"

const Counter = ({ count = 0 }) => (
    <div>{count}</div>
)

const mapStateToProps = (state: any) => ({
    count: state?.counter?.count
})

export default connect(mapStateToProps)(Counter)